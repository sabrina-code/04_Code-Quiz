//call HTML into JavaScript -- to connect this JS with HTML
var timerEl = document.querySelector(".time");
var mainDiv = document.querySelector("#main");
var timeTotal = 5;

// set time interval to show it in <h1></h1>
    //.time
    //setTime() --> setTimeInterval() --> .textContent

    function setTime(){
        var timeCounter = setInterval(function(){   //** 2 **
            timeTotal--; //decreament of time
            timerEl.textContent = timeTotal + " has left before the color explosion!"

            if(timeTotal === 0){   //** 3 **
                clearInterval(timeCounter);
                sendMessage(); // call in sendMessage function               
            }// if time ends, explosin image appears in the div that has id = "main"

        }, 1000);//interval runs in 1 sec measurement
    }
        
// Make sending Time's up message an independent function called from setTime()instead of part of the setInterval function
    function sendMessage(){
        var imgEl = document.createElement("img");
        mainDiv.appendChild(imgEl);
        imgEl.setAttribute("src", "images/image_1.jpg");
        imgEl.setAttribute("style", "width: 400px");
        timerEl.textContent = "Time is up!!";
    }

    setTime();

// PSUEDO CODE--------
//1. call HTML into JavaScript -- to connect this JS with HTML
//2. set time interval to show it in <h1></h1>
    //.time
    //setTime() --> setTimeInterval() --> .textContent    
//3. time is up, image of color explosion shown in <div></div>
    //#main
    //dynamically add in <img> in <div> to display the image.
   // show the message: Time is up .textContent
//4. Run setTime() 