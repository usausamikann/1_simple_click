const target = document.getElementById("target");
const scoreText = document.getElementById("score");
const timerText = document.getElementById("timer");

let score = 0;
let timeLeft = 15;

//クリックごとにscore++
target.addEventListener("click", () => {
    score++;
    scoreText.textContent = `Score: ${score}`;
});

// 1秒ごとに残り時間を1減らす
const timerId = setInterval(() => {
    timeLeft--;
    timerText.textContent = `Time: ${timeLeft}`;

    if (timeLeft <= 0) {
        clearInterval(timerId);
        target.disabled = true; //ボタン無効化
    }
}, 1000); //1000ms=1sごとに実行