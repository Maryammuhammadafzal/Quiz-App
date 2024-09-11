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

var questionBox = document.getElementById('question-box');
var nextBtn = document.getElementById('next-btn');
var option = document.getElementsByName('option') ;
var index = 0;


function showQuestion(){
    questionBox.innerHTML = `<p>${questions[index].question}</p>

    <label>
        <input type="radio" name="option" value="" >
        ${questions[index].option1}
    </label>
    <br>
    <label>
        <input type="radio" name="option" value="" >
        ${questions[index].option2}
    </label>
    <br>
    <label>
        <input type="radio" name="option" value="" >
        ${questions[index].option3}
    </label>
    <br>

    <br>
    <br>`

    // option.addEventListener('click' , function(){
    
    //     nextBtn.disabled = false;
    // })


   
    index++;
}

showQuestion();


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

    for(var i = 0; i < option.length; i++){
        // option[i].addEventListener('click', function(){
        //     option[i].setAttribute("checked" , "checked") 
        // })
        if(option[i].checked){
    
            console.log(option[i].textContent);
        }
        console.log(option[i].setAttribute("checked" , "checked"));
        const input = document.querySelector("input");

// input.setAttribute("checked", "checked");
// if (input.setAttribute("checked", "checked")) {
//   input.value
// }
    }
