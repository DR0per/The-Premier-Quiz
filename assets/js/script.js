// Define the quiz questions
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
          options: ["Manchester United", "Arsenal", "Manchester City", "Liverpool"],
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
  
  // Global variables
  const quizSection = document.getElementById("quiz");
  const resultsSection = document.getElementById("results");
  const scoreElement = document.getElementById("score");
  const questionContainer = document.getElementById("questionContainer");
  const submitButton = document.getElementById("submitBtn");
  const tryAgainButton = document.getElementById("tryAgainBtn");
  let score = 0;
  let currentQuestionIndex = 0;
  
  // Function to generate the HTML for a single question
  function generateQuestionHTML(question, index) {
    const questionHTML = document.createElement("div");
    questionHTML.innerHTML = `
      <h2>${question.text}</h2>
      <ul>
        ${question.options
          .map(
            option => `
              <li>
                <label>
                  <input type="radio" name="question-${index}" value="${option}">
                  ${option}
                </label>
              </li>
            `
          )
          .join("")}
      </ul>
    `;
    return questionHTML;
  }
  
  // Function to display the current question in the HTML
  function displayCurrentQuestion() {
    questionContainer.innerHTML = "";
    const currentQuestion = quizQuestions[currentQuestionIndex];
    const questionHTML = generateQuestionHTML(currentQuestion, currentQuestionIndex);
    questionContainer.appendChild(questionHTML);
  }
  
  // Function to check the user's answer and update the score
  function checkAnswer() {
    const currentQuestion = quizQuestions[currentQuestionIndex];
    const selectedOption = document.querySelector(`input[name="question-${currentQuestionIndex}"]:checked`);
  
    if (selectedOption && selectedOption.value === currentQuestion.correctAnswer) {
      score++;
    }
  }
  
  // Function to display the quiz results
  function displayQuizResults() {
    quizSection.style.display = "none";
    resultsSection.style.display = "block";
    scoreElement.textContent = `Your score is ${score} out of ${quizQuestions.length}`;
  }
  
  // Function to handle the form submission
  function handleSubmit() {
    checkAnswer();
    currentQuestionIndex++;
  
    if (currentQuestionIndex < quizQuestions.length) {
      displayCurrentQuestion();
    } else {
      displayQuizResults();
    }
  }
  
  // Function to reset the quiz
  function resetQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    displayCurrentQuestion();
    quizSection.style.display = "block";
    resultsSection.style.display = "none";
  }
  
  // Event listener for the submit button
  submitButton.addEventListener("click", handleSubmit);
  
  // Event listener for the "Try Again" button
  tryAgainButton.addEventListener("click", resetQuiz);
  
  // Initialize the quiz
  displayCurrentQuestion();
  resultsSection.style.display = "none";

  
  
  