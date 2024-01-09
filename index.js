let firstNum = 0;
let operator;
let secondNum = 0;

const sevenBtn = document.querySelector("btn seven");
const eightBtn = document.querySelector("btn eight");
const nineBtn = document.querySelector("btn nine");
const addBtn = document.querySelector("btn add");
const fourBtn = document.querySelector("btn four");
const fiveBtn = document.querySelector("btn five");
const sixBtn = document.querySelector("btn six");
const subtractBtn = document.querySelector("btn subtract");
const oneBtn = document.querySelector("btn one");
const twoBtn = document.querySelector("btn two");
const threeBtn = document.querySelector("btn three");
const multiplyBtn = document.querySelector("btn multiply");
const clearBtn = document.querySelector("btn clear");
const zeroBtn = document.querySelector("btn zero");
const equalsBtn = document.querySelector("btn equals");
const divideBtn = document.querySelector("btn divide");

function add(firstNum, secondNum) {
  return firstNum + secondNum;
}

function subtract(firstNum, secondNum) {
  return firstNum - secondNum;
}

function multiply(firstNum, secondNum) {
  return firstNum * secondNum;
}

function divide(firstNum, secondNum) {
  return firstNum / secondNum;
}

function operate(operator, firstNum, secondNum) {
  switch (operator) {
    case "+":
      return add(firstNum, secondNum);
    case "-":
      return subtract(firstNum, secondNum);
    case "*":
      return multiply(firstNum, secondNum);
    case "/":
      return divide(firstNum, secondNum);
  }
}
