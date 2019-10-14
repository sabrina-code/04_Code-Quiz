// Create your HTML Page via DOM Methods here!
var body = document.body;

var h1El = document.createElement("h1");
var h2El = document.createElement("h2");
var catInfo = document.createElement("div");
var catFav = document.createElement("div");
var catLuv = document.createElement("div");
var imgEl = document.createElement("img");
var ulEl = document.createElement("ul");
var li0El = document.createElement("li");
var li1El = document.createElement("li");
var li2El = document.createElement("li");
var li3El = document.createElement("li");

body.appendChild(h1El);
body.appendChild(h2El);
body.appendChild(catInfo);
body.appendChild(catFav);
catInfo.appendChild(imgEl);
catInfo.appendChild(catLuv);
catFav.appendChild(ulEl);
ulEl.appendChild(li0El);
ulEl.appendChild(li1El);
ulEl.appendChild(li2El);
ulEl.appendChild(li3El);

body.setAttribute("style", "font-family: Arial, Helvetica, sans-serif; text-align: center");
h1El.textContent = "My name is Felicity. I enjoy a heathy life style.";
h2El.textContent = "Here is my favorite food to keep me glowing...";
catLuv.textContent = "Love yourslef."
catLuv.setAttribute("style", "font-size: 25px; text-align: center");
imgEl.setAttribute("src", "images/cat.jpg");
imgEl.setAttribute("style", "width:500px; height: auto; border: 5px solid purple");
ulEl.setAttribute("style", "width: 50%; margin: 20px auto; padding-left: 0; font-size:30px; line-height: 50px; list-style: none");

li0El.textContent = "Eating Fish";
li1El.textContent = "Bathing in Sun";
li2El.textContent = "Socializing";
li3El.textContent = "Meowing";


