const stopwatch = document.querySelector(".stopwatch");
const startBtn = document.querySelector(".start");
const stopBtn = document.querySelector(".stop");
const resetBtn = document.querySelector(".reset");

let time = 0;
let timeoutId;

function getTime() {
  hour = Math.floor(time / (60 * 60));
  min = Math.floor((time - hour * 60 * 60) / 60);
  sec = Math.floor(time % 60);
  return `${String(hour).padStart(2, "0")}:${String(min).padStart(
    2,
    "0"
  )}:${String(sec).padStart(2, "0")}`;
}

function printTime() {
  stopwatch.innerText = `경과시간: ${getTime()}`;
}

stopwatch.innerText = `경과시간: ${getTime()}`;
function startStopwatch() {
  time += 1;
  printTime();
  // interval = setInterval(startStopwatch, 100);
  stopStopwatch();
  timeoutId = setTimeout(startStopwatch, 10);
}

function stopStopwatch() {
  printTime();
  if (timeoutId) {
    clearTimeout(timeoutId);
  }
}

function resetStopwatch() {
  stopStopwatch();
  time = 0;
  printTime();
  // stopwatch.innerText = "경과시간: 00:00:00";
}

function handleClick(e) {
  if (e.target.className == "start") {
    startStopwatch();
  } else if (e.target.className == "stop") {
    stopStopwatch();
  } else if (e.target.className == "reset") resetStopwatch();
}

startBtn.addEventListener("click", handleClick);
stopBtn.addEventListener("click", handleClick);
resetBtn.addEventListener("click", handleClick);
