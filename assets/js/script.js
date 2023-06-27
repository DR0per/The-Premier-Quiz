/**  JavaScript code for quiz functionality **/
const submitButton = document.getElementById("submitBtn");
const quizSection = document.getElementById("quiz");
const resultsSection = document.getElementById("results");
const scoreElement = document.getElementById("score");

submitButton.addEventListener("click", showResults);

function randomizeQuestions() {
    // Get all the question elements
    var questions = document.getElementsByClassName('question');
  
    // Convert the HTMLCollection to an array for easier manipulation
    var questionsArray = Array.from(questions);
  
    // Shuffle the array using Fisher-Yates algorithm
    for (var i = questionsArray.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = questionsArray[i];
      questionsArray[i] = questionsArray[j];
      questionsArray[j] = temp;
    }
  
    // Append the shuffled questions back to the parent element
    var parentElement = questions[0].parentNode;
    parentElement.innerHTML = '';
    questionsArray.forEach(function(question) {
      parentElement.appendChild(question);
    });
  
    // Add event listeners to the radio buttons
    var radioButtons = document.querySelectorAll('input[type="radio"]');
    radioButtons.forEach(function(radioButton) {
      radioButton.addEventListener('change', function() {
        // Check if the selected answer is correct
        if (this.checked && this.getAttribute('data-correct-answer') === this.value) {
          console.log('Correct!');
        } else {
          console.log('Incorrect!');
        }
      });
    });
  }
  
  // Call the function to randomize the questions
  randomizeQuestions();

function showResults() {
    const questions = document.getElementsByClassName("question");
    let score = 0;

    for (let i = 0; i < questions.length; i++) {
        const question = questions[i];
        const selectedOption = question.querySelector('input[type="radio"]:checked');

        if (selectedOption !== null) {
            const selectedValue = selectedOption.value;
            const correctAnswer = getCorrectAnswer(i + 1); // Add 1 to the index to match the question number

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
    let quizQuestions = [
      {
        text: "Question: Who won the FIFA World Cup 2018?",
        options: ["France", "Brazil", "Germany"],
        correctAnswer: "France"
      },
      {
        text: "Question: Which player has won the most Ballon d'Or awards?",
        options: ["Lionel Messi", "Cristiano Ronaldo", "Pele"],
        correctAnswer: "Lionel Messi"
      },
      {
        text: "Question: Which country has won the most FIFA World Cup titles?",
        options: ["Brazil", "Germany", "Italy"],
        correctAnswer: "Brazil"
      },
      {
        text: "Who is the all-time leading goal scorer in international matches?",
        options: ["Christiano Ronaldo", "Pele", "Marta"],
        correctAnswer: "Christiano Ronaldo"
      },
      {
        text: "Which country won the UEFA Euro 2020 tournament?",
        options: ["Italy", "England", "France"],
        correctAnswer: "Italy"
      },
      {
        text: "Question: Which team has won the most Premier League titles?",
        options: ["Manchester United", "Liverpool", "Chelsea", "Arsenal"],
        correctAnswer: "Manchester United"
      },
      {
        text: "Question: Who is the all-time leading goalscorer in the Premier League?",
        options: ["Alan Shearer", "Thierry Henry", "Wayne Rooney", "Sergio Aguero"],
        correctAnswer: "Alan Shearer"
      },
      {
        text: "Question: Which team holds the record for the most points in a single Premier League season?",
        options: ["Manchester United", "Manchester City", "Chelsea", "Liverpool"],
        correctAnswer: "Manchester City"
      },
      {
        text: "Question: Who is the youngest player to score a Premier League hat-trick?",
        options: ["Michael Owen", "Wayne Rooney", "Robbie Fowler", "Francis Jeffers"],
        correctAnswer: "Wayne Rooney"
      },
      {
        text: "Question: Which club won the first-ever Premier League season in 1992-1993?",
        options: ["Manchester United", "Arsenal", "Blackburn Rovers", "Liverpool"],
        correctAnswer: "Manchester United"
      },
      {
        text: "Question: Who is the current manager of Manchester United?<",
        options: ["Jurgen Klopp", "Erik ten Hag", "Roy Keane", "Sir Alex Ferguson"],
        correctAnswer: "Erik ten Hag"
      },
      {
        text: "Question: Who is the current manager of Manchester City?",
        options: ["Erik ten Hag", "Mikel Arteta", "Jurgen Klopp", "Pep Guardiola"],
        correctAnswer: "Pep Guardiola"
      },
      {
        text: "Question: Which team did Lionel Messi join after leaving Barcelona?",
        options: ["Manchester United", "Real Madrid", "PSG", "Liverpool"],
        correctAnswer: "PSG"
      },
      {
        text: "Question: Which club did Christiano Ronaldo join after leaving Real Madrid?",
        options: ["Manchester United", "Arsenal", "Juventus", "Bayern Munich"],
        correctAnswer: "Juventus"
      },
      {
        text: "Question: Roman Abramovich purchased Chelsea Football Club in which year?",
        options: ["2000", "2001", "2002", "2003"],
        correctAnswer: "2003"
      },
      {
        text: "Question: Manchester United won the Treble in which year?",
        options: ["1998", "1999", "2000", "2001"],
        correctAnswer: "1999"
      },
      {
        text: "Question: In what season did Arsenal become known as 'The Invincibles'?",
        options: ["03-04", "98-99", "02-03", "04-05"],
        correctAnswer: "03-04"
      },
      {
        text: "Question: Which English club won the treble in the 22/23 season?",
        options: ["Manchester United", "Arsenal", "PManchester City", "Liverpool"],
        correctAnswer: "Manchester City"
      },
      {
        text: "Question: Which player has the most assists in the Premier League?",
        options: ["Wayne Rooney", "Kevin De Bruyne", "Cesc Fabregas", "Ryan Giggs"],
        correctAnswer: "Ryan Giggs"
      },
      {
        text: "Question: Which player has the most own goals scored in the Premier League?",
        options: ["Gary Neville", "Jamie Carragher", "Richard Dunne", "John Terry"],
        correctAnswer: "Richard Dunne"
      },
    ];
  
    const question = quizQuestions[questionIndex];
    return question ? question.correctAnswer : null;
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


