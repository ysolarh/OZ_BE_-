const timer = document.getElementById("timer");
const dayDiv = document.getElementById("days");
const hourDiv = document.getElementById("hours");
const minDiv = document.getElementById("minutes");
const secDiv = document.getElementById("seconds");
const startBtn = document.querySelector(".start-btn");
const setBtn = document.querySelector(".set-btn");

let days, hours, mins, secs;

function countdown(yy, mm, dd, hh) {
  const now = new Date();
  // const dday = Date.parse(`${yy}/${mm}/${dd} ${hh}:00:00`);
  // const dday = new Date(yy, mm, dd, hh, 0, 0);
  const dday = new Date(yy, mm, dd, hh);
  // console.log(now);
  // console.log(dday);
  const diff = dday - now;
  days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const h = Math.floor(diff / (1000 * 60 * 60));
  const m = Math.floor(diff / (1000 * 60));
  const s = Math.floor(diff / 1000);
  hours = h - days * 24;
  mins = m - h * 60;
  secs = s - m * 60;

  dayDiv.innerText = String(days).padStart(2, "0");
  hourDiv.innerText = String(hours).padStart(2, "0");
  minDiv.innerText = String(mins).padStart(2, "0");
  secDiv.innerText = String(secs).padStart(2, "0");

  // console.log(days, hours, mins, secs);
  // animationStart();

  if (diff <= 1) {
    clearInterval(intervalId);
    animationState("paused");
  }
}

// function animationStart() {
//   console.log(1);
//   secDiv.animate([{ top: 0 }, { bottom: "100%" }], {
//     duration: 1000,
//     easing: "ease-in-out",
//     direction: "alternate",
//     iteration: "infinite",
//   });
//   minDiv.animate([{ top: 0 }, { bottom: "100%" }], {
//     duration: 1000,
//     easing: "ease-in-out",
//     direction: "alternate",
//     iteration: "infinite",
//   });
// }

function animationState(state) {
  secDiv.style.animationPlayState = state;
  minDiv.style.animationPlayState = state;
  hourDiv.style.animationPlayState = state;
  dayDiv.style.animationPlayState = state;
}

let intervalId;

startBtn.addEventListener("click", () => {
  alert("D-day를 입력해주세요.");
  const y = prompt("년");
  const m = prompt("월");
  const d = prompt("일");
  const h = prompt("시");

  if (intervalId) {
    clearInterval(intervalId);
  }
  intervalId = setInterval(countdown, 1000, y, m - 1, d, h);
  minDiv.style.top = 500 + "px";
  console.log(secs);
  // minDiv.style.top = (secs / 60) * 100 + "%";
  // hourDiv.style.top = `(${mins} / 60 * 100)%`;
  // dayDiv.style.top = `(${hours} / 24 * 100)%`;
  animationState("running");
  // animationStart();
});
