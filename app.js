// var questions = [
//     {
//         question: 'Inside which HTML element do we put the JavaScript?',
//         option1: 'scprit',
//         option2: 'javascrip',
//         option3: 'js',

//         correctOption: 'script',
//     },
//     {
//         question: 'Where is the correct place to insert a JavaScript?',
//         option1: 'The <head> section',
//         option2: 'The <body> section',
//         option3: 'Both the <head> and "body" section are correct',
//         correctOption: 'The <body> section',
//     },
//     {
//         question: 'What is the correct syntax for referring to an external script called "xxx.js"?',
//         option1: 'scripr href="xxx.js"',
//         option2: 'scripr name="xxx.js"',
//         option3: 'scripr src="xxx.js"',
//         correctOption: 'scripr src="xxx.js"',
//     }]

// var questionBox = document.getElementById('question-box');
// var nextBtn = document.getElementById('next-btn');
// var option = document.getElementsByName('option') ;
// var index = 0;


// function showQuestion(){
//     questionBox.innerHTML = `<p>${questions[index].question}</p>

//     <label>
//         <input type="radio" name="option" value="" >
//         ${questions[index].option1}
//     </label>
//     <br>
//     <label>
//         <input type="radio" name="option" value="" >
//         ${questions[index].option2}
//     </label>
//     <br>
//     <label>
//         <input type="radio" name="option" value="" >
//         ${questions[index].option3}
//     </label>
//     <br>

//     <br>
//     <br>`

//     // option.addEventListener('click' , function(){
    
//     //     nextBtn.disabled = false;
//     // })


   
//     index++;
// }

// showQuestion();


// // option.addEventListener('click' , function(){
    
//     //     nextBtn.disabled = false;
//     // })

//     // for(var i = 0; i < option.length; i++){
//     //     // option[i].addEventListener('click', function(){
//     //     //     option[i].setAttribute("checked" , "checked") 
//     //     // })
//     //     if(option[i].checked){
    
//     //         console.log(option[i].textContent);
//     //     }
//     //     console.log(option[i]);
//     // }

//     for(var i = 0; i < option.length; i++){
//         // option[i].addEventListener('click', function(){
//         //     option[i].setAttribute("checked" , "checked") 
//         // })
//         if(option[i].checked){
    
//             console.log(option[i].textContent);
//         }
//         console.log(option[i].setAttribute("checked" , "checked"));
//         const input = document.querySelector("input");

// // input.setAttribute("checked", "checked");
// // if (input.setAttribute("checked", "checked")) {
// //   input.value
// // }
//     }


// Sample Questions Array
const questions = [
    {
      question: "What does HTML stand for?",
      options: ["Hyper Text Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language", "Hyper Tool Multi Language"],
      correctAnswer: 0 // Index of the correct answer in the options array
    },
    {
      question: "What does CSS stand for?",
      options: ["Cascading Style Sheets", "Creative Style Sheets", "Computer Style Sheets", "Colorful Style Sheets"],
      correctAnswer: 0
    },
    {
      question: "Which JavaScript framework is used for building user interfaces?",
      options: ["React", "Django", "Flask", "Laravel"],
      correctAnswer: 0
    }
  ];
  
  // Variables to track quiz state
  let currentQuestionIndex = 0;
  let score = 0;
  
  // Function to load the current question
  function loadQuestion() {
    const questionElement = document.getElementById("question");
    const optionsElement = document.getElementById("options");
    
    // Clear existing options
    optionsElement.innerHTML = "";
  
    // Load the current question
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
  
    // Load options
    currentQuestion.options.forEach((option, index) => {
      const optionButton = document.createElement("button");
      optionButton.textContent = option;
      optionButton.classList.add("option");
      optionButton.onclick = () => checkAnswer(index);
      optionsElement.appendChild(optionButton);
    });
  }
  
  // Function to check the user's answer
  function checkAnswer(selectedOption) {
    const currentQuestion = questions[currentQuestionIndex];
  
    if (selectedOption === currentQuestion.correctAnswer) {
      score++;
      alert("Correct!");
    } else {
      alert("Incorrect!");
    }
  
    // Move to the next question or end the quiz
    currentQuestionIndex++;
  
    if (currentQuestionIndex < questions.length) {
      loadQuestion();
    } else {
      showResults();
    }
  }
  
  // Function to display the final score
  function showResults() {
    const quizContainer = document.getElementById("quiz-container");
    quizContainer.innerHTML = `
      <h2>Quiz Completed</h2>
      <p>Your score: ${score} out of ${questions.length}</p>
      <button onclick="restartQuiz()">Restart Quiz</button>
    `;
  }
  
  // Function to restart the quiz
  function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    loadQuestion();
  }
  
  // Initialize the quiz
  loadQuestion();
  