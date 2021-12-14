const express = require("express");
const router = express.Router();
const questions = require("../data/questions");
const answers = require("../data/answers");
const communities = require("../data/communities");
const data = require("../data");
const questionData = data.questions;
const communityData = data.communities;
const xss = require("xss");
const userData = data.users;
const validator = require("../helpers/routeValidators/questionValidator");

router.get("/all", async (req, res) => {
  // const allQuestions = await questions.getAllWithoutParams();
  // console.log(allQuestions);
  // res.render("questions/all_questions", {
  //   questions: allQuestions,
  //   session: req.session,
  // });
  // return;
  res.redirect("/");
});

router.get("/:id/edit", async (req, res) => {
  req.params.id = xss(req.params.id);
  req.session.userId = xss(req.session.userId);
  if (req.session.userId) {
    if (xss(!req.params.id)) res.status(400).json({ error: "No id found" });
    try {
      const question = await questions.getID(xss(req.params.id));
      if (question.posterId != xss(req.session.userId)) {
        res.status(400).render("questions/edit-question", {
          error: "Unauthorized access",
          session: req.session,
        });
      } else {
        const com = await communityData.getAllcommunities();
        if (!question)
          res.status(400).render("questions/edit-question", {
            error: "No Question with that ID",
            session: req.session,
          });
        const comName = await communityData.getCommunityById(question.communityId);
        question.communityName = comName.community.name;
        for (let x of com) {
          if (x._id === question.communityId) {
            x.selected = true;
          }
        }
        res.render("questions/edit-question", {
          question: question,
          session: req.session,
          com: com,
          scriptUrl: ["validateEditQuestion.js"],
        });
      }
    } catch (e) {
      res.status(500).render("questions/edit-question", {
        error: "No Question with that ID",
        session: req.session,
      });
    }
  } else {
    res.redirect(`/questions/${xss(req.params.id)}`);
  }
});

router.post("/search", async (req, res) => {
  // console.log(req.body);
  let body = req.body;
  let validate = validator.validateSearchBody(body);
  if (!validate.isValid) {
    res.status(400).json({ hasErrors: true, error: validate.message });
    return;
  }
  // TODO: apply validation wherever necessary
  /* Assuming the body comes like this:
  { keyword: <string> } */
  const searchResult = await questions.search(body);
  if (searchResult.length === 0) {
    // Sending 200 here as it is search. There can be valid cases where the search result might turn up no results.
    res.render("search/search_results", {
      result: false,
      session: req.session,
      searchTerm: body.keyword,
      searchTotal: "No Results",
    });
    return;
  }
  // FOR NOW, returning JSON
  // res.status(200).json({ totalResults: searchResult.length, results: searchResult });
  // ideally, do this:
  // res.status(200).render("questions/search_results", { totalResults: searchResult.length, searchResult });
  res.status(200).render("search/search_results", {
    result: true,
    searchTerm: body.keyword,
    searchTotal: searchResult.length,
    searchResults: searchResult,
    session: req.session,
  });
});

router.put("/:id", async (req, res) => {
  let body = req.body;
  try {
    if (!body) throw "";
    if (!body.title || !body.description || !body.tags || !body.communityId) throw "";
    if (!req.params.id) throw "";
  } catch (e) {
    res.status(500).render("questions/edit-question", {
      success: "Error! Incomplete or Invalid data. Try Again",
      session: req.session,
      id: req.params.id,
    });
  }
  try {
    const question = await questions.getID(xss(req.params.id));
    if (!question) throw "No question with that id";
    if (question.posterId != xss(req.session.userId)) throw "Unauthorized Access";
  } catch (e) {
    res.status(500).render("questions/edit-question", {
      error: e,
      session: req.session,
    });
    return;
  }
  try {
    const tagsArray = body.tags.split(",");
    for (let i = 0; i < tagsArray.length; i++) {
      tagsArray[i] = tagsArray[i].trim();
    }
    await questions.editQuestion(
      xss(req.params.id),
      xss(body.title),
      xss(body.description),
      tagsArray,
      xss(body.communityId)
    );
    res.status(200).render("questions/edit-question", {
      success: "Question edited successfully",
      session: req.session,
      id: req.params.id,
    });
  } catch (e) {
    res.status(500).render("errors/internal_server_error", {
      session: req.session,
    });
  }
});

router.get("/search", async (req, res) => {
  // res.json({ search: "success" });
  res.render("search/search", {});
});

