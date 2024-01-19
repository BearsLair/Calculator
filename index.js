const inputDisplay = document.querySelector(".userinput");
const log = document.querySelector(".recordedinput");

//Variable defaults
let firstNum = undefined;
let operator = "";
let secondNum = undefined;
let logDisplay = "";
let mainDisplay = 0;
let userInputArray = [];
inputDisplay.textContent = 0;
let result = undefined;

function firstNumToDisplay() {
  mainDisplay = Number(userInputArray.join(""));
  inputDisplay.textContent = mainDisplay;
}

function secondNumToDisplay() {
  mainDisplay = Number(userInputArray.join(""));
  inputDisplay.textContent = mainDisplay;
  secondNum = mainDisplay;
}

//Numbered Buttons
const sevenBtn = document.querySelector(".seven");
sevenBtn.addEventListener("click", () => {
  if (userInputArray.length < 16 && firstNum === undefined) {
    userInputArray.push(7);
    firstNumToDisplay();
  } else if (userInputArray.length < 16 && firstNum != undefined) {
    userInputArray.push(7);
    secondNumToDisplay();
  }
});

const eightBtn = document.querySelector(".eight");
eightBtn.addEventListener("click", () => {
  if (userInputArray.length < 16 && firstNum === undefined) {
    userInputArray.push(8);
    firstNumToDisplay();
  } else if (userInputArray.length < 16 && firstNum != undefined) {
    userInputArray.push(8);
    secondNumToDisplay();
  }
});

const nineBtn = document.querySelector(".nine");
nineBtn.addEventListener("click", () => {
  if (userInputArray.length < 16 && firstNum === undefined) {
    userInputArray.push(9);
    firstNumToDisplay();
  } else if (userInputArray.length < 16 && firstNum != undefined) {
    userInputArray.push(9);
    secondNumToDisplay();
  }
});

const fourBtn = document.querySelector(".four");
fourBtn.addEventListener("click", () => {
  if (userInputArray.length < 16 && firstNum === undefined) {
    userInputArray.push(4);
    firstNumToDisplay();
  } else if (userInputArray.length < 16 && firstNum != undefined) {
    userInputArray.push(4);
    secondNumToDisplay();
  }
});

const fiveBtn = document.querySelector(".five");
fiveBtn.addEventListener("click", () => {
  if (userInputArray.length < 16 && firstNum === undefined) {
    userInputArray.push(5);
    firstNumToDisplay();
  } else if (userInputArray.length < 16 && firstNum != undefined) {
    userInputArray.push(5);
    secondNumToDisplay();
  }
});

const sixBtn = document.querySelector(".six");
sixBtn.addEventListener("click", () => {
  if (userInputArray.length < 16 && firstNum === undefined) {
    userInputArray.push(6);
    firstNumToDisplay();
  } else if (userInputArray.length < 16 && firstNum != undefined) {
    userInputArray.push(6);
    secondNumToDisplay();
  }
});

const oneBtn = document.querySelector(".one");
oneBtn.addEventListener("click", () => {
  if (userInputArray.length < 16 && firstNum === undefined) {
    userInputArray.push(1);
    firstNumToDisplay();
  } else if (userInputArray.length < 16 && firstNum != undefined) {
    userInputArray.push(1);
    secondNumToDisplay();
  }
});

const twoBtn = document.querySelector(".two");
twoBtn.addEventListener("click", () => {
  if (userInputArray.length < 16 && firstNum === undefined) {
    userInputArray.push(2);
    firstNumToDisplay();
  } else if (userInputArray.length < 16 && firstNum != undefined) {
    userInputArray.push(2);
    secondNumToDisplay();
  }
});

const threeBtn = document.querySelector(".three");
threeBtn.addEventListener("click", () => {
  if (userInputArray.length < 16 && firstNum === undefined) {
    userInputArray.push(3);
    firstNumToDisplay();
  } else if (userInputArray.length < 16 && firstNum != undefined) {
    userInputArray.push(3);
    secondNumToDisplay();
  }
});

