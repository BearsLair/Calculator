let firstNum = 0;
let operator;
let secondNum = 0;
let display = 0;
let userInputArray = [];
console.log(userInputArray);

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

const addBtn = document.querySelector(".add");
addBtn.addEventListener("click", () => {
  userInputArray.push("+");
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

const subtractBtn = document.querySelector(".subtract");
subtractBtn.addEventListener("click", () => {
  userInputArray.push("-");
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

const multiplyBtn = document.querySelector(".multiply");
multiplyBtn.addEventListener("click", () => {
  userInputArray.push("*");
  console.log(userInputArray);
});

const clearBtn = document.querySelector(".clear");
clearBtn.addEventListener("click", () => {
  userInputArray.push("C");
  console.log(userInputArray);
});

const zeroBtn = document.querySelector(".zero");
zeroBtn.addEventListener("click", () => {
  userInputArray.push(0);
  console.log(userInputArray);
});

const equalsBtn = document.querySelector(".equals");
equalsBtn.addEventListener("click", () => {
  userInputArray.push("=");
  console.log(userInputArray);
});

const divideBtn = document.querySelector(".divide");
divideBtn.addEventListener("click", () => {
  userInputArray.push("/");
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
