const choiceBtn1 = document.getElementById("choiceBtn1");
const choiceBtn2 = document.getElementById("choiceBtn2");
const scoreNum = document.getElementById("scoreNum");
const submit = document.getElementById("submit");

const next = document.getElementById("next");
const previous = document.getElementById("previous");

const winSound = new Audio("win.wav");
const loseSound = new Audio("lose.wav");

let count = 0;
let score = 0;
let ansArr = [1, 1, 1, 1, 1, 0, 1, 0, 0, 1];
let userChoice = 0;
let scoreAndCount = [0, 0];

let storedValue = localStorage.getItem("scoreAndCountArr");
if (storedValue) {
  let storedParseValue = JSON.parse(storedValue);
  score = storedParseValue[0];
  count = storedParseValue[1];
  scoreAndCount[0] = storedParseValue[0];
  scoreAndCount[1] = storedParseValue[1];
}

choiceBtn1.addEventListener("click", () => {
  userChoice = 0;
});

choiceBtn2.addEventListener("click", () => {
  userChoice = 1;
});

submit.addEventListener("click", () => {
  if (ansArr[count] === userChoice) {
    score++;
    scoreAndCount[0]++;
    scoreNum.innerHTML = score;
    loseSound.pause();
    winSound.currentTime = 0;
    winSound.play();
  } else {
    if (score >= 0) {
      score--;
      scoreAndCount[0]--;
    }
    scoreNum.innerHTML = score;
    winSound.pause();
    loseSound.currentTime = 0;
    loseSound.play();
  }
});

// local storage appling --->

next.addEventListener("click", () => {
  if (count < ansArr.length) {
    count++;
    scoreAndCount[1]++;
    localStorage.setItem("scoreAndCountArr", JSON.stringify(scoreAndCount));
  }
});
previous.addEventListener("click", () => {
  if (count >= 0) {
    count--;
    scoreAndCount[1]--;
    localStorage.setItem("scoreAndCountArr", JSON.stringify(scoreAndCount));
  }
});
