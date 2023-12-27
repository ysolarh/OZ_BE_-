const form = document.querySelector(".form");
const resultDiv = document.querySelector(".result__text");
const rps = ["가위", "바위", "보"];

function printResult(result, userChoice, computer) {
  resultDiv.textContent = `당신의 선택: ${userChoice} / 컴퓨터의 선택: ${computer} / 결과: ${result}`;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const randNum = Math.floor(Math.random() * 3);
  const userChoice = e.target.choice.value;
  const computer = rps[randNum];

  if (rps.indexOf(userChoice) == -1) {
    resultDiv.textContent = "다시 입력하세요.";
  } else {
    if (userChoice == rps[randNum]) {
      printResult("비겼습니다!", userChoice, computer);
    } else if (
      (userChoice == "가위" && computer == "보") ||
      (userChoice == "바위" && computer == "가위") ||
      (userChoice == "보" && computer == "바위")
    ) {
      printResult("이겼습니다!", userChoice, computer);
    } else {
      printResult("졌습니다!", userChoice, computer);
    }
  }
});
