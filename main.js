let timer;
let seconds = 0;
let minutes = 0;
let hours = 0;
let isRunning = false;

const timerElement = document.getElementById("timer");
const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");

function updateTimer() {
  seconds++;

  if (seconds === 60) {
    seconds = 0;
    minutes++;
  }

  if (minutes === 60) {
    minutes = 0;
    hours++;
  }

  const h = String(hours).padStart(2, "0");
  const m = String(minutes).padStart(2, "0");
  const s = String(seconds).padStart(2, "0");

  timerElement.textContent = `${h}:${m}:${s}`;
}

startBtn.addEventListener("click", () => {
  if (!isRunning) {
    timer = setInterval(updateTimer, 1000);
    isRunning = true;
  }
});

stopBtn.addEventListener("click", () => {
  clearInterval(timer);
  isRunning = false;
});

resetBtn.addEventListener("click", () => {
  clearInterval(timer);
  isRunning = false;
  seconds = 0;
  minutes = 0;
  hours = 0;
  timerElement.textContent = "00:00:00";
});
