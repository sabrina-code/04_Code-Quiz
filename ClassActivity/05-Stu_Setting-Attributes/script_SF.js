
var mainEl = document.querySelector("#main");
var sitesEl = document.querySelector(".sites");
var site1El = document.querySelector(".site1");
var site2El = document.querySelector(".site2");
var site3El = document.querySelector(".site3");
var h1Tag = document.querySelector('h1');

//Give a `src` and `alt` attribute to the 3 provided `img` tags.
site1El.children[1].children[0].setAttribute("src", "images/image_1.jpg");
site1El.children[1].children[0].setAttribute("alt","man and laptop");

site2El.children[1].children[0].setAttribute("src", "images/image_2.jpg");
site2El.children[1].children[0].setAttribute("alt","man in metting");

site3El.children[1].children[0].setAttribute("src", "images/image_3.jpg");
site3El.children[1].children[0].setAttribute("alt","ladies' meeting");

//Give a `href` attribute to the 3 provided `a` tags.`
//site1El.children[1].setAttribute("href", "https://www.w3schools.com/");
site2El.children[1].setAttribute("href", "https://www.w3schools.com/");
site3El.children[1].setAttribute("href", "https://www.w3schools.com/");

//Add styles via `setAttribute` to make the page look decent. Recommended: margins and padding.
mainEl.setAttribute("style", "width:520px; margin: 0px auto; display:block");
h1Tag.setAttribute("style", "text-align:center");

//Add styles via `setAttribute` to make the page look decent. Recommended: margins and padding.
for (i=0; i<3; i++){
    sitesEl.children[i].setAttribute("style", "margin: 60px 0");
}

//Bonus ---- Randomly set the `href` for site 1 from an array of sites you create.
sites = ["https://www.w3school.com","https://www.ucla.edu","https://www.cbs.com","https://www.nfl.com" ]
for (var i = 0; i < sites.length; i++){
site1El.children[1].setAttribute("href", sites[Math.floor(Math.random()*sites.length)]);
} 
