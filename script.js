let timerInterval;
let startTime;
let elapsedTime = 0;

const display = document.getElementById('display');
const laps = document.getElementById('laps');

document.getElementById('start').addEventListener('click', () => {
  if (!timerInterval) {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(() => {
      elapsedTime = Date.now() - startTime;
      display.textContent = formatTime(elapsedTime);
    }, 100);
  }
});

document.getElementById('pause').addEventListener('click', () => {
  clearInterval(timerInterval);
  timerInterval = null;
});

document.getElementById('reset').addEventListener('click', () => {
  clearInterval(timerInterval);
  timerInterval = null;
  elapsedTime = 0;
  display.textContent = "00:00:00";
  laps.innerHTML = '';
});

document.getElementById('lap').addEventListener('click', () => {
  const lapTime = formatTime(elapsedTime);
  const lapItem = document.createElement('li');
  lapItem.textContent = lapTime;
  laps.appendChild(lapItem);
});

function formatTime(ms) {
  const date = new Date(ms);
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');
  const milliseconds = String(Math.floor(date.getMilliseconds() / 10)).padStart(2, '0');
  return `${minutes}:${seconds}:${milliseconds}`;
}
