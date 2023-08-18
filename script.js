var hitrn = 0;
var timer = 31;
var score = 0;

function hitpoint() {
    hitrn = Math.floor(Math.random() * 10);
    document.querySelector("#hit").textContent = hitrn;
}

function runtime() {
    var timerdis = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector("#timer").textContent = timer;
        }
        else {
            clearInterval(timerdis);
            document.querySelector("#content").innerHTML =
            `<div id="game-over">
            <h1>GAME OVER</h1>
            <h2>Your Score is ${score}</h2>
            </div>`
        }
    }, 1000)
}

function increaseScore() {
    score += 10;
    document.querySelector("#score").innerHTML = score;
}

function decreasScore() {
    score -= 8;
    document.querySelector("#score").innerHTML = score;
}

document.querySelector("#content").addEventListener("click", function (dets) {
    var clickedNum = Number(dets.target.textContent);

    if (clickedNum === hitrn) {
        console.log(clickedNum)
        hitpoint();
        increaseScore();
        creatBubble();
    } else {
        decreasScore();
    }
})

function creatBubble() {
    var turtel = "";

    for (var i = 1; i <= 153; i++) {
        turtel += `<div id="bubble">${Math.floor(Math.random() * 10)}</div>`;
    }
    document.querySelector("#content").innerHTML = turtel;
}

hitpoint();
runtime();
creatBubble();