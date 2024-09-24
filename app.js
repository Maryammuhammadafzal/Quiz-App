var questions = [
    {
        question: 'Inside which HTML element do we put the JavaScript?',
        option1: 'scprit',
        option2: 'javascrip',
        option3: 'js',

        correctOption: 'script',
    },
    {
        question: 'Where is the correct place to insert a JavaScript?',
        option1: 'The <head> section',
        option2: 'The <body> section',
        option3: 'Both the <head> and "body" section are correct',

        correctOption: 'The <body> section',
    },
    {
        question: 'What is the correct syntax for referring to an external script called "xxx.js"?',
        option1: 'scripr href="xxx.js"',
        option2: 'scripr name="xxx.js"',
        option3: 'scripr src="xxx.js"',
        correctOption: 'scripr src="xxx.js"',
    }]

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

    // option.addEventListener('click' , function(){

    //     nextBtn.disabled = false;
    // })



//     index++;
// }

// showQuestion();


// option.addEventListener('click' , function(){

    //     nextBtn.disabled = false;
    // })

    // for(var i = 0; i < option.length; i++){
    //     // option[i].addEventListener('click', function(){
    //     //     option[i].setAttribute("checked" , "checked") 
    //     // })
    //     if(option[i].checked){

    //         console.log(option[i].textContent);
    //     }
    //     console.log(option[i]);
    // }

    // for(var i = 0; i < option.length; i++){
    //     // option[i].addEventListener('click', function(){
    //     //     option[i].setAttribute("checked" , "checked") 
    //     // })
    //     if(option[i].checked){

    //         console.log(option[i].textContent);
    //     }
    //     console.log(option[i].setAttribute("checked" , "checked"));
    //     const input = document.querySelector("input");

// input.setAttribute("checked", "checked");
// if (input.setAttribute("checked", "checked")) {
//   input.value
// }
    // }

// // Let's Do this

// var quizbox = document.getElementById('quiz');
// var optionsbox = document.getElementById('options');
// var option = document.getElementsByName('option');
// var nextBtn = document.getElementById('next-btn')
// var index = 0;
// var score = 0;

// console.log(questions[0].question);

// function showQuestion(){
//   quizbox.innerHTML = `<p>${questions[index].question}</p>`
//   optionsbox.innerHTML = `
//                    `;

//                    for(var i=0; i<option.length; i++){
//                       option[i].addEventListener('click' , function(){

//                         var input =  option[i]//document.getElementById('option');          
//                           input.setAttribute("checked" , "checked");

//                         if(input.hasAttribute("checked")){
//                           nextBtn.disabled = false;
//                           console.log(questions[0].correctOption);
//                           console.log(input.value);
//                           console.log(input);



                        //   if(input.value == questions[0].correctOption){
                        //        score++;
                        //        console.log();

                        //   } else{
                        //       score = score;
                        //     }

//                         }

//     })
//     break;
//   }


//   index++;

//   if(index == 2){
//     nextBtn.addEventListener('click' , function(){

//     })
//   }
// }

// showQuestion();









////////////////////////////////////////////////

// Sample Questions Array
// const questions = [
//     {
//       question: "What does HTML stand for?",
//       options: ["Hyper Text Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language", "Hyper Tool Multi Language"],
//       correctAnswer: 0 // Index of the correct answer in the options array
//     },
//     {
//       question: "What does CSS stand for?",
//       options: ["Cascading Style Sheets", "Creative Style Sheets", "Computer Style Sheets", "Colorful Style Sheets"],
//       correctAnswer: 0
//     },
//     {
//       question: "Which JavaScript framework is used for building user interfaces?",
//       options: ["React", "Django", "Flask", "Laravel"],
//       correctAnswer: 0
//     }
//   ];

//   // Variables to track quiz state
//   let currentQuestionIndex = 0;
//   let score = 0;

//   // Function to load the current question
//   function loadQuestion() {
//     var questionElement = document.getElementById("question");
//     var optionsElement = document.getElementById("options");

//     // Clear existing options
//     optionsElement.innerHTML = "";

