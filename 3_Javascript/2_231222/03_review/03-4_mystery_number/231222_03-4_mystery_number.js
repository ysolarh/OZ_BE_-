const form = document.getElementById("input__form");
const hint = document.querySelectorAll(".hint");
const retryBtn = document.querySelector(".retry__btn");
const randNum = Math.floor(Math.random() * 100 + 1);

function clickBtn() {
  const inputNum = document.querySelector(".input__num").value;
  // inputNum = parseInt(inputNum.value);

  if (inputNum == randNum) {
    alert("정답!");
    retryBtn.style.display = "block";
    hint[0].style.display = "none";
    hint[1].style.display = "none";
  } else if (inputNum < randNum) {
    hint[0].style.display = "block";
    hint[1].style.display = "none";
  } else {
    hint[1].style.display = "block";
    hint[0].style.display = "none";
  }
  return false;
}

function clickReset() {
  location.reload();
  hint[0].style.display = "none";
  hint[1].style.display = "none";
  return false;
}
