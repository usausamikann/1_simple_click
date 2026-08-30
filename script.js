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

    if (timeLeft <= 0) { //15sec経過後
        clearInterval(timerId);
        target.disabled = true; //ボタン無効化
        //リザルト表示
        timerText.style.display = "none";
        target.style.display = "none";
        scoreText.style.fontSize = "64px";
        scoreText.textContent = `Score: ${score}`;
    }
}, 1000); //1000ms=1secごとに実行