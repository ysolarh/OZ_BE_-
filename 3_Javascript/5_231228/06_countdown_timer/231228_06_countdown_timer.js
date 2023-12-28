const timer = document.getElementById("timer");
const dayDiv = document.getElementById("days");
const hourDiv = document.getElementById("hours");
const minDiv = document.getElementById("minutes");
const secDiv = document.getElementById("seconds");
const startBtn = document.querySelector(".start-btn");
const setBtn = document.querySelector(".set-btn");

function countdown(yy, mm, dd, hh) {
  const now = new Date();
  const end = Date.parse(`${yy}/${mm}/${dd} ${hh}:00:00`);
  const diff = end - now;
  console.log(diff);
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor(diff / (1000 * 60 * 60));
  const mins = Math.floor(diff / (1000 * 60));
  const secs = Math.floor(diff / 1000);
  const h = hours - days * 24;
  const m = mins - hours * 60;
  const s = secs - mins * 60;

  // currTime.innerText = `현재 날짜와 시간: ${now}`;
  dayDiv.innerText = String(days).padStart(2, "0");
  hourDiv.innerText = String(h).padStart(2, "0");
  minDiv.innerText = String(m).padStart(2, "0");
  secDiv.innerText = String(s).padStart(2, "0");
}

setBtn.addEventListener("click", () => {
  const y = prompt("년");
  const m = prompt("월");
  const d = prompt("일");
  const h = prompt("시");

  countdown(y, m, d, h);
});

startBtn.addEventListener("click", () => {
  setInterval(countdown, 1000);
});
