let gameSeq = [];
let userSeq = [];

let level = 0;
let started = false;

let color = ["red", "blue", "yellow", "green"];

let h2 = document.querySelector("h2");

document.addEventListener("keypress", () => {
    if (started == false) {
        console.log("Game Starts!!");
        started = true;

        levelUp();
    }
});

function flash(btn) {
    btn.classList.add("flash");
    setTimeout(() => {
        btn.classList.remove("flash");
    }, 250);
}

function userClick() {
    let btn = this;
    flash(btn);
    let id = btn.getAttribute("id");
    userSeq.push(id);
    console.log(userSeq);
    checkAns(userSeq.length - 1);
}

let highScore = level;

function checkAns(idx) {
    if (gameSeq[idx] === userSeq[idx]) {
        if (gameSeq.length == userSeq.length) {
            userSeq = [];
            setTimeout(levelUp, 1000);
        }
    }
    else {
        h2.innerHTML = `Game Over!! <b>Score - ${level}. High Score - ${highScore}</b> <br> Press any key to restart the game...`;
        started = false;
        level = 0;
        document.addEventListener("keypress", () => {
            if (started == false) {
                console.log("Game Restarts!!");
                started = true;

                levelUp();
            }
        });
        gameSeq = [];
        userSeq = [];
    }
}

function levelUp() {
    level++;
    h2.innerText = `Level ${level}`;

    let randIdx = Math.ceil(Math.random() * 3);
    let randCol = color[randIdx];
    let randBtn = document.querySelector(`.${randCol}`);

    gameSeq.push(randCol);
    console.log(gameSeq);

    flash(randBtn);

    if(highScore<level){
        highScore = level;
    }
}

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
    btn.addEventListener("click", userClick)
}
