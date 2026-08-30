const target = document.getElementById("target");
const scoreText = document.getElementById("score");

let score = 0;

//クリックごとにscore++
target.addEventListener("click", () => {
    score++;
    scoreText.textContent = `Score: ${score}`;
});

