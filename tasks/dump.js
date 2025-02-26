const communities = [
  {
    _id: "fecce1ee-21ab-4a9a-80fc-4f33239c3b24",
    name: "Photography",
    description: "A community for photographers!",
    questions: [
      "c7a84f42-7f91-41dd-962a-f6fb2515f0cf",
      "e49e9147-3e27-4b68-b815-4009c1f5117e",
      "5dfcd653-ecf0-4b68-a9a3-dfce42d7c38c",
      "ccce5708-7537-446b-aedb-3584bf68a0b0",
    ],
    subscribedUsers: ["54e87284-b7a4-4258-acbf-7c18dc7febff"],
    administrator: "54e87284-b7a4-4258-acbf-7c18dc7febff",
    flaggedQuestions: [],
    flaggedAnswers: [
      {
        _id: "fac76e13-c607-457e-ac2d-180133aa0531",
        questionId: "5dfcd653-ecf0-4b68-a9a3-dfce42d7c38c",
        reporterId: ["d30c7c44-6a7e-4d13-827a-eb4ffe6f6dbd"],
        flag: 1,
      },
    ],
    createdAt: new Date("2021-12-12T22:36:31.457Z"),
    updatedAt: new Date("2021-12-12T22:36:31.457Z"),
  },
  {
    _id: "134dd1da-9eb4-480a-a605-58173a7d31f3",
    name: "Coding and Development",
    description: "A community for developers and software engineers - experienced and newbies alike! :)",
    questions: [
      "eeecc819-4eeb-4bd7-af6e-929f47f5d14e",
      "e14fbf21-ad34-4f16-8caa-9259cdd3ed70",
      "6af2de4d-e21e-449b-8feb-2c6c8794efda",
      "3033287f-eb06-426e-8628-e07086115192",
    ],
    subscribedUsers: ["54e87284-b7a4-4258-acbf-7c18dc7febff"],
    administrator: "54e87284-b7a4-4258-acbf-7c18dc7febff",
    flaggedQuestions: [],
    flaggedAnswers: [
      {
        _id: "a51e5a65-5ee9-4556-8e00-0644a55fc390",
        questionId: "6af2de4d-e21e-449b-8feb-2c6c8794efda",
        reporterId: ["f26dff40-8a7f-4719-9e51-ef16dde7a25a"],
        flag: 1,
      },
    ],
    createdAt: new Date("2021-12-12T22:42:09.191Z"),
    updatedAt: new Date("2021-12-12T22:42:09.191Z"),
  },
  {
    _id: "84089f48-7823-4a01-b4b7-5294408bc2ee",
    name: "The Great Outdoors",
    description: "For all hikers out there!",
    questions: ["24443894-1cda-4813-aab0-e77a14780832"],
    subscribedUsers: ["9b871932-5abf-4608-8273-a1f3888398cd"],
    administrator: "9b871932-5abf-4608-8273-a1f3888398cd",
    flaggedQuestions: [],
    flaggedAnswers: [],
    createdAt: new Date("2021-12-12T22:53:59.742Z"),
    updatedAt: new Date("2021-12-12T22:53:59.742Z"),
  },
  {
    _id: "0f0a25b8-f09d-4eed-8702-9fb28a139ec6",
    name: "Servers and stuff",
    description: "Community related to servers and other stuff!",
    questions: ["9d52870d-9967-4ea7-930b-7d7310148bd9", "2a6acd7e-931d-4d00-a73d-0b60edbbbb81"],
    subscribedUsers: ["9b871932-5abf-4608-8273-a1f3888398cd"],
    administrator: "9b871932-5abf-4608-8273-a1f3888398cd",
    flaggedQuestions: [],
    flaggedAnswers: [],
    createdAt: new Date("2021-12-12T23:02:28.896Z"),
    updatedAt: new Date("2021-12-12T23:02:28.896Z"),
  },
  {
    _id: "00513741-526d-40d5-9160-a0cc14782450",
    name: "Gaming",
    description: "For all the gamers who live more than once!",
    questions: ["3171313c-220b-400e-ab55-45196e9c53bd", "63863414-f6d2-4876-a059-f45fcc99c917"],
    subscribedUsers: ["f26dff40-8a7f-4719-9e51-ef16dde7a25a"],
    administrator: "f26dff40-8a7f-4719-9e51-ef16dde7a25a",
    flaggedQuestions: [
      {
        _id: "3171313c-220b-400e-ab55-45196e9c53bd",
        reporterId: ["54e87284-b7a4-4258-acbf-7c18dc7febff"],
        flag: 1,
      },
    ],
    flaggedAnswers: [],
    createdAt: new Date("2021-12-12T23:21:13.047Z"),
    updatedAt: new Date("2021-12-12T23:21:13.047Z"),
  },
  {
    _id: "fe881b06-9462-4d15-b8a1-c6c8bf12b8a0",
    name: "Physics",
    description: "In the beginning there was nothing, which exploded.",
    questions: ["22f0ece4-8c70-4544-96eb-31ed0aa36620", "a09c96f9-62da-4a65-8941-7689d6c49f83"],
    subscribedUsers: ["f26dff40-8a7f-4719-9e51-ef16dde7a25a"],
    administrator: "f26dff40-8a7f-4719-9e51-ef16dde7a25a",
    flaggedQuestions: [
      {
        _id: "a09c96f9-62da-4a65-8941-7689d6c49f83",
        reporterId: ["9b871932-5abf-4608-8273-a1f3888398cd", "54e87284-b7a4-4258-acbf-7c18dc7febff"],
        flag: 2,
      },
    ],
    flaggedAnswers: [],
    createdAt: new Date("2021-12-12T23:23:55.728Z"),
    updatedAt: new Date("2021-12-12T23:23:55.728Z"),
  },
];