router.get("/:id", async (req, res) => {
  let id = xss(req.params.id);
  try {
    let questionAns = await questionData.getID(xss(req.params.id));
    let thisQuestionPoster = questionAns.posterId;
    let userDetails = await userData.getUserById(thisQuestionPoster);
    // building answer object
    let answers = [];
    if (questionAns.answers) {
      for (const answer of questionAns.answers) {
        let answerPosterDetails = null;
        if (answer.posterId) {
          answerPosterDetails = await userData.getUserById(answer.posterId);
        }
        let currUser = false;
        // adding this not null condition to handle breakage
        if (answerPosterDetails && answerPosterDetails._id === req.session.userId) {
          currUser = true;
        }
        let posterUser = false;
        if (thisQuestionPoster == req.session.userId) {
          posterUser = true;
        }
        let acceptedAnswer = false;
        if (questionAns.acceptedAnswer == answer._id) {
          acceptedAnswer = true;
        }
        let sortedComments = [];
        if (answer.comments) {
          if (answer.comments.length !== 0) {
            sortedComments = answer.comments.sort(function (a, b) {
              return b.updatedAt < a.updatedAt ? -1 : a.updatedAt > b.updatedAt ? 1 : 0;
            });
          }
        }
        sortedComments = sortedComments.splice(0, 4);
        answers.push({
          _id: answer._id,
          posterId: answer.posterId,
          displayName: answerPosterDetails ? answerPosterDetails.displayName : false,
          description: answer.description,
          upvotes: answer.upvotes,
          downvotes: answer.downvotes,
          voteCount: answer.upvotes.length - answer.downvotes.length,
          thisUserUpvotedAns: answer.upvotes.includes(req.session.userId),
          thisUserDownvotedAns: answer.downvotes.includes(req.session.userId),
          comments: sortedComments,
          createdAt: answer.createdAt,
          updatedAt: answer.updatedAt,
          currUser: currUser,
          posterUser: posterUser,
          acceptedAnswer: acceptedAnswer,
          userLoggedIn: req.session.userId ? true : false,
        });
      }
    }

    // sort answer by vote
    sortedAnswer = answers.sort(function (a, b) {
      return b.upvotes.length - a.upvotes.length;
    });
    questionAns.answers = sortedAnswer;
    questionAns.friendlyCreatedAt = questionAns.createdAt.toDateString();
    questionAns.friendlyUpdatedAt = questionAns.updatedAt.toDateString();
    questionAns.votes = questionAns.upvotes.length - questionAns.downvotes.length;
    const communityForQuestion = await communities.getCommunityDetailsById(questionAns.communityId);
    let userReportedQuestion = false;
    for (const allFlags of communityForQuestion.flaggedQuestions) {
      console.log(req.session.userId, allFlags);
      if (allFlags._id == questionAns._id) {
        for (const reporter of allFlags.reporterId) {
          if (req.session.userId === reporter) {
            userReportedQuestion = true;
          }
        }
      }
    }
    for (const allAnsFlag of communityForQuestion.flaggedAnswers) {
      for (let i = 0; i < questionAns.answers.length; i++) {
        if (questionAns.answers[i]._id === allAnsFlag._id && allAnsFlag.reporterId.includes(req.session.userId)) {
          questionAns.answers[i]["thisUserReportedAns"] = true;
          // continue;
        }
        if (!questionAns.answers[i]["thisUserReportedAns"]) questionAns.answers[i]["thisUserReportedAns"] = false;
      }
    }
    console.log(questionAns);
    // console.log(userReportedQuestion);
    res.status(200).render("questions/individual-question", {
      questionInfo: questionAns,
      questionPoster: userDetails,
      userLoggedIn: req.session.userId ? true : false,
      thisUserUpvoted: questionAns.upvotes.includes(req.session.userId),
      thisUserDownvoted: questionAns.downvotes.includes(req.session.userId),
      currentUserPostedQuestion: xss(req.session.userId) === thisQuestionPoster ? true : false,
      userReportedQuestion,
      session: req.session,
      scriptUrl: ["voteHandler.js", "commentPost.js"],
    });
  } catch (e) {
    console.log(e);
    res.status(404).render("errors/internal_server_error", { message: e, session: req.session });
  }
});

router.get("/", async (req, res) => {
  let communityId = xss(req.query.communityId);
  let posterId = xss(req.query.userId);
  // provide one parameter is ok
  if (communityId === undefined && posterId === undefined) {
    res.status(400).json({ error: "You should provide valid parameters" });
    return;
  }
  try {
    const allQuestions = await questionData.getAll(communityId, posterId);
    res.status(200).render("questions/all_questions", {
      questions: allQuestions,
    });
  } catch (e) {
    res.status(500).json({ error: e });
  }
});

