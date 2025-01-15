const inputWindow = document.querySelector("#inputWindow");
const buttons = document.querySelector(".buttons");
const nums = document.querySelector(".num");
let firstNum = null;
let secondNum = null;
let startSecondNum = false;
let number;
let operand = null;
const operators = '+-×÷√=';

buttons.addEventListener("click", function (event) {
  target = event.target;
  char = target.textContent;
  if (operators.includes(char)) {
    operand = char;
  }
  if (target.classList.value.includes("num")) {
    makeNumber(char);
  }
  if (!target.classList.value.includes("num")) {
    readNumber();
    if (char != '=' && !startSecondNum) {
      startSecondNum = false;
      firstNum = inputWindow.value;
      secondNum = null;
    }
    if (char === '=') {
      console.log('Well');
    }
  }
});


function readNumber() {
    if (firstNum === null) {
        firstNum = inputWindow.value;
        startSecondNum = true;
    } else if (secondNum === null) {
        secondNum = inputWindow.value;
    }
}


function makeNumber(char) {
  if (inputWindow.value === "0" || startSecondNum) {
    inputWindow.value = char;
    startSecondNum = false;
  } else {
    inputWindow.value += char;
  }
}


function addition(firstNum, secondNum) {
  return firstNum + secondNum;
}

function subtraction(firstNum, secondNum) {
  return firstNum - secondNum;
}

function multiplication(firstNum, secondNum) {
  return firstNum * secondNum;
}

function division(firstNum, secondNum) {
  return Math.round(firstNum / secondNum * 1e2) / 1e2;
}

