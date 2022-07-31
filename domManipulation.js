// first we need to start the game by using dom manipulation to grab the id

const startButton = document.getElementById('start-btn');

// then we are going to add an event when the button is clicked

startButton.addEventListener('click', startGame);

// this is how we start the game with a function

// grab the question container
const questionContainer = document.getElementById('question-container');

function startGame() {
    console.log('clicked');
    startButton.classList.add('hide');
    questionContainer.classList.remove('hide');
    //we need to make a callback to the set next question function to get the next questions
    setNextQuestion()

}

// this function will get the next question
function setNextQuestion() {

}

// we need to build our questions with objects and arrays
const questions = [
    

]



// how you start any project is just remember the workflow.
// we need to start game
// get next question
// select answer