router.get("/:id/delete", async (req, res) => {
  res.status(500).render("errors/internal_server_error", {
    session: req.session,
  });
});

router.delete("/:id/delete", async (req, res) => {
  let id = xss(req.params.id);
  // TODO: apply validation wherever necessary
  if (xss(req.session.userId)) {
    try {
      let question = await questions.getID(id);
      if (!question) throw "No question with that id";
      if (question.posterId != req.session.userId) {
        res.status(400).render("questions/delete", {
          message: "Unauthorized access",
          session: req.session,
        });
      } else {
        question = await questions.remove(id);
        if (!question.deleted) {
          // ideally, do this:
          // res.status(200).render("questions/search_results", { totalResults: 0, searchResult });
          res.status(500).render("errors/internal_server_error", {
            session: req.session,
          });
        }
        res.status(200).render("questions/delete", {
          message: "Deletion successful",
          session: req.session,
        });
      }
    } catch (e) {
      res.status(500).render("errors/internal_server_error", {
        session: req.session,
      });
    }
  } else {
    res.redirect(`/questions/${id}`);
  }
});

router.get("/create/new", async (req, res) => {
  if (xss(req.session.userId)) {
    let com = await communityData.getAllcommunities();
    res.status(200).render("Questions/new", {
      com: com,
      session: req.session,
      no_ques: true,
      scriptUrl: ["quickCreateCommunity.js"],
    });
  } else {
    res.redirect("/site/login");
  }
});

router.post("/", async (req, res) => {
  if (xss(req.session.userId)) {
    const QuestionPostData = req.body;

    QuestionPostData.posterId = req.session.userId;
    let errors = [];

    if (!QuestionPostData.title) {
      errors.push("You must provide the title");
    }
    if (!QuestionPostData.description) {
      errors.push("You must provide the description");
    }
    if (!QuestionPostData.posterId) {
      errors.push("You must provide the posterId");
    }
    if (!QuestionPostData.community) {
      errors.push("You must provide the community");
    }
    if (!QuestionPostData.tags) {
      errors.push("You must provide tags");
    } else if (
      QuestionPostData.title.length === 0 ||
      QuestionPostData.description.trim().length === 0 ||
      QuestionPostData.community.trim().length === 0 ||
      QuestionPostData.tags.trim().length === 0
    )
      errors.push("Invalid Input: Empty Data");

    if (errors.length > 0) {
      let com = await communityData.getAllcommunities();
      res.status(400).render("Questions/new", {
        com: com,
        errors: errors,
        hasErrors: true,
        title: QuestionPostData.title,
        description: QuestionPostData.description,
        community: QuestionPostData.community,
        tags: QuestionPostData.tags,
      });
      return;
    }
    let anonymous = false;
    if (QuestionPostData.anonymous) {
      anonymous = true;
    }
    try {
      const { title, description, posterId, community, tags } = QuestionPostData;
      const newQuestion = await questions.addQuestion(title, description, posterId, community, tags, anonymous);
      const addQuetoCom = await communityData.addQuestiontocommunity(community, newQuestion._id);

      res.redirect(`/questions/${newQuestion._id}`);
      // res.status(200).json({ msg: 'question has been added to db' });
    } catch (e) {
      res.status(500).json({ error: e });
    }
  } else {
    res.redirect("/site/login");
  }
});

router.delete("/:questionId/answers/:answerId", async (req, res) => {
  let questionId = xss(req.params.questionId);
  let answerId = xss(req.params.answerId);
  let userAns = await userData.getUserById(req.session.userId);
  if (!req.session.userId || req.session.userId != userAns._id) {
    res.status(403).json({ error: "Unauthorized access" });
    return;
  }
  await questions.deleteAnswer(answerId);
  res.redirect("/questions/" + questionId);
});

router.get("/:questionId/answers", async (req, res) => {
  if (!xss(req.params.questionId)) res.status(400).json({ error: "No id found" });
  try {
    const answersarray = await questions.getAllAnsweres(xss(req.params.questionId));
    let questionInfo = await questions.getID(xss(req.params.questionId));
    questionInfo.answeres = answersarray;
    res.status(200).render("questions/individual-question", { questionInfo: questionInfo });
  } catch (e) {
    res.status(400).json({ error: e });
  }
});

