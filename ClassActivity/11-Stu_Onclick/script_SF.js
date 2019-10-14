/********* psudo code **************/
  //querySelector to call the increment and decrement buttons from HTML
  //create var counter
  //create eventLinstener for the buttons to increase or decrease the number
      //when decrease, it never goes below 0.
  //.textContent to input the result to the counter


var increaseBtn = document.querySelector("increment");
var decreaseBtn = document.querySelector("decrement");

var countEl = document.getElementById("count");

var counter = "";


  document.getElementById("increment").addEventListener("click", function(){
    counter++;
    countEl.textContent = counter;
  })

  document.getElementById("decrement").addEventListener("click", function(){
    counter--;
    if (counter <=0){
      counter = 0;
      }else {
      countEl.textContent = counter;
    }
  })



