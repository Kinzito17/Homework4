var timerEl = document.querySelector("timer")
var secondsLeft
var score = secondsLeft


var seconds = 75


functions setTimer() {
    var timerInterval = setInterval(function() {
        if (seconds < 0) {
            clearInterval(x);
            document.getElementById("timer").innerHTML = "Your time is up!";



function startQuiz() {


// Store data
var score = "";
localStorage.setItem('', score);

// Get data
var score = localStorage.getItem('myDataKey');

function startTimer(duration, display) {
    var timer = duration, seconds;
    setInterval(function () {
        seconds = parseInt(timer % 60, 10);
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = seconds;

        if (--timer < 0) {
            clearInterval(x);
            document.getElementById("timer").innerHTML = "Your time is up!";
        }
    }, 1000);
}

