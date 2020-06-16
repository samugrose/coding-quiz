function doSomething() {
    console.info('DOM loaded');
  }
  
  if (document.readyState === 'loading') {  // Loading hasn't finished yet
    document.addEventListener('DOMContentLoaded', doSomething);
  } else {  // `DOMContentLoaded` has already fired
    doSomething();
  }

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
      //sendMessage(); //can put scores into this method
    }

  }, 1000);
}
//when you click the button you start the quiz and dynamically change the content on the screen

var buttonTracker = document.querySelector("#start-timer");
var firstPage = document.querySelector(".landing-page");

buttonTracker.addEventListener("click", function(){
    event.preventDefault();
    
    setTime();
    runGame();
})

// add event listener for dom completion

var questions = ["Arrays in Javascript can be used to store ______",
 "Commonly used data types DO NOT include ________.",
  "The condition in an if/else statement is contained in _____.", "String values must be enclosed in _____.", "A very useful debugging tool is _______."];
var score = 0;
function runGame() {
    document.querySelector(".main").style.display = "none";
    document.querySelector("#start-timer").style.display = "none";
    firstPage.style.display="flex";
    firstPage.style.flexDirection="column";
    console.log("running game");

    for (i = 0; i < questions.length; i++) {
        //dynamically update content of main section.
        //there will always be a main section, content varies. display: none for main section of questions?
        var currentQ = document.querySelector("#main").textContent = questions[i];
        
        //add logic to control flow of game, say correct or not
        var userAnswer = false; //add buttons and create event listener that sets value of userAnswer to true
        var answers = ["Numbers, Arrays, Objects, All of the Above", "Strings, Booleans, Int, Flax",
        "Brackets, Parentheses, Curly Braces, Backslashes",
            "Brackets, Parentheses, Curly Braces, Quotation Marks", 
        "Chrome Inspector, Windows 95, Java Helpdesk, Potatoville"];

            var correctAnswers = [3, 3, 1, 3, 0]; //index value of correct answers, tied to button value
console.log(answers);

        var choiceSelection = answers[i].split(", "); //gives youseparate values
        console.log(choiceSelection + " choiceSelection");
        //var mainEnd = document.querySelector(".main");
        var currentButton;
        for (j = 1; j <= choiceSelection.length; j++) {
            console.log(choiceSelection[j - 1] + " value at j");
            console.log("button" + j);
            //add buttons here, populate labels with array ontents
            //add reference to data index for button to get index
            var buttonString = (".button" + j);
        
            currentButton = document.querySelector(buttonString);
            var answer = choiceSelection[j - 1];
            currentButton.textContent = answer;
        }

        $(".btn-primary").on("click", function() { 
            var valueClicked = $(this).attr("value");
            console.log("you clicked " + valueClicked);
        })


        //$(this).attr("value")); inside of a click event for button value
    
        // while (userAnswer) {
        //     //put 4 buttons, one of which has event listener to make the value true, use button id to target
        //     //create buttons, append to currentQsection
            

        // }
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