router.get("/:questionId/answers/:answerId/edit", async (req, res) => {
  if (!req.session.userId) {
    res.redirect("/");
    return;
  }
  let questionId = xss(req.params.questionId);
  let answerId = xss(req.params.answerId);
  let url = `/questions/${questionId}/answers/${answerId}`;
  let currentAnswer = await answers.getAnswer(questionId, answerId);
  if (req.session.userId != currentAnswer.posterId) {
    res.status(400).render("errors/internal_server_error", { message: "Unauthorized Access" });
    return;
  }
  console.log(currentAnswer);
  // console.log(currentAnswer);
  res.render("answers/edit_answer", { url, currentAnswer, session: req.session });
});

//create an answer
router.post("/:id/answers/create/", async (req, res) => {
  const description = xss(req.body.description);
  const questionId = xss(req.params.id);
  const userId = xss(req.session.userId);
  if (!description) error = "No content present in input";
  try {
    const insertAns = await questions.createAns(userId, questionId, description);
    if (insertAns) {
      res.redirect("/questions/" + req.params.id);
      return;
    }
  } catch (e) {
    res.status(404).json({ error: e });
  }
});

router.put("/:questionId/answers/:answerId", async (req, res) => {
  let questionId = xss(req.params.questionId);
  let answerId = xss(req.params.answerId);
  let updatePayload = { description: "", _method: "" };
  updatePayload.description = xss(req.body.description);
  updatePayload._method = xss(req.body._method);
  /* Assuming the update body as below:
  {
    description: "CONTENT",
  }
  */
  let validate = validator.validateUpdateBody(updatePayload);
  if (!validate.isValid) {
    // sending body to retain old values in the form
    res.status(400).render("answers/edit_answer", {
      hasErrors: true,
      error: validate.message,
      body: updatePayload,
      session: req.session,
    });
    return;
  }
  try {
    await questions.updateAnswer(questionId, answerId, updatePayload);
    res.redirect("/questions/" + req.params.questionId);
    return;
  } catch (e) {
    res.status(500).render("errors/internal_server_error", { session: req.session });
    return;
  }
});

// get individual answer:
router.get("/:questionId/answers/:answerId", async (req, res) => {
  let questionId = xss(req.params.questionId);
  let answerId = xss(req.params.answerId);
  if (questionId.trim() === "") {
    res.status(400).json({ error: "You should provide questionId" });
    return;
  }
  if (answerId.trim() === "") {
    res.status(400).json({ error: "You should provide answerId" });
    return;
  }
  try {
    const individualQustion = await questionData.getID(questionId);
    const answerList = individualQustion.answers;
    for (let answer of answerList) {
      if (answerId === answer._id) {
        res.status(200).render("answers/new_answer_form", {
          question: individualQustion,
          singalAnswer: answer,
        });
      }
      return;
    }
  } catch (e) {
    res.status(404).json({ error: e });
  }
  res.status(404).json({ error: "Error: No answer found" });
});

router.post("/:id/upvote", async (req, res) => {
  if (!xss(req.session.userId)) {
    res.status(400).json({ success: false, message: "User not logged in." });
    return;
  }
  let questionId = xss(req.params.id);
  let userId = xss(req.session.userId);
  const upvotePersist = await questions.registerUpvote(questionId, userId);
  const questionDetails = await questions.getID(questionId);
  let count = questionDetails.upvotes.length - questionDetails.downvotes.length;
  // TODO further additions
  res.status(200).json({ count });
});

router.post("/:id/downvote", async (req, res) => {
  if (!req.session.userId) {
    res.status(400).json({ success: false, message: "User not logged in." });
    return;
  }
  let questionId = req.params.id;
  let userId = req.session.userId;
  const downvotePersist = await questions.registerDownvote(questionId, userId);
  const questionDetails = await questions.getID(questionId);
  let count = questionDetails.upvotes.length - questionDetails.downvotes.length;
  // TODO further additions
  res.status(200).json({ count });
});

router.post("/:id/report", async (req, res) => {
  try {
    let questionId = xss(req.params.id);
    let userId = req.session.userId;
    let validate = validator.validateId(questionId);
    if (!validate.isValid) {
      res.redirect("/");
      return;
    }
    let reportQuestion = await questions.reportQuestion(questionId, userId);
    if (reportQuestion) {
      res.status(200).json({ message: "Successfully reported the question." });
      return;
    }
  } catch (e) {
    console.log(e);
    res.status(400).json({ message: e });
    return;
  }
});

