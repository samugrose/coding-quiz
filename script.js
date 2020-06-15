var timeEl = document.querySelector(".time");
var mainEl = document.getElementById("main");

var secondsLeft = 75;

function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds left till colorsplosion.";

    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      sendMessage(); //can put scores into this method
    }

  }, 1000);
}