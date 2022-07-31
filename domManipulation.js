// first we need to start the game by using dom manipulation to grab the id

const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionContainer = document.getElementById('question-container');
const questionDeclaration = document.getElementById('question');
const answerButtons = document.getElementById('answer-btns');

let shuffledQuestions, currentQuestionIndex;
// then we are going to add an event when the button is clicked

startButton.addEventListener('click', startGame);
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion();
})

// this is how we start the game with a function

// grab the question container

//we also want to be able to get all different questions in a shuffled way so we need constant variables to do that

// you need to have a shuffled question and the current index


// we need to grab our question and our questions and our answer buttons

function startGame() {
    console.log('clicked');
    startButton.classList.add('hide');
    questionContainer.classList.remove('hide');
    shuffledQuestions = questions.sort(() => Math.random() - .5);
    currentQuestionIndex = 0;
    //we need to make a callback to the set next question function to get the next questions
    setNextQuestion()

}

// this function will get the next question
function setNextQuestion() {
resetState();
// we need to tell our program to show question at the current question index
showQuestion(shuffledQuestions[currentQuestionIndex]);
}

// this function will show the question
// add the question
// loop through our answers and create buttons
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
        answerButtons.removeChild
        (answerButtons.firstChild)
    }
}

function selectAnswer(e){
const selectedButton = e.target
const correct = selectedButton.correct
setStatusClass(document.body, correct)
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

function setStatusClass(element, correct){
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
            {text: '4', correct: true},
            {text:'22', correct:false}
        ]
    },
    {
        question: 'what is 6 + 6?',
        answers: [
            {text: '12', correct: true},
            {text:'22', correct:false}
        ]
    },
    {
        question: 'what is 5 + 4?',
        answers: [
            {text: '9', correct: true},
            {text:'22', correct:false}
        ]
    },
    {
        question: 'what is 7 + 7?',
        answers: [
            {text: '14', correct: true},
            {text:'22', correct:false}
        ]
    },
    {
        question: 'what is 10 + 10?',
        answers: [
            {text: '20', correct: true},
            {text:'22', correct:false}
        ]
    },
    {
        question: 'what is 7 * 3?',
        answers: [
            {text: '21', correct: true},
            {text:'22', correct:false}
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
