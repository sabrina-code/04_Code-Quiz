let username = document.getElementById("username");
let saveBtn = document.getElementById("save");
let mostRecentScore = localStorage.getItem("mostRecentScore");
let finalScore = document.getElementById("finalscore");
let highScore = JSON.parse(localStorage.getItem("highScore")) || [];
//make the highScore string for localStorage do: localStorage.setItem("highScore", JSON.stringify([]));

finalScore.innerText = mostRecentScore;

username.addEventListener("keyup", function () {
  saveBtn.disabled = !username.value;
});

function saveHighScore(event) {
  event.preventDefault();
  let player = {
    name: username.value,
    score: mostRecentScore,
  };

  highScore.push(player);
  highScore.sort((a, b) => b.score - a.score);
  highScore.splice(8);

  localStorage.setItem("highScore", JSON.stringify(highScore));
}
