import quiz from './js/models/Quiz.js';
import * as quizView from './js/views/quizView.js';
import * as timeView from './js/views/timeView.js';

const state = {};

// Select a random chord

state.question = quiz.name;
quizView.quizQuestion(state.question);

// Display 5 second countdown
let count = 11;

const timer = () => {
    count = count - 1;
    if (count <= 0) {
        clearInterval(counter);
        return quizView.quizAnswer(state.answer);
    }
    timeView.countingTimer(count);
}

const counter = setInterval(timer, 1000);

// Display the chord notes + right or wrong buttons
state.answer = quiz.chord;

// IF Right Pressed add score to right
// IF Wrong pressed add score to wrong
// Reset