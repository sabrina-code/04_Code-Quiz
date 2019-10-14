var score = 0;

var scoreText = document.querySelector("#score");
var questioncounterText= document.querySelector("#progress");
var timecounterText= document.querySelector("#timeLeft");
var thisQuestion;
var qCounter = 0;//question counter
var quizEl = document.querySelector("#quiz");
var commentEl = document.querySelector("#comment");
var correctAnswer;
var questionsAvailable = []; //limit the amount of questions for game drawen form questions pool
var acceptingAnswers = false;
var timerText = document.querySelector("#mytime");


var questionEl = document.getElementById("question");//<p> to display the question in HTML

var questions = [
    {
      title: "Commonly used data types DO NOT include:",
      choices: ["strings", "booleans", "alerts", "numbers"],
      answer: "alerts"
    },
    {
      title: "The condition in an if / else statement is enclosed within ____.",
      choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
      answer: "parentheses"
    },
    {
      title: "Which of the following is not a valid JavaScript variable name?",
      choices: ["2names", "_first_and_last_names","FirstAndLast", "None of the above"],
      answer: "2names"
    },
    {
      title: "Which language is used for styling web pages?",
      choices: ["HTML", "JQuery", "CSS", "XML"],
      answer: "CSS"
    },
    {
      title: "The syntax of close method for document object is",
      choices: ["Close(doC)", " Close(object)", "Close(val)", "Close()"], 
      answer: "Close()"
    },
    {
      title: "Which of the following is not a reserved word in JavaScript?",
      choices: ["interface", "throws", "program", "short"],
      answer: "program"
    },
    {
      title: "WWhich of the following is an interface?",
      choices: ["thread", "runnable", "date", "calenda"],
      answer: "thread"
    },
    {
      title: "Wwith (function(x, undefined){}) length;",
      choices: ["1", "2", "undefined", "error"],
      answer: "2"
    },
    {
      title: "Which of the following is a server-side Java Script object?",
      choices: ["function", "file", "fileUpload", "date"],
      answer: "file"
    },
    {
      title: "What language defines the behavior of a web page?",
      choices: ["HTML", "CSS", "XML", "JavaScript"],
      answer: "JavaScript"
    },
    {
      title: "What java wrapper type is created when a JavaScript object is sent to Java?",
      choices: ["ScriptObject", "JavaObject	", "Jobject", "JSObject	"],
      answer: "JSObject"
    },
    {
      title: "What java wrapper type is created when a JavaScript object is sent to Java?",
      choices: ["Semicolon", "Semicolon, Ampersand", "Ampersand, colon", "Ampersand, semicolon"],
      answer: "Ampersand, semicolon"
    },
    {
      title: "Which of the following method is used to evaluate a string of Java Script code in the context of the specified object?",
      choices: ["Eval", "ParseDoule", "ParseObject", "Efloat"],
      answer: "Eval"
    },
    {
      title: "What is the alternate name for Java script?",
      choices: ["LimeScript	", "Both a and d", "ECMScript	", "ECMAScript"],
      answer: "ECMAScript"
    }
  ];

function startGame(){
    t = 60; //start time: 45 seconds countdown
    qCounter = 0;//question counter
    score = 0; // increment score for current correct or wrong answer only
    questionsAvailable = [...questions]; //use this way so that we can take the question that is already answered
    getQuestion();
}

function getQuestion(){
  if(questionsAvailable.length == 0 || qCounter >(questions.length-1)){
    
    localStorage.setItem("mostRecentScore", score); //save score to localstorage
    return window.location.assign("gameover.html"); // if questions run out, go to gameover screen
  }
  qCounter++;

  questioncounterText.textContent=qCounter + "/" + questions.length; //display progress of the game by showing how many out of total questions has been uploaded for play

  // creating randam questions by generating random index
  var qIndex = Math.floor(Math.random()*questions.length);//find randam index for the quesrion
  var thisQuestion = questions[qIndex];
  questionEl.innerText = thisQuestion.title;//put what is asked,questions.title, in <p> in HTML
  correctAnswer=thisQuestion.answer;
    
  for (var i = 0; i < questionsAvailable.length; i++){ 
    document.querySelector(".buttons").children[i].textContent = thisQuestion.choices[i];
    //assign answer choice to the buttons
    }   
    questionsAvailable = questionsAvailable.splice(qIndex, 1); //take out the question that is just created for the game    
    return correctAnswer;    
}
   
function checkAnswer(clicked_id){   
    myTimer();    
    var response = document.getElementById(clicked_id).textContent;
    if (response==correctAnswer){
      score+=20;     
      document.getElementById(clicked_id).style.backgroundColor = "#2493d3";
      scoreText.innerText = score;
      commentEl.textContent = "Great job! The correct anwser is " + response;
    }else if(response !== correctAnswer && t >=16 ){ 
      t-=15;
      score;
      scoreText.innerText = score;
      timerText.innerText = t;
      document.getElementById(clicked_id).style.backgroundColor = "#a00b0b";
      commentEl.textContent = "This is not the right answer";
    }else{
      t=0;
      score;
      scoreText.innerText = score;
      timerText.innerText = t;
      document.getElementById(clicked_id).style.backgroundColor = "#a00b0b";
      commentEl.textContent = "This is not the right answer";
    }

setTimeout(function(){
    document.getElementById(clicked_id).style.backgroundColor = "#777777";
    commentEl.textContent = "";
    getQuestion();
  }, 300);
} 
function myTimer(){
  t -= 1;
  if (t<60 && t>1){
  mytime.innerHTML = t;
  }
  if(t < 1){
    // window.clearInterval(update);
    t = 0;
    localStorage.setItem("mostRecentScore", score); //save score to localstorage
    setTimeout(function(){
      // alert("Time is up!");
      window.location.assign("gameover.html");
      window.clearInterval(update);
    }, 300);
  } 
}
update = setInterval("myTimer()", 1000);



startGame();