// ajax route - returns json
router.post("/:questionId/answers/:answerId/upvote", async (req, res) => {
  try {
    let questionId = xss(req.params.questionId);
    let answerId = xss(req.params.answerId);
    let userId = req.session.userId;
    if (!req.session.userId) {
      res.status(401).json({ message: "You've to be logged in to perform this action! " });
      return;
    }
    let validateQid = validator.validateId(questionId);
    let validateAid = validator.validateId(answerId);
    if (!(validateQid && validateAid)) {
      res.status(400).json({ message: "Invalid input parameters - something wrong with the questionId and answerId " });
      return;
    }
    let count = await questions.registerUpvoteForAnswer(questionId, answerId, userId);
    res.status(200).json({ count });
  } catch (e) {
    console.log(e);
    res.status(400).json({ message: e });
    return;
  }
});

// ajax route - returns json
router.post("/:questionId/answers/:answerId/downvote", async (req, res) => {
  try {
    let questionId = xss(req.params.questionId);
    let answerId = xss(req.params.answerId);
    let userId = req.session.userId;
    if (!req.session.userId) {
      res.status(401).json({ message: "You've to be logged in to perform this action! " });
      return;
    }
    let validateQid = validator.validateId(questionId);
    let validateAid = validator.validateId(answerId);
    if (!(validateQid && validateAid)) {
      res.status(400).json({ message: "Invalid input parameters - something wrong with the questionId and answerId " });
      return;
    }
    let count = await questions.registerDownvoteForAnswer(questionId, answerId, userId);
    res.status(200).json({ count });
  } catch (e) {
    console.log(e);
    res.status(400).json({ message: e });
    return;
  }
});

router.post("/:id/acceptedAnswer/:ansId", async (req, res) => {
  if (!req.session.userId) {
    res.redirect("/");
    return;
  }
  try {
    const questionDetails = await questions.getID(req.params.id);
    if (questionDetails.posterId != req.session.userId) {
      res.status(500).json({ error: "unauthorized access" });
    }
    let acceptedAnswer = await questions.acceptAnswer(req.params.id, req.params.ansId);
    if (acceptedAnswer) {
      res.status(200).redirect("/questions/" + req.params.id);
    } else {
      throw "cannot update question";
    }
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: e });
  }
});

// create a comment in an answer
router.post("/:id/answer/:answerId/createComment", async function (req, res) {
  // if(!xss(req.session.userId)){
  //   res.status(403).json({ error: "Unauthorized access" });
  //   return;
  // }
  let questionId = xss(req.params.id);
  let answerId = xss(req.params.answerId);
  let commentText = xss(req.body.commentText);
  let userId = xss(req.session.userId);
  if (!questionId || !answerId) {
    res.status(403).json({ error: "Please refresh the page." });
    return;
  }
  // if(!questionId || !answerId ||!userId ){
  //   res.status(403).json({ error: 'Please refresh the page.' });
  //   return;
  // }
  if (!commentText || commentText.trim().length === 0) {
    res.status(403).json({ error: "Please input the valid content." });
    return;
  }

  try {
    const insertComment = await answers.addComment(commentText, userId, answerId, questionId);
    if (insertComment) {
      res.redirect("/questions/" + questionId);
      return;
    }
  } catch (e) {
    console.log(e);
    res.status(400).json({ error: e });
  }
});

// ajax route - must return json
router.post("/:questionId/answers/:answerId/report", async (req, res) => {
  try {
    let questionId = xss(req.params.questionId);
    let answerId = xss(req.params.answerId);
    let userId = req.session.userId;
    if (!userId) {
      res.status(401).json({ message: "You've to be logged in first. " });
      return;
    }
    let validateQuestionId = validator.validateId(questionId);
    let validateAnswerId = validator.validateId(answerId);
    if (!(validateQuestionId && validateAnswerId)) {
      res.status(400).json({ message: "Cannot report question. Invalid parameters passed." });
      return;
    }
    const reportAnswer = await answers.reportAnswer(questionId, answerId, userId);
    if (reportAnswer) {
      res.status(200).json({ message: "Successfully reported the answer. " });
      return;
    }
    res.status(400).json({ message: "Couldn't report answer. Something went wrong." });
    return;
  } catch (e) {
    console.log(e);
    res.status(400).json({ message: "Couldn't report answer. Something went wrong." });
    return;
  }
});

module.exports = router;
