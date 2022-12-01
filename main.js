window.onload = function () {

let seconds = 00;
let tens = 00;
let appendTens = document.getElementById("tens")
let appendSeconds = document.getElementById("seconds")
let buttonStart = document.getElementById('button_start');
let buttonStop = document.getElementById('button_stop');
let buttonReset = document.getElementById('button_reset');
let Interval;



//handler function for start button
buttonStart.onclick = function () {
  clearInterval(Interval);
  Interval = setInterval(startTimer, 10);
}

//handler function for stop button
buttonStop.onclick = function () {
  clearInterval(Interval);
}

//handler function for reset button
buttonReset.onclick = function () {
  clearInterval(Interval);
  tens = "00";
  seconds = "00";
  appendTens.innerHTML = tens;
  appendSeconds.innerHTML = seconds;
}



//timer function for update time 
function startTimer() {

  //function for prepend 0 in single digit number
  const twoDigit = (n) => n > 9 ? n : "0" + n;

  tens++;
  appendTens.innerHTML = twoDigit(tens);
  if (tens > 99) {
    seconds++;
    appendSeconds.innerHTML = twoDigit(seconds);
    tens = 0;
    appendTens.innerHTML = "0" + 0;
  }
}


}