//     // Load the current question
//     var currentQuestion = questions[currentQuestionIndex];
//     questionElement.textContent = currentQuestion.question;

//     // Load options
//     currentQuestion.options.forEach((option, index) => {
//       const optionButton = document.createElement("button");
//       optionButton.textContent = option;
//       optionButton.classList.add("option");
//       optionButton.onclick = () => checkAnswer(index);
//       optionsElement.appendChild(optionButton);
//     });
//   }

//   // Function to check the user's answer
//   function checkAnswer(selectedOption) {
//     const currentQuestion = questions[currentQuestionIndex];

//     if (selectedOption === currentQuestion.correctAnswer) {
//       score++;
//       alert("Correct!");
//     } else {
//       alert("Incorrect!");
//     }

//     // Move to the next question or end the quiz
//     currentQuestionIndex++;

//     if (currentQuestionIndex < questions.length) {
//       loadQuestion();
//     } else {
//       showResults();
//     }
//   }

//   // Function to display the final score
//   function showResults() {
//     var quizContainer = document.getElementById("quiz-container");
//     quizContainer.innerHTML = `
//       <h2>Quiz Completed</h2>
//       <p>Your score: ${score} out of ${questions.length}</p>
//       <button onclick="restartQuiz()">Restart Quiz</button>
//     `;
//   }

//   // Function to restart the quiz
//   function restartQuiz() {
//     currentQuestionIndex = 0;
//     score = 0;
//     loadQuestion();
//   }

//   // Initialize the quiz
//   loadQuestion();




////////////////////////////////////////////////////////////teacher 

var questions = [
  {
    question: 'Inside which HTML element do we put the JavaScript?',
    option1: 'script',
    option2: 'javascrip',
    option3: 'js',

    correctOption: 'script',
  },
  {
    question: 'Where is the correct place to insert a JavaScript?',
    option1: 'The head section',
    option2: 'The body section',
    option3: 'Both the head and "body" section are correct',
    correctOption: 'The body section',
  },
  {
    question: 'What is the correct syntax for referring to an external script called "xxx.js"?',
    option1: 'scripr href=xxx.js',
    option2: 'scripr name=xxx.js',
    option3: 'scripr src=xxx.js',
    correctOption: 'scripr src=xxx.js',
  }]

var container = document.querySelector('.container');
var start_btn = document.querySelector('.start-btn');
var question_box = document.querySelector('.question-box');
var quiz_box = document.querySelector('.question-answer');
var quiz = document.querySelector('.quiz');
var options = document.querySelector('.options');
var question_no = document.querySelector('.quiz-no');
var next_btn = document.querySelector('.next');
var prev_btn = document.querySelector('.prev');
var input = document.getElementsByName('option');
var labels = document.getElementsByTagName('label')


var index = 0;
var score = 0;

//Start The Quiz
function quizStart(){
    question_no.textContent = `Question ${index+1}`;
    show_Question();
    show_Options(); 
    next_btn.classList.add('display');
    prev_btn.classList.add('display');
}
quizStart();

//Select Option
function select_option(){
  for(var i = 0; i < labels.length; i++){
labels[i] && labels[i].addEventListener('click',function(){
    next_btn.classList.remove('display');
    prev_btn.classList.remove('display');
    for(var i = 0; i < input.length; i++){
      if(input[i].checked){
        if(input[i].value == questions[index].correctOption){
          // change_question();
          score++;
        } 
      }
      break;
    }
  })

}

  // console.log(labels);
  
}

select_option();

//Change Questions
function change_question(){
 next_btn && next_btn.addEventListener('click' , function(){
    index++;
  })
}
change_question()





// Show Quiz Question
function show_Question(){
  quiz.innerHTML = `<p>${questions[index].question}</p>` ;
}



//Show Quiz Options
function show_Options(){
  options.innerHTML = `<label>
                             <input type="radio" class="option" name="option" value="${questions[index].option1}" >
                             ${questions[index].option1}
                           </label>
                           <br>

                           <label>
                             <input type="radio" class="option" name="option" value="${questions[index].option2}" >
                             ${questions[index].option2}
                           </label>
                           <br>

                           <label>
                             <input type="radio" class="option" name="option" value="${questions[index].option3}" >
                             ${questions[index].option3}
                           </label>`;
}



