var poem = "Some say the world will end in 🔥, Some say in ice. From what I’ve tasted of desire, I hold with those who favor fire. But if it had to perish twice, I think I know enough of hate. To say that for destruction ice, Is also great, And would suffice.";

var word = poem.split(" ");

var bodyEl = document.querySelector("div");
var clockEl = document.getElementById("main");
var poemEl = document.getElementById("poem");
var i = 0;

bodyEl.setAttribute("style", "margin: 30px auto; text-align: center; font-size: 30px");
poemEl.setAttribute("style", "font-size: 50px");

function prepareRead() {

  var timeCount = 5;

  // Create the countdown timer.
  var setTimecount= setInterval(function(){ /*********** HAS TO USE setInterval function. DO NOOOOOOOOOOOOOOOOOOTTTTTTTTTTTTTTTTTT CREATE ANOTHER NAME FOR THIS PURPOSE.  GOT STUCK FOR HOURS!!!!!!!!!!!!!!!!      REEEEEEMMMMMMEEEEEBBBBEEEERRRRRRT!!!!!*/
    
    clockEl.textContent = timeCount + " left before the speed reader starts.";
    timeCount--;

    if (timeCount === 0){
        clockEl.textContent = "";
        
        clearInterval(setTimecount);   
        speedRead();    
    } 
  }, 1000 ); 
}

function speedRead() {
  // Print words to the screen one at a time.
  bodyEl.append(poemEl);
  var wordDisplay = setInterval(function(){ 
      if (word[i] === undefined) {
        clearInterval(wordDisplay);
      } else {
        poemEl.textContent = word[i];
        i++;
      }
  }, 1000);
}
prepareRead();

/************ PSUEDO CODE **************/
// An array to draw the words from 
// dynamically createElement from JS to HTML
// counteown timer setTime() --> timeInterval() --> display array item one at a time
  