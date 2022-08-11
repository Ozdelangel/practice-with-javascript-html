

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
        question: 'what is 2 + 2?',
        answers: [
            {text:'22', correct: false},
            {text: '4', correct: true}
        ]
    },
    {
        question: 'what is 6 + 6?',
        answers: [
            {text:'22', correct: false},
            {text: '12', correct: true}
        ]
    },
    {
        question: 'what is 5 + 4?',
        answers: [
            {text:'22', correct: false},
            {text: '9', correct: true}
        ]
    },
    {
        question: 'what is 7 + 7?',
        answers: [
            {text: '14', correct: true},
            {text:'22', correct: false}
        ]
    },
    {
        question: 'what is 10 + 10?',
        answers: [
            {text: '20', correct: true},
            {text:'22', correct: false}
        ]
    },
    {
        question: 'what is 7 * 3?',
        answers: [
            {text:'22', correct: false},
            {text: '21', correct: true}
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
