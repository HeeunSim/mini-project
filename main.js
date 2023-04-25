// 첫 번째 input에 숫자를 넣어 범위를 설정한다.
// 0부터 출력 범위 내에서 랜덤한 숫자를 출력하게 만든다.
// 유저가 고른 숫자와 컴퓨터가 뽑은 숫자가 화면에 함께 출력되도록 한다.
// 유저가 입력한 숫자와 컴퓨터가 출력한 숫자가 동일할 경우 'You won!'을, 다를경우 'You Lost!' 문구가 나타나게 만든다

let allForm = document.querySelector("#enter");
let numberInput = document.querySelector("#machine");
let chooseNumber = document.querySelector("#guess input");
let playBtn = document.querySelector("#guess button");
let chooseNumberArea = document.querySelector("#choose");
let resultArea = document.querySelector("#result");

function machineNumber(min, max) {
  let randomNum = Math.floor(Math.random() * (max - min + 1) + min);
  return randomNum;
}

function play(event) {
  event.preventDefault();

  let max = numberInput.value;
  let guessNum = Number(chooseNumber.value);
  let randomNumber = machineNumber(0, max);

  chooseNumberArea.textContent = `You choose: ${guessNum}, the machine choose: ${randomNumber}`;

  if (guessNum === randomNumber) {
    resultArea.textContent = "You won!";
  } else {
    resultArea.textContent = "You lost!";
  }
}

allForm.addEventListener("submit", play);
