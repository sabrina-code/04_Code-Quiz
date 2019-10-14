var highScoreList = document.getElementById("highscore-list");
var highScore = JSON.parse(localStorage.getItem("highScore")) || [];

highScoreList.innerHTML = highScore.map(function(score){
    return "<li>"+ score.name +" " +"-"+"" +score.score + "</li>";
}) .join("");