//  console.log( question_no.textContent = `Question ${index+1}`);















// nextBtn.setAttribute("class" , "display");
// prevBtn.setAttribute("class" , "display");

// function showQuestion() {
//   if (!questions[index]) {
//             questionBox.innerHTML = `quiz completed ${score}`
//             nextBtn.style.display = "none"
//   }else{

//   questionNo.children.textContent = `Question ${index + 1}`;
//   questionBox.innerHTML = `<p>${questions[index].question}</p>`;
//   optionBox.innerHTML = `<label>
//                             <input type="radio"   name="option" value="${questions[index].option1}" >
//                             ${questions[index].option1}
//                           </label>
//                           <br>

//                           <label>
//                             <input type="radio" name="option" value="${questions[index].option2}" >
//                             ${questions[index].option2}
//                           </label>
//                           <br>

//                           <label>
//                             <input type="radio" name="option" value="${questions[index].option3}" >
//                             ${questions[index].option3}
//                           </label>`;
//   }
  
//   selectedOption();        

// }
// showQuestion();

// function selectedOption(){

  
//   for(var i = 0; i < options.length; i++){
//     options[i].addEventListener('click' , function(){
//       nextBtn.setAttribute('class' , 'next');
//       prevBtn.setAttribute('class' , 'prev');
//     })
//     if(options[i].checked){
//       if (options[i].value === questions[index].correctOption) {
//             score++
//             console.log(score);
        
//       }
      
//     }
//   }
  
  
// }

// ////////////////////////////////////////////////////////////////////////////

// function nextQuestion() {
 

//   if (index < 2) {
//     index++;
//     // showQuestion();
//     // console.log(index);
//   } else if (index === 2) {
//     nextBtn.textContent = 'Submit'
//     nextBtn.addEventListener('click', function () {
      
//             questionBox.innerHTML = `<h2>Your Score </h2>
//                    <h1> ${score}</h1>
//                    <button onClick="restart()" id="restart-btn">Restart </button>`
//       nextBtn.style.display = 'none';
//       prevBtn.style.display = 'none';


//     })
//   }


// }

// function restart() {
//   index = 0;
//   showQuestion()
// }




// var index = 0
// var score = 0
// var nextBtn = document.getElementById("Next")
// var questionBox = document.getElementById("questionBox")
// var options = document.getElementsByName("option")


// var firstObj = questions[index]
// questionBox.innerHTML = `<p>${questions[index].question}</p>


// <label>
//     <input type="radio"   name="option" value="${questions[index].option1}" >
//     ${questions[index].option1}
// </label>
// <br>
// <label>
//     <input type="radio" name="option" value="${questions[index].option2}" >
//           ${questions[index].option2}
// </label>
// <br>
// <label>
//     <input type="radio" name="option" value="${questions[index].option3}" >
//      ${questions[index].option3}
// </label>`

// selectingOptions()


// function showQuestions() {



//     nextBtn.disabled = true
//     index++;

//    // else {
//         questionBox.innerHTML = `<p>${questions[index].question}</p>


//         <label>
//             <input type="radio"   name="option" value="${questions[index].option1}" >
//             ${questions[index].option1}
//         </label>
//         <br>
//         <label>
//             <input type="radio" name="option" value="${questions[index].option2}" >
//                   ${questions[index].option2}
//         </label>
//         <br>
//         <label>
//             <input type="radio" name="option" value="${questions[index].option3}" >
//              ${questions[index].option3}
//         </label>

// `



//         // enabling next Btn

//         selectingOptions()

//     }
// //}



// function next() {
//     for (var i = 0; i < options.length; i++) {
//         if (options[i].checked) {
//             if (options[i].value === questions[index].correctOption) {
//                 score++
//                 console.log(score);

//             }

//         }

//     }

//     showQuestions();

// }


// function selectingOptions() {
//     for (var i = 0; i < options.length; i++) {



//         options[i].addEventListener("click", function () {
//             nextBtn.disabled = false
//         })

//     }
// }