const questions = [
  {
    _id: "c7a84f42-7f91-41dd-962a-f6fb2515f0cf",
    title: "What is white balance in a camera? When and where should I use WB?",
    description:
      "I like to do different experiments in my photography. Recently I was experimenting with white balance. Can anyone help me? What is actually white balance and when it is used? Do you have an example?",
    communityId: "fecce1ee-21ab-4a9a-80fc-4f33239c3b24",
    tags: ["white-balance"],
    posterId: "54e87284-b7a4-4258-acbf-7c18dc7febff",
    upvotes: [],
    downvotes: [],
    answers: [],
    acceptedAnswer: "",
    anonymous: false,
    createdAt: new Date("2021-12-12T22:37:15.716Z"),
    updatedAt: new Date("2021-12-12T22:37:15.716Z"),
  },
  {
    _id: "e49e9147-3e27-4b68-b815-4009c1f5117e",
    title: "Lots of noise in my hockey pictures. What am I doing wrong?",
    description:
      "I often take pictures of hockey players but they have a lot of noise and look very bad. I guess my lens doesn't have a big enough aperture, but I'd like to know what I could do to take better shots. I tried using low ISO values and maximum aperture, but shutter speed has to be very quick for this sport so it doesn't work very well.",
    communityId: "fecce1ee-21ab-4a9a-80fc-4f33239c3b24",
    tags: ["iso-noise"],
    posterId: "54e87284-b7a4-4258-acbf-7c18dc7febff",
    upvotes: [],
    downvotes: [],
    answers: [],
    acceptedAnswer: "",
    anonymous: false,
    createdAt: new Date("2021-12-12T22:38:17.831Z"),
    updatedAt: new Date("2021-12-12T22:38:17.831Z"),
  },
  {
    _id: "5dfcd653-ecf0-4b68-a9a3-dfce42d7c38c",
    title: "For sports photography, should I use image stabilization or a faster lens?",
    description:
      "For sports, I know that a faster lens would usually be considered more important than image stabilization, but what if, after selecting your shutter speed, your camera is picking apertures that don't require a super-fast lens?",
    communityId: "fecce1ee-21ab-4a9a-80fc-4f33239c3b24",
    tags: ["sports-photography"],
    posterId: "54e87284-b7a4-4258-acbf-7c18dc7febff",
    upvotes: [],
    downvotes: [],
    answers: [
      {
        _id: "fac76e13-c607-457e-ac2d-180133aa0531",
        posterId: "d30c7c44-6a7e-4d13-827a-eb4ffe6f6dbd",
        description: "Why are you posting this?",
        upvotes: [],
        downvotes: [],
        comments: [
          {
            _id: "50304b8e-074f-4ded-a374-a07c4342d8ec",
            commenterId: "9b871932-5abf-4608-8273-a1f3888398cd",
            commentText: "What is wrong with asking a question?",
            createdAt: new Date("2021-12-12T23:38:21.238Z"),
            updatedAt: new Date("2021-12-12T23:38:21.238Z"),
          },
          {
            _id: "6040d037-d0d1-461a-a343-6164b13bf969",
            commenterId: "d30c7c44-6a7e-4d13-827a-eb4ffe6f6dbd",
            commentText: "I'm reporting this!",
            createdAt: new Date("2021-12-12T23:40:35.853Z"),
            updatedAt: new Date("2021-12-12T23:40:35.853Z"),
          },
        ],
        createdAt: new Date("2021-12-12T23:36:56.380Z"),
        updatedAt: new Date("2021-12-12T23:36:56.380Z"),
      },
    ],
    acceptedAnswer: "",
    anonymous: false,
    createdAt: new Date("2021-12-12T22:39:04.699Z"),
    updatedAt: new Date("2021-12-12T22:39:27.051Z"),
  },
  {
    _id: "ccce5708-7537-446b-aedb-3584bf68a0b0",
    title: "Do the same camera settings lead to the same exposure across different sensor sizes?",
    description:
      "Let's say I have a micro-4/3rd camera and a full frame camera, both set to 1/60 at f/2.8, taking a picture of the same scene in the same lighting. Will the exposure be the same across both cameras despite the different sensor sizes?",
    communityId: "fecce1ee-21ab-4a9a-80fc-4f33239c3b24",
    tags: ["wide-aperture"],
    posterId: "54e87284-b7a4-4258-acbf-7c18dc7febff",
    upvotes: [],
    downvotes: [],
    answers: [
      {
        _id: "f17557d1-b149-4259-909a-b2dc3b240dc8",
        posterId: "f26dff40-8a7f-4719-9e51-ef16dde7a25a",
        description:
          "Yes. Exposure is based on the amount of light that hits any given point on the sensor (or film), not the total amount of light for the whole area. (The light hitting the corners doesn't have any effect on the light hitting the center, or anywhere else.) Or to put it the other way around, a full-frame sensor records more overall light, but for the same exposure, it's exactly as much more light as there is more sensor area.",
        upvotes: [],
        downvotes: [],
        comments: [],
        createdAt: new Date("2021-12-12T23:26:53.812Z"),
        updatedAt: new Date("2021-12-12T23:26:53.812Z"),
      },
    ],
    acceptedAnswer: "f17557d1-b149-4259-909a-b2dc3b240dc8",
    anonymous: false,
    createdAt: new Date("2021-12-12T22:41:31.126Z"),
    updatedAt: new Date("2021-12-12T23:27:13.313Z"),
  },
  {
    _id: "eeecc819-4eeb-4bd7-af6e-929f47f5d14e",
    title: "How can I uninstall npm modules in Node.js?",
    description:
      "Do we have any command or process to uninstall a module from the root (something like npm uninstall <module_name>) or will simply removing the module files do?",
    communityId: "134dd1da-9eb4-480a-a605-58173a7d31f3",
    tags: ["node.js", "npm"],
    posterId: "54e87284-b7a4-4258-acbf-7c18dc7febff",
    upvotes: [],
    downvotes: [],
    answers: [],
    acceptedAnswer: "",
    anonymous: false,
    createdAt: new Date("2021-12-12T22:43:24.163Z"),
    updatedAt: new Date("2021-12-12T22:43:24.163Z"),
  },
  {
    _id: "e14fbf21-ad34-4f16-8caa-9259cdd3ed70",
    title: "Command to remove all npm modules globally",
    description: "Is there a command to remove all global npm modules? If not, what do you suggest?",
    communityId: "134dd1da-9eb4-480a-a605-58173a7d31f3",
    tags: ["node.js", "npm"],
    posterId: "54e87284-b7a4-4258-acbf-7c18dc7febff",
    upvotes: [
      "9e7baff6-77fd-45a8-8ce8-ff17a2c98028",
      "54e87284-b7a4-4258-acbf-7c18dc7febff",
      "9b871932-5abf-4608-8273-a1f3888398cd",
    ],
    downvotes: [],
    answers: [
      {
        _id: "2acb53b2-5742-49a1-a315-1db9eab6ba14",
        posterId: "9e7baff6-77fd-45a8-8ce8-ff17a2c98028",
        description:
          "Try this: npm ls -gp --depth=0 | awk -F/ '/node_modules/ && !/\\/npm$/ {print $NF}' | xargs npm -g rm",
        upvotes: [],
        downvotes: [],
        comments: [
          {
            _id: "f9326fb8-dbbe-4fc1-ba98-9c0618e5b88a",
            commenterId: "54e87284-b7a4-4258-acbf-7c18dc7febff",
            commentText: "Yes, I think this will work!",
            createdAt: new Date("2021-12-12T22:46:35.401Z"),
            updatedAt: new Date("2021-12-12T22:46:35.401Z"),
          },
        ],
        createdAt: new Date("2021-12-12T22:46:15.451Z"),
        updatedAt: new Date("2021-12-12T22:46:15.451Z"),
      },
    ],
    acceptedAnswer: "",
    anonymous: false,
    createdAt: new Date("2021-12-12T22:44:09.663Z"),
    updatedAt: new Date("2021-12-12T22:44:09.663Z"),
  },
  {
    _id: "6af2de4d-e21e-449b-8feb-2c6c8794efda",
    title: "How to upgrade node.js on Windows?",
    description:
      "I already have Node.js v0.8.0 running on Windows. Can I just run the latest installer to upgrade it to v0.8.4? I am afraid it will break existing third party modules on my machine.",
    communityId: "134dd1da-9eb4-480a-a605-58173a7d31f3",
    tags: ["windows", "node.js"],
    posterId: "9e7baff6-77fd-45a8-8ce8-ff17a2c98028",
    upvotes: ["9b871932-5abf-4608-8273-a1f3888398cd"],
    downvotes: [],
    answers: [
      {
        _id: "7417037d-ead6-406a-824f-22149c6d7230",
        posterId: "54e87284-b7a4-4258-acbf-7c18dc7febff",
        description:
          "Yes, you just install the latest version. Generally you shouldn't have any compatibility problems if you are already using the same major version (e.g. Version 0.8.x). If you are concerned about changes, you can always check the changelog for each version (link to changelog is on node.js download page at nodejs.org). That should tell you of any big changes (i.e API changes, etc).",
        upvotes: [],
        downvotes: [],
        comments: [],
        createdAt: new Date("2021-12-12T22:49:59.603Z"),
        updatedAt: new Date("2021-12-12T22:49:59.603Z"),
      },
      {
        _id: "a51e5a65-5ee9-4556-8e00-0644a55fc390",
        posterId: "9b871932-5abf-4608-8273-a1f3888398cd",
        description:
          "I don't have experience with node on Windows, but I have just upgraded node & modules on my Mac, so this is just a general answer:\r\n\r\nIf you install v0.8, you might break your existing node modules, if they use deprecated functions, etc. The problem is that npm only checks your version of node while modules are being installed, not at run-time.",
        upvotes: ["9b871932-5abf-4608-8273-a1f3888398cd"],
        downvotes: [],
        comments: [],
        createdAt: new Date("2021-12-12T22:52:08.790Z"),
        updatedAt: new Date("2021-12-12T22:52:08.790Z"),
      },
    ],
    acceptedAnswer: "",
    anonymous: false,
    createdAt: new Date("2021-12-12T22:49:08.110Z"),
    updatedAt: new Date("2021-12-12T22:49:08.110Z"),
  },
  {
    _id: "24443894-1cda-4813-aab0-e77a14780832",
    title: "Packing delicate equipment for a hike",
    description:
      "I always try to avoid taking much delicate on a hike, but sometimes it either can't be helped or I decide I want to take it anyway (camera would be the prime example!)\r\n\r\nHow can I best pack such equipment in a rucksack to avoid it getting damaged or broken on a multi-day hike?",
    communityId: "84089f48-7823-4a01-b4b7-5294408bc2ee",
    tags: ["gear", "hike"],
    posterId: "9b871932-5abf-4608-8273-a1f3888398cd",
    upvotes: ["54e87284-b7a4-4258-acbf-7c18dc7febff"],
    downvotes: [],
    answers: [
      {
        _id: "0caa629c-2210-42f2-b527-9657b0b8d6b8",
        posterId: "54e87284-b7a4-4258-acbf-7c18dc7febff",
        description:
          "If it's a camera or other precision instrument you will probably want it stored in the Always Ready position. For me this is on my chest, strapped to the front straps of my backpack. While walking across the Pyrenees recently I carried my Leica D-Lux 5 compact camera in a hard leather Leica-made case and attached that to the straps. One advantage, apart from immediate access, is that I always knew it was there and could whip it out while walking without having to remove my pack.",
        upvotes: ["54e87284-b7a4-4258-acbf-7c18dc7febff"],
        downvotes: [],
        comments: [],
        createdAt: new Date("2021-12-12T22:55:47.998Z"),
        updatedAt: new Date("2021-12-12T22:55:47.998Z"),
      },
      {
        _id: "1aca9b6c-6b74-4e1e-9469-71012218b092",
        posterId: "9e7baff6-77fd-45a8-8ce8-ff17a2c98028",
        description:
          "There is little point in bringing a camera if you're just going to pack it away. The best place for a camera is around your neck and shoulder when you're hiking and not immediately taking pictures. ",
        upvotes: ["54e87284-b7a4-4258-acbf-7c18dc7febff"],
        downvotes: [],
        comments: [
          {
            _id: "488a9ffb-b732-4be1-be51-90fdda832c46",
            commenterId: "54e87284-b7a4-4258-acbf-7c18dc7febff",
            commentText: "Yeah, makes sense!",
            createdAt: new Date("2021-12-12T23:00:31.242Z"),
            updatedAt: new Date("2021-12-12T23:00:31.242Z"),
          },
        ],
        createdAt: new Date("2021-12-12T23:00:11.558Z"),
        updatedAt: new Date("2021-12-12T23:00:11.558Z"),
      },
    ],
    acceptedAnswer: "0caa629c-2210-42f2-b527-9657b0b8d6b8",
    anonymous: false,
    createdAt: new Date("2021-12-12T22:55:16.876Z"),
    updatedAt: new Date("2021-12-12T22:56:17.848Z"),
  },
  {
    _id: "9d52870d-9967-4ea7-930b-7d7310148bd9",
    title: "How do I check if Log4j is installed on my server?",
    description:
      "I read about security vulnerabilities related to Log4j. How do I check if Log4j is installed on my server? I installed many third-party packages and maybe some of them contain it. Is there a command to run on my server to check if Log4j is installed?",
    communityId: "0f0a25b8-f09d-4eed-8702-9fb28a139ec6",
    tags: ["log4j"],
    posterId: "9b871932-5abf-4608-8273-a1f3888398cd",
    upvotes: [],
    downvotes: [],
    answers: [
      {
        _id: "02b3df1a-130e-4164-ac58-ba1b2d7dfadc",
        posterId: "9e7baff6-77fd-45a8-8ce8-ff17a2c98028",
        description:
          "There is no command that will surely tell you that. Some applications ship the libraries they use directly as a jar file, some will contain them in an archive.\r\n\r\nAnd even then you don't know which version is shipped and how it is used. The only way to be sure you mitigate the CVE is to read the security announcements and release notes of your applications and follow their advisories.",
        upvotes: [],
        downvotes: [],
        comments: [],
        createdAt: new Date("2021-12-12T23:03:20.016Z"),
        updatedAt: new Date("2021-12-12T23:03:20.016Z"),
      },
    ],
    acceptedAnswer: "",
    anonymous: true,
    createdAt: new Date("2021-12-12T23:02:54.414Z"),
    updatedAt: new Date("2021-12-12T23:02:54.414Z"),
  },
  {
    _id: "2a6acd7e-931d-4d00-a73d-0b60edbbbb81",
    title: "Tracert consistently shows packet loss at same router hop",
    description:
      "I read that a * means a packet loss in the tracert output. I ran the same command on the same IP 3 times and can consistently see a * on the same hop.",
    communityId: "0f0a25b8-f09d-4eed-8702-9fb28a139ec6",
    tags: ["tracert", "packet-loss"],
    posterId: "9b871932-5abf-4608-8273-a1f3888398cd",
    upvotes: ["9b871932-5abf-4608-8273-a1f3888398cd", "9e7baff6-77fd-45a8-8ce8-ff17a2c98028"],
    downvotes: [],
    answers: [],
    acceptedAnswer: "",
    anonymous: false,
    createdAt: new Date("2021-12-12T23:06:02.743Z"),
    updatedAt: new Date("2021-12-12T23:07:09.111Z"),
  },
  {
    _id: "3171313c-220b-400e-ab55-45196e9c53bd",
    title: "How so I beat the Minotaur boss in God of War?",
    description:
      "I’m at the Minotaur at Hades and I’m stuck. I get him down easily but can’t get past the QTE. I get the first two rotations to work all the time but the third ALWAYS fails. I just don’t get it. If it was inconsistent I would know it’s me but out of 40 or so tries, it’s always the third rotation that fails, 100%. Is the window for that rotation much smaller? I’m certain I do the third rotation just like the first two but it won’t work.",
    communityId: "00513741-526d-40d5-9160-a0cc14782450",
    tags: ["god-of-war"],
    posterId: "f26dff40-8a7f-4719-9e51-ef16dde7a25a",
    upvotes: ["f26dff40-8a7f-4719-9e51-ef16dde7a25a"],
    downvotes: [],
    answers: [],
    acceptedAnswer: "",
    anonymous: false,
    createdAt: new Date("2021-12-12T23:22:36.191Z"),
    updatedAt: new Date("2021-12-12T23:22:36.191Z"),
  },
  {
    _id: "22f0ece4-8c70-4544-96eb-31ed0aa36620",
    title: "The greatest rotation inertia of a system?",
    description:
      "Consider this scenario: There are 𝑛 tiny balls (tiny means we can fix several balls in one place) with mass 𝑚1,𝑚2,... fixed in a stick which we may ignore the mass of the stick. Now we rotate the system(stick and balls) around the center of mass. I feel like the greatest rotation inertia will be achieved when half the mass of balls is at one point of the stick while the other half is at the opposite point of the stick. But I don't know how to prove it mathematically?",
    communityId: "fe881b06-9462-4d15-b8a1-c6c8bf12b8a0",
    tags: ["rotation-inertia"],
    posterId: "f26dff40-8a7f-4719-9e51-ef16dde7a25a",
    upvotes: [],
    downvotes: [],
    answers: [
      {
        _id: "39f8696a-f745-4718-98b9-74ff6253b733",
        posterId: "d30c7c44-6a7e-4d13-827a-eb4ffe6f6dbd",
        description: "Honestly, who cares?",
        upvotes: ["54e87284-b7a4-4258-acbf-7c18dc7febff"],
        downvotes: ["9b871932-5abf-4608-8273-a1f3888398cd", "f26dff40-8a7f-4719-9e51-ef16dde7a25a"],
        comments: [],
        createdAt: new Date("2021-12-12T23:35:37.428Z"),
        updatedAt: new Date("2021-12-12T23:35:37.428Z"),
      },
    ],
    acceptedAnswer: "",
    anonymous: false,
    createdAt: new Date("2021-12-12T23:24:35.601Z"),
    updatedAt: new Date("2021-12-12T23:24:35.601Z"),
  },
  {
    _id: "a09c96f9-62da-4a65-8941-7689d6c49f83",
    title: "Who cares about Physics anymore?",
    description: "Who even cares about Physics anymore?",
    communityId: "fe881b06-9462-4d15-b8a1-c6c8bf12b8a0",
    tags: ["physics-boo"],
    posterId: "d30c7c44-6a7e-4d13-827a-eb4ffe6f6dbd",
    upvotes: [],
    downvotes: [
      "f26dff40-8a7f-4719-9e51-ef16dde7a25a",
      "d30c7c44-6a7e-4d13-827a-eb4ffe6f6dbd",
      "9b871932-5abf-4608-8273-a1f3888398cd",
      "54e87284-b7a4-4258-acbf-7c18dc7febff",
    ],
    answers: [],
    acceptedAnswer: "",
    anonymous: false,
    createdAt: new Date("2021-12-12T23:42:57.991Z"),
    updatedAt: new Date("2021-12-12T23:42:57.991Z"),
  },
  {
    _id: "63863414-f6d2-4876-a059-f45fcc99c917",
    title: "Why is Machoke‘s post-trade max CP lower when it’s currently 100%?",
    description: "What’s different about this Machoke that would cause the maximum CP to be different while at 100%?",
    communityId: "00513741-526d-40d5-9160-a0cc14782450",
    tags: ["pokemon-go"],
    posterId: "2aa60dc7-5150-403b-8220-c02f65d9b97b",
    upvotes: [],
    downvotes: [],
    answers: [],
    acceptedAnswer: "",
    anonymous: true,
    createdAt: new Date("2021-12-13T00:34:26.212Z"),
    updatedAt: new Date("2021-12-13T00:34:26.212Z"),
  },
  {
    _id: "3033287f-eb06-426e-8628-e07086115192",
    title: "What is a NullPointerException, and how do I fix it?",
    description:
      "What are Null Pointer Exceptions (java.lang.NullPointerException) and what causes them? What methods/tools can be used to determine the cause so that you stop the exception from causing the program to terminate prematurely?",
    communityId: "134dd1da-9eb4-480a-a605-58173a7d31f3",
    tags: ["NullPointerException", "Java"],
    posterId: "2aa60dc7-5150-403b-8220-c02f65d9b97b",
    upvotes: [],
    downvotes: ["54e87284-b7a4-4258-acbf-7c18dc7febff"],
    answers: [],
    acceptedAnswer: "",
    anonymous: false,
    createdAt: new Date("2021-12-13T00:38:23.689Z"),
    updatedAt: new Date("2021-12-13T00:38:35.625Z"),
  },
];

