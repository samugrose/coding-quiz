
  


var timeEl = document.querySelector(".time");
var mainEl = document.getElementById("#main");
var gameOver = false;
var secondsLeft = 75;
var newLi;
//make an onclick that sets the time to 75


function setTime() {
  var timerInterval = setInterval(function() {
    if(secondsLeft <= 0) {
        gameOver = false;
        clearInterval(timerInterval);
        currentPage.style.display = "none";
        sixthPage.style.display="flex";
        sixthPage.style.flexDirection="column";
      } else if (!gameOver) {
    secondsLeft--;
    timeEl.textContent = secondsLeft;
    } else  { //secondsLeft != 0, game is not over per boolean
        timeEl.textContent = currentSeconds;
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
var sixthPage = document.querySelector(".landing-page6");



var score = 0;
var currentq = "";
var alerter = document.querySelector(".rightOrWrong1");

var currentPage = "";
var currentSeconds = 0;

function runGame() {
    setTime();
    gameOver = false;
    
    //hide the two main sections when button is pushed
    // document.querySelector("#main").style.display = "none";
    // document.querySelector(".main").style.display = "none";
    // document.querySelector("#start-timer").style.display = "none";
    // firstPage.style.display="flex";
    // firstPage.style.flexDirection="column";
    // currentPage = firstPage;
    console.log("running game");
}

    //push correct button to get to page 2 - button 4 class
    // other buttons all same class- tell you you're wrong and take time away
    
    buttonTracker.addEventListener("click", function(){
        event.preventDefault();
        document.querySelector(".main").style.display="none";
        document.querySelector("#main").style.display="none";
        document.querySelector("#start-timer").style.display="none";
        firstPage.style.display="flex";
        firstPage.style.flexDirection="column";
        currentPage = firstPage;
        runGame();
        
    });

    var btn4 = document.querySelector(".button4");

    btn4.addEventListener("click", function(event){
        event.preventDefault();
        firstPage.style.display="none";
        secondPage.style.display="flex";
        secondPage.style.flexDirection="column";
        currentPage = secondPage;
        currentSeconds = secondsLeft;        
    });

    var btn8 = document.querySelector(".button8");
    btn8.addEventListener("click", function(event){
        event.preventDefault();
       
        secondPage.style.display="none";
        
        thirdPage.style.display="flex";
        thirdPage.style.flexDirection="column";
        currentPage = thirdPage;
        currentSeconds = secondsLeft;
    });

        var btn10 = document.querySelector(".button10");
    btn10.addEventListener("click", function(event){
        event.preventDefault();
        //change to landing page 2, give it the display properties from #1 above
        //display "that's right!" for a few seconds, maybe use % operator
        
        thirdPage.style.display="none";
        
        fourthPage.style.display="flex";
        fourthPage.style.flexDirection="column";
        currentPage = fourthPage;
        currentSeconds = secondsLeft;
        
            console.log("That's Right! + " + currentSeconds);
    });

        var btn16 = document.querySelector(".button16");
        btn16.addEventListener("click", function(event){
        event.preventDefault();
        
        //change to landing page 2, give it the display properties from #1 above
        //display "that's right!" for a few seconds, maybe use % operator
        fourthPage.style.display="none";
        
        fifthPage.style.display="flex";
        fifthPage.style.flexDirection="column";
        currentPage = fifthPage;
        currentSeconds = secondsLeft;
    });

    var btn17 = document.querySelector(".button17");
        btn17.addEventListener("click", function(event){
        event.preventDefault();
        fifthPage.style.display="none";
        currentSeconds = secondsLeft;
        gameOver = true;            
        sixthPage.style.display="flex";
        sixthPage.style.flexDirection="column";
    });

    var scoreString = "";
    var topGetter = document.querySelector("#top");
    var scoreGetter = document.querySelector(".scorePage");
    var subButton = document.querySelector(".button21"); //submit button
    
    subButton.addEventListener("click", function() {
        event.preventDefault();
        gameOver = true;
        var buttonVal = document.querySelector("#initials1").value;
        scoreString = buttonVal + " - " + currentSeconds; //this is their initals plus score
        console.log(initials);
        sixthPage.style.display = "none"; //gets rid of sixth page, now display the score page
        topGetter.style.display = "none";

        scoreGetter.style.display = "flex";
        scoreGetter.style.flexDirection = "column";

        window.localStorage.setItem(scoreString, JSON.stringify(currentSeconds));
        var scores = document.querySelector(".scoreList");
        newLi = document.createElement("li");
        newLi.textContent = scoreString; //adds initials - score as text of li
        console.log(scores.hasChildNodes());

            scores.appendChild(newLi);
    });

    var backButt = document.querySelector(".backButton");
    backButt.addEventListener("click", function() {
        event.preventDefault();
        document.querySelector(".main").style.display="flex";
        document.querySelector("#main").style.display="flex";
        document.querySelector("#start-timer").style.display="flex";
        topGetter.style.display = "block";
        scoreGetter.style.display= "none";
        secondsLeft = 75;
        currentSeconds = 0;
        timeEl.textContent = "0";
        scoreString = "";
        newLi = "";
        currentPage = "";
        //gameOver = false;
    });

    var scoreL = document.querySelector(".scoreLink"); //link to the 'viewHighScores in top
    scoreL.addEventListener("click", function() {
        if (currentPage === "") {
            document.querySelector(".main").style.display="none";
            document.querySelector("#main").style.display="none";
            document.querySelector("#start-timer").style.display="none";
        } else { //currentPage is a question page
            currentPage.style.display = "none";
        }
        scoreGetter.style.display = "flex";
        scoreGetter.style.flexDirection = "column";
        gameOver = true;
        currentSeconds = 0;
        secondsLeft = 75;
        currentPage = "";
    });
    
  
  
