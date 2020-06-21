var secondsLeft
var score = secondsLeft
var countDown = document.querySelector("timer")

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

var timeleft = 75;
var countDown = setInterval(function() {
    var timer = duration, seconds;

  if(timeleft <= 0){
    clearInterval(countDown);
    document.getElementById("countdown").innerHTML = "Finished";
  } else {
    document.getElementById("countdown").innerHTML = timeleft + " seconds remaining";
  }
  timeleft -= 1;
}, 1000);

todoForm.addEventListener("submit", function(event) {
    event.preventDefault();

