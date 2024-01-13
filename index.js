let firstNum = 0;
let operator;
let secondNum = 0;
let display = 0;
let userInputArray = [];
console.log(userInputArray);

const sevenBtn = document.querySelector(".seven");
sevenBtn.addEventListener("click", () => {
  console.log("Pushed 7!");
});
const eightBtn = document.querySelector(".eight");
const nineBtn = document.querySelector(".nine");
const addBtn = document.querySelector(".add");
const fourBtn = document.querySelector(".four");
const fiveBtn = document.querySelector(".five");
const sixBtn = document.querySelector(".six");
const subtractBtn = document.querySelector(".subtract");
const oneBtn = document.querySelector(".one");
const twoBtn = document.querySelector(".two");
const threeBtn = document.querySelector(".three");
const multiplyBtn = document.querySelector(".multiply");
const clearBtn = document.querySelector(".clear");
const zeroBtn = document.querySelector(".zero");
const equalsBtn = document.querySelector(".equals");
const divideBtn = document.querySelector(".divide");

const userinput = document.querySelector(".userinput");
userinput.innerHTML = display;

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
