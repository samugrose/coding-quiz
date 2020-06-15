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
    runGame();
})

var questions = ["Arrays in Javascript can be used to store ______",
 "Commonly used data types DO NOT include ________.",
  "The condition in an if/else statement is contained in _____.", "String values must be enclosed in _____.", "A very useful debugging tool is _______."];
var score = 0;
function runGame() {
    console.log("running game");

    for (i = 0; i < questions.length; i++) {
        //dynamically update content of main section.
        //there will always be a main section, content varies. display: none for main section of questions?
        var currentQ = document.querySelector("#main").textContent = questions[i];
        //add logic to control flow of game, say correct or not
        var userAnswer = false; //add buttons and create event listener that sets value of userAnswer to true
        
        while (userAnswer) {
            //put 4 buttons, one of which has event listener to make the value true, use button id to target

        }
    }
    //change through questions, for loop over array of options?
    //displays as block on page, tells you if you're correct or not,
    //time subtracted if you get it wrong. 

}

//maybe have only one button actually link to next slide, display correct while waiting

//make questions pages:
// Arrays in Javascript can be used to store ______. (numbers, arrays, objects, AOTA)
//commonly used data types DO NOT include ________. (strings, booleans, int, flax)
//the condition in an if/else statement is contained in _____ (brackets, parenthesis, curly brack, slashes)
//String value must be enclosed in _____ whend eclaring (usual stuff)
//a very useful debugging tool is _______ (google chrome dev tools)