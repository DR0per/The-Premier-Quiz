/**  JavaScript code for quiz functionality **/
const submitButton = document.getElementById("submitBtn");
const quizSection = document.getElementById("quiz");
const resultsSection = document.getElementById("results");
const scoreElement = document.getElementById("score");

submitButton.addEventListener("click", showResults);

/** Function to Randomize Questions for the user */

function randomizeQuestions() {
    let questionContainer = document.getElementById('questionContainer');
    let questions = document.getElementsByClassName('question');
    let questionArray = Array.prototype.slice.call(questions);
    let randomizedArray = [];
  
    while (questionArray.length > 0) {
      let randomQuestions = Math.floor(Math.random() * questionArray.length);
      let randomizedQuestion = questionArray.splice(randomQuestions, 1)[0];
      randomizedArray.push(randomizedQuestion);
    }
  
    for (let i = 0; i < randomizedArray.length; i++) {
      questionContainer.appendChild(randomizedArray[i]);
    }
  }
  
  randomizeQuestions();

function showResults() {
    const questions = document.getElementsByClassName("question");
    let score = 0;

    for (let i = 0; i < questions.length; i++) {
        const question = questions[i];
        const selectedOption = question.querySelector('input[type="radio"]:checked');

        if (selectedOption !== null) {
            const selectedValue = selectedOption.value;
            const correctAnswer = getCorrectAnswer(i);

            if (selectedValue === correctAnswer) {
                score += 1;
            }
        }
    }

    /**Display the score**/
    scoreElement.textContent = "Your score: " + score + "/" + questions.length;

    /**Hide the quiz section and show the results section **/
    quizSection.style.display = "none";
    resultsSection.style.display = "block";
}

function getCorrectAnswer(questionIndex) {
    const correctAnswers = [
        "France" /** Correct answer for question 1 **/,
        "Lionel Messi" /** Correct answer for question 2 **/,
        "Brazil" /** Correct answer for question 3 **/,
        "Cristiano Ronaldo" /** Correct answer for question 4 **/,
        "Italy" /** Correct answer for question 5 **/,
        "Manchester United" /** Correct answer for question 6 **/,
        "Alan Shearer" /** Correct answer for question 7 **/,
        "Manchester City" /** Correct answer for question 8 **/,
        "Wayne Rooney" /** Correct answer for question 9 **/,
        "Blackburn Rovers", /** Correct answer for question 10 **/,
        "Brazil", /** Correct answer for question 11 **/,
        "Real Madrid", /** Correct answer for question 12 **/,
        "Lionel Messi" /** Correct answer for question 13 **/,
    ];

    return correctAnswers[questionIndex];
}

document.getElementById("tryAgainBtn").addEventListener("click", resetQuiz);

function resetQuiz() {
    /** Clear selected answers **/
    var selectedAnswers = document.querySelectorAll('input[type="radio"]:checked');
    for (var i = 0; i < selectedAnswers.length; i++) {
        selectedAnswers[i].checked = false;
    }

    /** Hide the results section **/
    resultsSection.style.display = "none";
    /**  Show the quiz section **/
    quizSection.style.display = "block";
}

/** Set the duration of the quiz in seconds */
const quizDuration = 120; // 2 minutes

/** Get the timer element from the HTML */
const timerElement = document.getElementById("timer");

let deadline = null; /** Store the quiz deadline */

/** Function to update the timer display */
function updateTimer() {
    /** Get the current time */
    const currentTime = new Date().getTime();

    /** Calculate the remaining time */
    const remainingTime = deadline - currentTime;

    /** Calculate minutes and seconds */
    const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

    /** Display the remaining time */
    timerElement.textContent = `Time remaining: ${minutes}:${seconds.toString().padStart(2, "0")}`;

    /** Check if the time has run out */
    if (remainingTime <= 0) {
        /** Automatically submit the quiz or show the results */
        showResults();
    } else {
        /** Update the timer every second */
        setTimeout(updateTimer, 1000);
    }
}

/** Function to start the timer */
function startTimer() {
    /** Calculate the deadline by adding the duration to the current time */
    deadline = new Date().getTime() + quizDuration * 1000;

    /** Start the timer */
    updateTimer();
}

/** Function to reset the quiz and timer */
function resetQuiz() {
    /** Clear selected answers **/
    const selectedAnswers = document.querySelectorAll('input[type="radio"]:checked');
    for (let i = 0; i < selectedAnswers.length; i++) {
        selectedAnswers[i].checked = false;
    }

    /** Hide the results section **/
    const resultsSection = document.getElementById("results");
    resultsSection.style.display = "none";

    /** Show the quiz section **/
    const quizSection = document.getElementById("quiz");
    quizSection.style.display = "block";

    /** Restart the timer */
    startTimer();
}

/** Call the startTimer function when the page is loaded */
window.addEventListener("DOMContentLoaded", function () {
    startTimer();
});

/** Get the "Try Again" button element */
const tryAgainButton = document.getElementById("tryAgainBtn");

/** Add click event listener to the "Try Again" button */
tryAgainButton.addEventListener("click", function () {
    /** Call the resetQuiz function when the "Try Again" button is clicked */
    resetQuiz();
});


