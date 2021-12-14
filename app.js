const express = require("express");
const path = require("path");
const exphbs = require("express-handlebars");
const session = require("express-session");

const app = express();
const routes = require("./routes");
const middlewares = require("./middlewares/middlewares");

app.use(
  session({
    name: "AuthCookie",
    secret: "sacredword",
    resave: false,
    saveUninitialized: false,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/public", express.static(path.resolve(__dirname + "/public")));

app.use("/users/:id", middlewares.changeMethodToPutForUserprofileUpdate);
app.use("/questions/:id", middlewares.questionEditMiddleware);
app.use("/questions/:id/delete", middlewares.questionDeleteMiddleware);
app.use("/communities/:id/edit/edit", middlewares.changeMethodToPutForCommunityEdit);
app.use("/questions/:questionId/answers/:answerId", middlewares.changeMethodToPutForAnswerUpdate);

app.use("/questions/search", (req, res, next) => {
  if (req.method == "POST") {
    if (req.body.keyword.trim().length == 0 || req.body.keyword.match(/^[^a-zA-Z0-9]+$/) != null) res.redirect("/");
    else next();
  } else {
    next();
  }
});
app.use("/questions/:id", middlewares.questionEditMiddleware);
app.use("/questions/:id/delete", middlewares.questionDeleteMiddleware);
app.use("/communities/:id/edit/edit", middlewares.changeMethodToPutForCommunityEdit);

app.use("/communities/:id", middlewares.changeMethodToPutForAnswerUpdate);

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

routes(app);

app.listen(3000, () => {
  console.log("Server started at port 3000!");
});
