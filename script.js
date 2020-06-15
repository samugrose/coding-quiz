var timeEl = document.querySelector(".time");
var mainEl = document.getElementById("#main");

var secondsLeft = 75;
//make an onclick that sets the time to 75
function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft;

    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      sendMessage(); //can put scores into this method
    }

  }, 1000);
}
//when you click the button you start the quiz and dynamically change the content on the screen

var buttonTracker = document.querySelector("#start-timer");

buttonTracker.addEventListener("click", function(){
    event.preventDefault();
    setTime();
})