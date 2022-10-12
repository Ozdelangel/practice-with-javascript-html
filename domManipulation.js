

const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionContainer = document.getElementById('question-container');
const questionDeclaration = document.getElementById('question');
const answerButtons = document.getElementById('answer-btns');



let shuffledQuestions, currentQuestionIndex;


startButton.addEventListener('click', startGame);
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion();
})



function startGame() {
    console.log('clicked');
    startButton.classList.add('hide');
    questionContainer.classList.remove('hide');
    shuffledQuestions = questions.sort(() => Math.random() - .5);
    currentQuestionIndex = 0;
    setNextQuestion()

}


function setNextQuestion() {
resetState();
showQuestion(shuffledQuestions[currentQuestionIndex]);
}


function showQuestion(question){
    
    questionDeclaration.innerText = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct){
            button.dataset.correct = answer.correct   
        } 
        
            button.addEventListener('click', selectAnswer)
            answerButtons.appendChild(button)
        
    })

}

function resetState(){
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild)
    }
}

function selectAnswer(e){
const selectedButton = e.target
const correct = selectedButton.dataset.correct


setStatusClass(document.body,correct)
Array.from(answerButtons.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
})
if (shuffledQuestions.length > currentQuestionIndex + 1){

    nextButton.classList.remove('hide')
} else {
    
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
    
    
}

}

function setStatusClass(element,correct){
    clearStatusClass(element)
    if (correct){  
        element.classList.add('correct')
    }else {  
        element.classList.add('wrong')
    }
        
    
    
}

function clearStatusClass(element){
    element.classList.remove('correct')
    element.classList.remove('wrong')
}


    


// we need to build our questions with objects and arrays
const questions = [
    {
        question: 'What city was Olive born in?',
        answers: [
            {text:'Damascus', correct: false},
            {text:'Vancouver', correct: false},
            {text: 'Portland', correct: true},
            {text:'Drooly lane', correct: false},
        ]
    },
    {
        question: 'Is Olive a docile baby?',
        answers: [
            {text:'YES', correct: false},
            {text: 'No', correct: true}
        ]
    },
    {
        question: 'what is Olives favorite Movie?',
        answers: [
            {text:'Titanic', correct: false},
            {text:'The Sandlot', correct: false},
            {text:'Monster Inc.', correct: true},
            {text: 'The Little Mermaid', correct: false}
        ]
    },
    {
        question: 'What city did Kylie and her husband meet?',
        answers: [
            {text: 'Vancouver', correct: false},
            {text:'Boring', correct: false},
            {text:'Camas', correct: false},
            {text:'Portland', correct: true}
        ]
    },
    {
        question: 'Is Bancroft kylies middle name?',
        answers: [
            {text: 'False', correct: true},
            {text:'True', correct: false}
        ]
    },
    {
        question: 'did Kylie and her husband meet when they were in highschool?',
        answers: [
            {text:'YES', correct: false},
            {text: 'NO', correct: true}
        ]
    }

]





// how you start any project is just remember the workflow.
// we need to start game
// get next question
// select answer

//new terms to put into my readme
// innertext
// classlist
