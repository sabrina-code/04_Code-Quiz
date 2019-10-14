
var articles = document.body.children[1];

articles.style.fontSize = "50px";
articles.children[0].children[1].style.color = "blue";
articles.previousElementSibling.style.backgroundColor = "black";
//The previous sibling of <div id="articles"> (an element) is an Element, <div id="main">. Therefore, we use previousElementSibiling

var main = document.body.children[0];

main.children[1].style.textDecoration = "underline";
main.children[1].style.fontSize = "50px";
main.children[0].style.color = "orange";
main.lastElementChild.parentElement.style.fontSize = "40px";
/* The same result can be achieved by calling parentNode
   main.lastElementChild.parentNode.style.fontSize = "40px";
   Its parent node is a parent element. */

/**** BONUS ****/
articles.children[0].style.borderRadius = "20px";
articles.children[0].style.border = "15px solid green";
main.nextElementSibling.style.background = "yellow";
