let [seconds, minutes, hours] = [0, 0, 0];
let display = document.getElementById("display");
let timer = null;
let recordCount = 0;

function stopwatch() {
  seconds++;
  if (seconds == 60) {
    seconds = 0;
    minutes++;
    if (minutes == 60) {
      minutes = 0;
      hours++;
    }
  }
  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;
  display.innerHTML = h + ":" + m + ":" + s;
}

document.getElementById("start").onclick = function () {
  if (timer !== null) clearInterval(timer);
  timer = setInterval(stopwatch, 1000);
};

document.getElementById("pause").onclick = function () {
  clearInterval(timer);
};

document.getElementById("reset").onclick = function () {
  clearInterval(timer);
  [seconds, minutes, hours] = [0, 0, 0];
  display.innerHTML = "00:00:00";
  document.getElementById("records").innerHTML = "";
  recordCount = 0;
};

document.getElementById("record").onclick = function () {
  recordCount++;
  let record = document.createElement("li");
  record.textContent = `Record ${recordCount}: ${display.innerHTML}`;
  document.getElementById("records").appendChild(record);
};
