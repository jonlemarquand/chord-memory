import chords from '../js/chords.js';
import * as quizQuestions from './js/models/Quiz.js';
import * as quizView from './js/views/quizView.js';
import * as timeView from './js/views/timeView.js';
import {
    elements
} from './js/views/base.js';

const state = {};

const questionControl = () => {
    // Select a random chord
    const newNumber = quizQuestions.chordNumber();
    state.question = chords[newNumber].name;
    state.answer = chords[newNumber].chord;
    // Display Question

    quizView.quizQuestion(state.question);

    // Display 5 second countdown
    let count = 6;

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

}

elements.right.addEventListener('click', () => {
    quizView.onceAnswered();
    quizQuestions.chordNumber();
    questionControl()
});

elements.wrong.addEventListener('click', () => {
    quizView.onceAnswered();
    quizQuestions.chordNumber();
    questionControl()
});


window.addEventListener('load', () => {
    questionControl()
});