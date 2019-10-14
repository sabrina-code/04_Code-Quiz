var body = document.querySelector("body");
//set the global attributes in body
var h1Tags = document.querySelectorAll("h1");
var pTags = document.querySelectorAll("p");
var aTags = document.querySelectorAll("a");
var imgEl = document.querySelectorAll("img");
var Change1 = document.querySelector(".change1");
var pChange2 = document.querySelector("#change2");
var pGatos = document.querySelectorAll(".gato")

var dTags = document.querySelectorAll("div");



body.setAttribute("style","font-family: 'open san', sans-serif; text-align:center");
dTags[0].setAttribute("style", "font-size: 25px; color: #df6016");//orange- div tag
h1Tags[0].setAttribute("style","font-size: 35px");

for (var i = 0; i < pTags.length; i++){
  pTags[i].setAttribute("style" , "font-size: 20px; color:#3ea20b");//green p tag
}

dTags[1].setAttribute("style","font-size: 25px; color:#1625df");//blue 
Change1.setAttribute("style","font-size: 25px; color:#562305");//brown dTags[1] is changed again by class. If the font-size is not set again here, it will go back to the body font-size. 

dTags[2].setAttribute("style","font-size: 25px; color:#df1669");//magenta 

for (var i = 0; i < pGatos.length; i++){
  pGatos[i].setAttribute("style" , "font-size: 20px; font-style:italic; color:#16dfd6");//aqua p tag
}

imgEl[0].setAttribute("src", "images/image_1.jpg"); //only 1 item no need to put ; right after it
imgEl[0].setAttribute("style", "width: 300px; margin: 50px");
aTags[0].setAttribute("href", "www.w3.org");


/************* Tags have to be put in a format of array [] to setAttribute. ****************/



