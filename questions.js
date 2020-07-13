const questionEl = document.getElementById("question"); //<p> to display the question in HTML
const quizEl = document.querySelector("#quiz");
const commentEl = document.querySelector("#comment");
const questioncounterText = document.querySelector("#progress");
const scoreText = document.querySelector("#score");

let score = 0;
let qCounter = 0; //question counter
let thisQuestion;
let correctAnswer;

let questions = [
  {
    title: "Commonly used data types DO NOT include:",
    choices: ["strings", "booleans", "alerts", "numbers"],
    answer: "alerts",
  },
  {
    title: "The condition in an if / else statement is enclosed within ____.",
    choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
    answer: "parentheses",
  },
  {
    title: "Which of the following is not a valid JavaScript variable name?",
    choices: [
      "2names",
      "_first_and_last_names",
      "FirstAndLast",
      "None of the above",
    ],
    answer: "2names",
  },
  {
    title: "Which language is used for styling web pages?",
    choices: ["HTML", "JQuery", "CSS", "XML"],
    answer: "CSS",
  },
  {
    title: "The syntax of close method for document object is",
    choices: ["Close(doC)", " Close(object)", "Close(val)", "Close()"],
    answer: "Close()",
  },
  {
    title: "Which of the following is not a reserved word in JavaScript?",
    choices: ["interface", "throws", "program", "short"],
    answer: "program",
  },
  {
    title: "Which of the following is an interface?",
    choices: ["thread", "runnable", "date", "calendar"],
    answer: "thread",
  },
  {
    title: "Where is the correct place to insert a JavaScript?",
    choices: [
      "the <head> section",
      "the <body> section",
      "both <head> and <body> sections",
      "anywere",
    ],
    answer: "both <head> and <body> sections",
  },
  {
    title: "Which of the following is a server-side Java Script object?",
    choices: ["function", "file", "fileUpload", "date"],
    answer: "file",
  },
  {
    title: "What language defines the behavior of a web page?",
    choices: ["HTML", "CSS", "XML", "JavaScript"],
    answer: "JavaScript",
  },
  {
    title:
      "What java wrapper type is created when a JavaScript object is sent to Java?",
    choices: ["ScriptObject", "JavaObject	", "Jobject", "JSObject	"],
    answer: "JSObject",
  },
  {
    title:
      "What java wrapper type is created when a JavaScript object is sent to Java?",
    choices: [
      "Semicolon",
      "Semicolon, Ampersand",
      "Ampersand, colon",
      "Ampersand, semicolon",
    ],
    answer: "Ampersand, semicolon",
  },
  {
    title:
      "Which of the following method is used to evaluate a string of Java Script code in the context of the specified object?",
    choices: ["Eval", "ParseDoule", "ParseObject", "Efloat"],
    answer: "Eval",
  },
  {
    title: "What is the alternate name for Java script?",
    choices: ["LimeScript	", "Both a and d", "ECMScript", "ECMAScript"],
    answer: "ECMAScript",
  },
  {
    title: "What is the correct syntax for adding comments in JavaScript?",
    choices: [
      "<!–This is a comment–&gt",
      "//This is a comment",
      "–This is a comment ",
      "**This is a comment**",
    ],
    answer: "//This is a comment",
  },
  {
    title: "What is the JavaScript syntax for printing values in Console?",
    choices: [
      "print(5)",
      "console.log(5);",
      "console.print(5); ",
      "print.console(5);",
    ],
    answer: "console.log(5);",
  },
  {
    title:
      "What is the method in JavaScript used to remove the whitespace at the beginning and end of any string?",
    choices: ["strip()", "trim()", "stripped()", "trimmed()"],
    answer: "trim()",
  },
  {
    title:
      "Which function of an Array object calls a function for each element in the array?",
    choices: ["forEach()", "every()", "forEvery()", "each()"],
    answer: "forEach()",
  },
  {
    title: "Which was the first browser to support JavaScript?",
    choices: ["Mozilla Firefox", "Netscape", "Google Chrome", "IE"],
    answer: "Netscape",
  },
  {
    title: "Which of the following is an advantage of using JavaScript?",
    choices: [
      "ncreased interactivity.",
      "Less server interaction.",
      "Immediate feedback from the users.",
      "All of the above.",
    ],
    answer: "All of the above.",
  },
];

function startGame() {
  t = 45; //45 second countdown
  qCounter = 0; //question counter
  score = 0;
  questionsAvailable = [...questions];
  myTimer();
  getQuestion();
}

function getQuestion() {
  if (qCounter >= questions.length) {
    localStorage.setItem("mostRecentScore", score); //save score to localstorage
    return window.location.assign("gameover.html"); // if questions run out, go to gameover screen
  }
  qCounter++;
  questioncounterText.textContent = qCounter + "/" + questions.length;

  let qIndex = Math.floor(Math.random() * questions.length); //randam index for random quesrion
  let thisQuestion = questions[qIndex];
  questionEl.innerText = thisQuestion.title; //put what is asked,questions.title, in <p> in HTML
  correctAnswer = thisQuestion.answer;

  for (var i = 0; i < 4; i++) {
    document.querySelector(".buttons").children[i].textContent =
      thisQuestion.choices[i]; //assign answer choice to the buttons
  }

  questionsAvailable = questionsAvailable.splice(qIndex, 1); //take out the question asked
}

function checkAnswer(id) {
  scoreText.innerText = score;
  let response = document.getElementById(id).textContent;
  if (response == correctAnswer) {
    score += 20;
    document.getElementById(id).style.backgroundColor = "#2493d3";
    commentEl.textContent = "Great job! The correct anwser is " + response;
  } else if (response !== correctAnswer) {
    document.getElementById(id).style.backgroundColor = "#a00b0b";
    commentEl.textContent = "This is not the right answer";
  }

  setTimeout(function () {
    document.getElementById(id).style.backgroundColor = "#777777";
    commentEl.textContent = "";
    getQuestion();
  }, 800);
}

function myTimer() {
  t -= 1;
  mytime.innerHTML = t;
  if (t < 1) {
    t = 0;
    localStorage.setItem("mostRecentScore", score); //save score to localstorage
    setTimeout(function () {
      window.location.assign("gameover.html");
      window.clearInterval(update);
    }, 300);
  }
}
update = setInterval("myTimer()", 1000);

startGame();