const zeroBtn = document.querySelector(".zero");
zeroBtn.addEventListener("click", () => {
  if (userInputArray.length < 16 && firstNum === undefined) {
    userInputArray.push(0);
    firstNumToDisplay();
  } else if (userInputArray.length < 16 && firstNum != undefined) {
    userInputArray.push(0);
    secondNumToDisplay();
  }
});

//Operators
const addBtn = document.querySelector(".add");
addBtn.addEventListener("click", () => {
  if (firstNum === undefined) {
    firstNum = mainDisplay;
    userInputArray = [];
    operator = "+";
    log.textContent = firstNum + " " + operator;
  } else if (result !== undefined) {
    secondNum = mainDisplay;
    userInputArray = [];
    operator = "+";
    log.textContent = firstNum + " " + operator;
  }
});

const subtractBtn = document.querySelector(".subtract");
subtractBtn.addEventListener("click", () => {
  if (firstNum === undefined) {
    firstNum = mainDisplay;
    userInputArray = [];
    operator = "-";
    log.textContent = firstNum + " " + operator;
  } else if (result !== undefined) {
    secondNum = mainDisplay;
    userInputArray = [];
    operator = "-";
    log.textContent = firstNum + " " + operator;
  }
});

const multiplyBtn = document.querySelector(".multiply");
multiplyBtn.addEventListener("click", () => {
  if (firstNum === undefined) {
    firstNum = mainDisplay;
    userInputArray = [];
    operator = "*";
    log.textContent = firstNum + " " + operator;
  } else if (result !== undefined) {
    secondNum = mainDisplay;
    userInputArray = [];
    operator = "*";
    log.textContent = firstNum + " " + operator;
  }
});

const divideBtn = document.querySelector(".divide");
divideBtn.addEventListener("click", () => {
  if (firstNum === undefined) {
    firstNum = mainDisplay;
    userInputArray = [];
    operator = "/";
    log.textContent = firstNum + " " + operator;
  } else if (result !== undefined) {
    secondNum = mainDisplay;
    userInputArray = [];
    operator = "/";
    log.textContent = firstNum + " " + operator;
  }
});

const equalsBtn = document.querySelector(".equals");
equalsBtn.addEventListener("click", () => {
  console.log("Equals sign clicked!");
  if (firstNum != undefined && secondNum != undefined) {
    log.textContent = firstNum + " " + operator + " " + secondNum + "=";
    operate(operator, firstNum, secondNum);
    inputDisplay.textContent = result;
    userInputArray = [];
    secondNum = undefined;
    firstNum = result;
    operator = "";
  }
});

const clearBtn = document.querySelector(".clear");
clearBtn.addEventListener("click", () => {
  firstNum = undefined;
  operator = "";
  secondNum = undefined;
  logDisplay = "";
  mainDisplay = 0;
  userInputArray = [];
  log.textContent = "";
  inputDisplay.textContent = 0;
  result = undefined;
});

// function calculate() {
//   log.textContent = firstNum + " " + operator + " " + secondNum + "=";
//     operate(operator, firstNum, secondNum);
//     inputDisplay.textContent = result;
//     userInputArray = [];
//     secondNum = undefined;
//     firstNum = result;
// }

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
      return (result = add(firstNum, secondNum));
    case "-":
      return (result = subtract(firstNum, secondNum));
    case "*":
      return (result = multiply(firstNum, secondNum));
    case "/":
      return (result = divide(firstNum, secondNum));
  }
}

//user presses a number
//number added to input array, number(s) in array converted to integer, then displayed on main display (all done in firstNumToDisplay())
//when user presses on operator button:
//  (1)complete integer (from display) stored in firstNum, input array emptied
//  (2)operator variable is assigned operator button pressed
//  (3)number and operator added to log, and displayed (?????)
//user enters another number (former whole/float number removed first)
//numbers added to input array, number(s) in array converted to integer, then displayed on main display (all done in firstNumToDisplay())
//user presses equals
//  (1)integer (from display) stored in secondNum, input array emptied
//  (2)operate function called, returning correct result based on operation
//  (3)display entire expression in log
//  (3)display the result on calculator display

//Pressing C (Clear), at any time, resets main display to 0, removes log, and restores default variable values
