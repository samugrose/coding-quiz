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
var firstPage = document.querySelector(".landing-page1");
var secondPage = document.querySelector(".landing-page2");
var thirdPage = document.querySelector(".landing-page3");
var fourthPage = document.querySelector(".landing-page4");
var fifthPage = document.querySelector(".landing-page5");

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
var correctAnswers = [3, 3, 1, 3, 0];

var answers = ["Numbers, Arrays, Objects, All of the Above", "Strings, Booleans, Int, Flax",
        "Brackets, Parentheses, Curly Braces, Backslashes",
            "Brackets, Parentheses, Curly Braces, Quotation Marks", 
        "Chrome Inspector, Windows 95, Java Helpdesk, Potatoville"];
var currentq = "";
var alerter = document.querySelector(".rightOrWrong");
function runGame() {
    //hide the two main sections when button is pushed
    document.querySelector("#main").style.display = "none";
    document.querySelector(".main").style.display = "none";
    document.querySelector("#start-timer").style.display = "none";
    firstPage.style.display="flex";
    firstPage.style.flexDirection="column";
    console.log("running game");

    //push correct button to get to page 2 - button 4 class
    // other buttons all same class- tell you you're wrong and take time away
    var currentSeconds = 0;
    var btn4 = document.querySelector(".button4");

    btn4.addEventListener("click", function(event){
        event.preventDefault();
        //change to landing page 2, give it the display properties from #1 above
        //display "that's right!" for a few seconds, maybe use % operator
        firstPage.style.display="none";
        
        secondPage.style.display="flex";
        secondPage.style.flexDirection="column";
        currentSeconds = secondsLeft;
        
            console.log("That's Right! + " + currentSeconds);


        //alerter.textContent = "";
            //display new page
    });

    var btn8 = document.querySelector(".button8");
    btn8.addEventListener("click", function(event){
        event.preventDefault();
        //change to landing page 2, give it the display properties from #1 above
        //display "that's right!" for a few seconds, maybe use % operator
        secondPage.style.display="none";
        
        thirdPage.style.display="flex";
        thirdPage.style.flexDirection="column";
        currentSeconds = secondsLeft;
        
            console.log("That's Right! + " + currentSeconds);


        //alerter.textContent = "";
            //display new page
    });

        var btn10 = document.querySelector(".button10");
    btn10.addEventListener("click", function(event){
        event.preventDefault();
        //change to landing page 2, give it the display properties from #1 above
        //display "that's right!" for a few seconds, maybe use % operator
        thirdPage.style.display="none";
        
        fourthPage.style.display="flex";
        fourthPage.style.flexDirection="column";
        currentSeconds = secondsLeft;
        
            console.log("That's Right! + " + currentSeconds);


        //alerter.textContent = "";
            //display new page
    });

        var btn16 = document.querySelector(".button16");
        btn16.addEventListener("click", function(event){
        event.preventDefault();
        //change to landing page 2, give it the display properties from #1 above
        //display "that's right!" for a few seconds, maybe use % operator
        fourthPage.style.display="none";
        
        fifthPage.style.display="flex";
        fifthPage.style.flexDirection="column";
        currentSeconds = secondsLeft;
        
            console.log("That's Right! + " + currentSeconds);


        //alerter.textContent = "";
            //display new page
    });

    var btn17 = document.querySelector(".button17");
        btn17.addEventListener("click", function(event){
        event.preventDefault();
        //change to landing page 2, give it the display properties from #1 above
        //display "that's right!" for a few seconds, maybe use % operator
        fifthPage.style.display="none";
        
        currentSeconds = secondsLeft;
        
            console.log("That's Right! + " + currentSeconds);


        //alerter.textContent = "";
            //display new page
    });

    //bring up page for q1, with questions loaded

    // for (i = 0; i < questions.length; i++) {
    //     //dynamically update content of main section.
    //     //there will always be a main section, content varies. display: none for main section of questions?
    //     currentQ = document.querySelector("#main").textContent = questions[i];
    //     console.log(currentQ + "got to poin of answering");
        
    //     //add logic to control flow of game, say correct or not //add buttons and create event listener that sets value of userAnswer to true
        

    //          //index value of correct answers, tied to button value


    //     var choiceSelection = answers[i].split(", "); //gives youseparate values
    //     console.log(choiceSelection + " choiceSelection");
    //     //var mainEnd = document.querySelector(".main");
    //     var currentButton;

    //     //loads buttons with info
    //     for (j = 1; j <= choiceSelection.length; j++) {
    //         console.log(choiceSelection[j - 1] + " value at j");
            
    //         //add buttons here, populate labels with array ontents
    //         //add reference to data index for button to get index
    //         var buttonString = (".button" + j);
    //         console.log("button" + j);
    //         currentButton = document.querySelector(buttonString);
    //         console.log("just after button");
    //         var answer = choiceSelection[j - 1];
    //         console.log("got here too");
    //         currentButton.textContent = answer;
    //     }

        
    //         var correctAnswer = correctAnswers[i];
    //         valueClicked = clicker();
    //         var userAnswer = "false";
    //         while (userAnswer === false) {
    //             valueClicked = clicker();
    //             if (valueClicked === correctAnswer) {
    //                 userAnswer = true;
    //             }
    //             console.log("new choice clicked: " + valueClicked);
    //         }
    //         console.log(valueClicked + " got you out of the loop");
    //        // var valueClicked = getValue;
            
    //             console.log("you clicked " + valueClicked);
              
        
    //     //     while (valueClicked !== correctAnswer) {
    //     //         $("#rightOrWrong").text("wrong!");
    //     //         console.log("you clicked " + valueClicked);
    //     // }
    //        // $("#rightOrWrong").text("That's right!");
    //         //var seconds = secondsLeft;
    //     }

    //     var valueClicked = "";
    //     function clicker(valueclicked) {
    //         $(".btn-primary").on("click", function() { 
    //             valueClicked = $(this).attr("value");
    //             console.log(valueClicked);
    //         });
    //     }

        


        //$(this).attr("value")); inside of a click event for button value
    
        // while (userAnswer) {
        //     //put 4 buttons, one of which has event listener to make the value true, use button id to target
        //     //create buttons, append to currentQsection
            

        // }
    }
    //change through questions, for loop over array of options?
    //displays as block on page, tells you if you're correct or not,
    //time subtracted if you get it wrong. 



//maybe have only one button actually link to next slide, display correct while waiting

//make questions pages:
// Arrays in Javascript can be used to store ______. (numbers, arrays, objects, AOTA)
//commonly used data types DO NOT include ________. (strings, booleans, int, flax)
//the condition in an if/else statement is contained in _____ (brackets, parenthesis, curly brack, slashes)
//String value must be enclosed in _____ whend eclaring (usual stuff)
//a very useful debugging tool is _______ (google chrome dev tools)