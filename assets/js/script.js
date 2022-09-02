var wordBlank = document.querySelector(".word-blanks");
var win = document.querySelector(".win");
var lose = document.querySelector(".lose");
var timerElement = document.querySelector(".timer-count");
var startButton = document.querySelector(".start-button");

var chosenWord = "";
var numBlanks = 0;
var winCounter = 0;
var loseCounter = 0;
var isWin = false;
var timer;
var timerCount;

var lettersInChosenWord = [];
var blanksLetters = [];

var words = ["variable", "array", "modulus", "object", "function", "string", "boolean"];

// The init function is called when the page loads
function init() {
    getWins();
    getlosses();
}

// The startGame function is called when the start button is clicked
function startGame() {
    isWin = false;
    timerCount = 10;
    //Prevents start button from being licked when round is in progress
    startButton.disabled = true;
    rendorBlanks()
    startTimer()
}