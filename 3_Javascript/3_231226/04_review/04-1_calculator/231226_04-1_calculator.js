const form = document.getElementById("form");
const result = document.querySelector(".result");
let inputValue = "";
let currIdx = 0;
let restart = false;
const nums = [];
const operators = [];

function inputClear() {
  // location.reload(true);
  inputValue = "";
  currIdx = 0;
  nums.splice(0);
  operators.splice(0);
  result.value = "";
}

function inputNum(strNum) {
  if (restart) {
    inputClear();
    restart = false;
  }
  inputValue += strNum;
  result.value += strNum;
  nums[currIdx] = "";
  nums[currIdx] += strNum;
  // console.log(strNum);
  // console.log(operators);
}

function inputOp(op) {
  if (restart) {
    inputClear();
    restart = false;
  }
  inputValue += op;
  result.value += op;
  operators.push(op);
  currIdx += 1;
  console.log(nums);
}

function calculate(n1, op, n2) {
  n1 = parseInt(n1);
  n2 = parseInt(n2);
  switch (op) {
    case "+":
      return n1 + n2;
    case "-":
      return n1 - n2;
    case "/":
      return n1 / n2;
    case "*":
      return n1 * n2;
  }
}

function inputEq() {
  let res = nums.shift();
  console.log(res);
  while (nums[0] && operators[0]) {
    res = calculate(res, operators.shift(), nums.shift());
    console.log(res);
  }
  result.value = res;
  restart = true;
}
