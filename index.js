//Variable defaults
let firstNum = 0;
let operator = "";
let secondNum = 0;
let logDisplay = "";
let mainDisplay = 0;
let log = [];
let userInputArray = [];

let input = "";
let inputLog = "";

function toMainDisplay() {
  // TODO;
}

const sevenBtn = document.querySelector(".seven");
sevenBtn.addEventListener("click", () => {
  userInputArray.push(7);
  console.log(userInputArray);
});

const eightBtn = document.querySelector(".eight");
eightBtn.addEventListener("click", () => {
  userInputArray.push(8);
  console.log(userInputArray);
});

const nineBtn = document.querySelector(".nine");
nineBtn.addEventListener("click", () => {
  userInputArray.push(9);
  console.log(userInputArray);
});

const fourBtn = document.querySelector(".four");
fourBtn.addEventListener("click", () => {
  userInputArray.push(4);
  console.log(userInputArray);
});

const fiveBtn = document.querySelector(".five");
fiveBtn.addEventListener("click", () => {
  userInputArray.push(5);
  console.log(userInputArray);
});

const sixBtn = document.querySelector(".six");
sixBtn.addEventListener("click", () => {
  userInputArray.push(6);
  console.log(userInputArray);
});

const oneBtn = document.querySelector(".one");
oneBtn.addEventListener("click", () => {
  userInputArray.push(1);
  console.log(userInputArray);
});

const twoBtn = document.querySelector(".two");
twoBtn.addEventListener("click", () => {
  userInputArray.push(2);
  console.log(userInputArray);
});

const threeBtn = document.querySelector(".three");
threeBtn.addEventListener("click", () => {
  userInputArray.push(3);
  console.log(userInputArray);
});

const zeroBtn = document.querySelector(".zero");
zeroBtn.addEventListener("click", () => {
  userInputArray.push(0);
  console.log(userInputArray);
});

const addBtn = document.querySelector(".add");
addBtn.addEventListener("click", () => {
  userInputArray.push("+");
  console.log(userInputArray);
});

const subtractBtn = document.querySelector(".subtract");
subtractBtn.addEventListener("click", () => {
  userInputArray.push("-");
  console.log(userInputArray);
});

const multiplyBtn = document.querySelector(".multiply");
multiplyBtn.addEventListener("click", () => {
  userInputArray.push("*");
  console.log(userInputArray);
});

const divideBtn = document.querySelector(".divide");
divideBtn.addEventListener("click", () => {
  userInputArray.push("/");
  console.log(userInputArray);
});

const equalsBtn = document.querySelector(".equals");
equalsBtn.addEventListener("click", () => {
  userInputArray.push("=");
  console.log(userInputArray);
});

const clearBtn = document.querySelector(".clear");
clearBtn.addEventListener("click", () => {
  userInputArray.push("C");
  console.log(userInputArray);
});

const userinput = document.querySelector(".userinput");

// userinput.innerHTML = display;

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

//user presses a number
//number added to input array, number(s) in array converted to integer, then displayed on main display (all done in toMainDisplay())
//when user presses on operator button:
//  (1)complete integer (from display) stored in firstNum, input array emptied
//  (2)operator variable is assigned operator button pressed
//  (3)number and operator added to log, and displayed (?????)
//user enters another number (former whole/float number removed first)
//numbers added to input array, number(s) in array converted to integer, then displayed on main display (all done in toMainDisplay())
//user presses equals
//  (1)integer (from display) stored in secondNum, input array emptied
//  (2)operate function called, returning correct result based on operation
//  (3)display entire expression in log
//  (3)display the result on calculator display

//Pressing C (Clear), at any time, resets main display to 0, removes log, and restores default variable values