const users = [
  {
    _id: "54e87284-b7a4-4258-acbf-7c18dc7febff",
    firstName: "Aravindh",
    lastName: "Shiva",
    emailAddress: "aravindhshiv2@gmail.com",
    subscribedCommunities: ["fecce1ee-21ab-4a9a-80fc-4f33239c3b24", "134dd1da-9eb4-480a-a605-58173a7d31f3"],
    adminCommunities: ["fecce1ee-21ab-4a9a-80fc-4f33239c3b24", "134dd1da-9eb4-480a-a605-58173a7d31f3"],
    password: "$2b$10$jVzLzoyLfw9CEaOfcY/zWu3mAk.WS4vdNhp1/LkZg04fpooeWLyi.",
    profileImage: "defaultavatar.jpg",
    deleted: false,
    displayName: "asgdev",
    persistenceToken: "11093956-cd65-44a0-af60-ec4acf2fde4b",
    createdAt: new Date("Sun, 12 Dec 2021 22:36:01 GMT"),
    updatedAt: new Date("Sun, 12 Dec 2021 22:36:01 GMT"),
  },
  {
    _id: "9e7baff6-77fd-45a8-8ce8-ff17a2c98028",
    firstName: "Charan",
    lastName: "Sundar",
    emailAddress: "charan@qnr.com",
    subscribedCommunities: [],
    adminCommunities: [],
    password: "$2b$10$sh335lD/I6wqyYlUCSKPpeIr1LvIzjVIt8F7V2tzMki07FyeQIfBO",
    profileImage: "defaultAvatar.jpg",
    deleted: false,
    displayName: "cherry",
    persistenceToken: "8caf62a2-ce63-471c-8d17-2e59ccefac75",
    createdAt: new Date("Sun, 12 Dec 2021 22:44:44 GMT"),
    updatedAt: new Date("Sun, 12 Dec 2021 22:44:44 GMT"),
  },
  {
    _id: "9b871932-5abf-4608-8273-a1f3888398cd",
    firstName: "Pranes",
    lastName: "GV",
    emailAddress: "pranes@qnr.com",
    subscribedCommunities: ["84089f48-7823-4a01-b4b7-5294408bc2ee", "0f0a25b8-f09d-4eed-8702-9fb28a139ec6"],
    adminCommunities: ["84089f48-7823-4a01-b4b7-5294408bc2ee", "0f0a25b8-f09d-4eed-8702-9fb28a139ec6"],
    password: "defaultavatar.jpg",
    profileImage: "defaultAvatar.jpg",
    deleted: false,
    displayName: "that_data_guy",
    persistenceToken: "5b7032f3-cfc0-4968-9e01-60d9444b6178",
    createdAt: new Date("Sun, 12 Dec 2021 22:51:40 GMT"),
    updatedAt: new Date("Sun, 12 Dec 2021 22:51:40 GMT"),
  },
  {
    _id: "f26dff40-8a7f-4719-9e51-ef16dde7a25a",
    firstName: "Abdul ",
    lastName: "AS",
    emailAddress: "asubhan@qnr.com",
    subscribedCommunities: ["00513741-526d-40d5-9160-a0cc14782450", "fe881b06-9462-4d15-b8a1-c6c8bf12b8a0"],
    adminCommunities: ["00513741-526d-40d5-9160-a0cc14782450", "fe881b06-9462-4d15-b8a1-c6c8bf12b8a0"],
    password: "$2b$10$Xo0wtSKXjxjstBtnkW4YO.UiVV9uVGZSppRTp7XcyDrrTSZPBeWv.",
    profileImage: "defaultavatar.jpg",
    deleted: false,
    displayName: "a_guy+who_games",
    persistenceToken: "a75f3ac0-5b34-4eba-bc9d-15e6545b21c1",
    createdAt: new Date("Sun, 12 Dec 2021 23:20:09 GMT"),
    updatedAt: new Date("Sun, 12 Dec 2021 23:20:09 GMT"),
  },
  {
    _id: "d30c7c44-6a7e-4d13-827a-eb4ffe6f6dbd",
    firstName: "Idosome",
    lastName: "Spamming",
    emailAddress: "spammer@fakeqnr.com",
    subscribedCommunities: [],
    adminCommunities: [],
    password: "$2b$10$hbKD7oShRrIxNvWgTWA8pOMw4DZrM87DmrbtAR1AoccF9bEtOtb7W",
    profileImage: "defaultavatar.jpg",
    deleted: false,
    displayName: "i-do-some-spamming",
    persistenceToken: "25bc4fd8-788b-4984-a091-4fc46a4a55c5",
    createdAt: new Date("Sun, 12 Dec 2021 23:34:44 GMT"),
    updatedAt: new Date("Sun, 12 Dec 2021 23:34:44 GMT"),
  },
  {
    _id: "33ea161b-873c-4e6f-a680-18bbc5f8f918",
    firstName: "Siddharth",
    lastName: "Godhani",
    emailAddress: "sidg@qnr.com",
    subscribedCommunities: [],
    adminCommunities: [],
    password: "$2b$10$xdtaHnU1jhqFz4oZPu4t0uImFCans/zXQ6n8oCANOQ6EJZaGTtMpy",
    profileImage: "defaultAvatar.jpg",
    deleted: false,
    displayName: "SiddharthGodhani",
    persistenceToken: "6d21376c-d8e1-4b71-9320-edae19b1f1c4",
    createdAt: new Date("Mon, 13 Dec 2021 00:27:56 GMT"),
    updatedAt: new Date("Mon, 13 Dec 2021 00:27:56 GMT"),
  },
  {
    _id: "0b3de77c-f289-4113-a846-e0d4f5ba0dbd",
    firstName: "Abhishek",
    lastName: "Mishra",
    emailAddress: "abhi@qnr.com",
    subscribedCommunities: [],
    adminCommunities: [],
    password: "$2b$10$eP3vOjTGrfQqKyezrnvRvebOCVBpfCQf66SrB.nfJu1MAIacf6Ov6",
    profileImage: "defaultAvatar.jpg",
    deleted: false,
    displayName: "AbhishekMishra",
    persistenceToken: "7b58b7d1-cdcb-46db-808f-f4ae5334aede",
    createdAt: new Date("Mon, 13 Dec 2021 00:32:11 GMT"),
    updatedAt: new Date("Mon, 13 Dec 2021 00:32:11 GMT"),
  },
  {
    _id: "2aa60dc7-5150-403b-8220-c02f65d9b97b",
    firstName: "Yue",
    lastName: "Lin",
    emailAddress: "yuelin@qnr.com",
    subscribedCommunities: [],
    adminCommunities: [],
    password: "$2b$10$kiECs7phOT9ajxTlIMAZAuuXp.Zyh.84kCsRCLQl5ucX/JKoSSCAC",
    profileImage: "defaultAvatar.jpg",
    deleted: false,
    displayName: "YueLin",
    persistenceToken: "7c191818-13eb-4c20-95cc-372340fb6d01",
    createdAt: new Date("Mon, 13 Dec 2021 00:33:07 GMT"),
    updatedAt: new Date("Mon, 13 Dec 2021 00:33:07 GMT"),
  },
];

module.exports = { questions, users, communities };
