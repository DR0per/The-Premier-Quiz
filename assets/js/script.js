// JavaScript code for quiz functionality
const submitButton = document.getElementById('submitBtn');
const quizSection = document.getElementById('quiz');
const resultsSection = document.getElementById('results');
const scoreElement = document.getElementById('score');

submitButton.addEventListener('click', showResults);

function showResults() {
    const questions = document.getElementsByClassName('question');
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
    scoreElement.textContent = 'Your score: ' + score + '/' + questions.length;

    /**Hide the quiz section and show the results section **/
    quizSection.style.display = 'none';
    resultsSection.style.display = 'block';
}

function getCorrectAnswer(questionIndex) {
    const correctAnswers = [
        'France',             /** Correct answer for question 1 **/
        'Lionel Messi',       /** Correct answer for question 2 **/
        'Brazil',             /** Correct answer for question 3 **/
        'Cristiano Ronaldo',  /** Correct answer for question 4 **/ 
        'Italy',              /** Correct answer for question 5 **/ 
        'Manchester United',  /** Correct answer for question 6 **/ 
        'Alan Shearer',       /** Correct answer for question 7 **/ 
        'Manchester City',    /** Correct answer for question 8 **/ 
        'Wayne Rooney',       /** Correct answer for question 9 **/ 
        'Blackburn Rovers'    /** Correct answer for question 10 **/ 
        
    ];

    return correctAnswers[questionIndex];
}

document.getElementById("tryAgainBtn").addEventListener("click", resetQuiz);

        function resetQuiz() {
            // Clear selected answers
            var selectedAnswers = document.querySelectorAll('input[type="radio"]:checked');
            for (var i = 0; i < selectedAnswers.length; i++) {
                selectedAnswers[i].checked = false;
            }

            // Hide the results section
            resultsSection.style.display = "none";
            // Show the quiz section
            quizSection.style.display = "block";
        }
