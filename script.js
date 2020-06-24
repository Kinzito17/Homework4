//Quiz Questions
var questions = [
    {
        question: "1. Commonly used data types DO NOT include:",
        choices: ["Strings", "Booleans", "Alerts", "Numbers"],
        answer: "Alerts"
    },
    {
        question: "2. The condition in an if / else statement is enflosed within ____.",
        choices: ["Quotes", "Curly Brackets", "Parenthesis", "Square Brackets"],
        answer: "Curly Brackets"
    },
    {
        question: "3. Arrays in JavaScript can be used to store ____.",
        choices: ["Numbers and Strings", "Other Arrays", "Booleans", "All of the Above"],
        answer: "All of the Above"
    },
    {
        question: "4. String values must be enclosed within ____ when being assigned to variables.",
        choices: ["Commas", "Curly Brackets", "Quotes", "Parenthesis"],
        answer: "Quotes"
    },
    {
        question: "5. A very useful tool used during development and debugging for printing content to the debugger is:",
        choices: ["JavaScript", "Terminal / Bash", "For Loops", "Console.log"],
        answer: "Console.log"
    }
]

//Variables

//start the quiz
var startButton = document.querySelector("#start-quiz");
//starts the quiz everytime with 75 seconds
var countdown = document.querySelector("#countdown");
//Div where questions will populate
var questionsHtml = document.querySelector("#questions")
//Not sure if I need this but just to be safe
var container = document.querySelector("#container")
//used to create new list element
var ulEl = document.createElement("ul")
//score starts as 0
var score = 0;
//index reference for rendering questions
var questionsIndex = 0;

//Variables for countdown
//user will start with 75 seconds
var secondsAmount = 75;
//the function will call this to start
var startSecs = 0;
//seconds taken away for question answered wrong
var missed = 10;


//start Quiz
startButton.addEventListener("click", function () {
    if (startSecs === 0) {
        startSecs = setInterval(function () {
            secondsAmount--;
            countdown.textContent = "Time: " + secondsAmount;

            if (secondsAmount <= 0) {
                clearInterval(startSecs);
                quizOver();
                countdown.textcontent = "Quiz is over";
            }
        }, 1000);
    }
    render(questionsIndex);
});

//for loop pulls question and answer objects from array
function render(questionsIndex) {
    questionsHtml.innerHTML = "";
    ulEl.innerHTML = "";
    for (var i = 0; i < questions.length; i++) {
        var quizQuestions = questions[questionsIndex].question;
        var ansChoices = questions[questionsIndex].choices;
        questionsHtml.textContent = quizQuestions;
    }

    // creates new li when the answers are presented
    ansChoices.forEach(function (newLi) {
        var listItem = document.createElement("li");
        listItem.textContent = newLi;
        questionsHtml.appendChild(ulEl);
        ulEl.appendChild(listItem);
        listItem.addEventListener("click", (compare));
    })
};

//compares submitted answer to answer key
function compare(event) {
    var element = event.target;
    if (element.matches("li")) {
        var newDiv = document.createElement("div");
        newDiv.setAttribute("id", "newDiv")
        if (element.textContent == questions[questionsIndex].answer) {
            newDiv.textContent = "Correct";
        } else {
            startTime = secondsAmount - missed;
            newDiv.textContent = "Wrong";
        }
    }
    questionsIndex++;
    if (questionsIndex >= questions.length) {
        quizOver();
        newDiv.textContent = "All Done!"
    } else {
        render(questionsIndex);

    }
    questionsHtml.appendChild(newDiv)
}

function quizOver() {
    questionsHtml.innerHTML = "";
    countdown.innerHTML = "";
}



