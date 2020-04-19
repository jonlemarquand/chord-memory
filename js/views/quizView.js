import {
    elements
} from './base.js';

export const quizQuestion = question => {
    elements.chordQuestion.textContent = question;
    elements.waitText.classList.toggle('hide');
}

export const quizAnswer = answer => {
    elements.chordAnswer.textContent = answer;
    elements.waitText.classList.toggle('hide');
    elements.countdown.classList.toggle('hide');
    elements.rightWrong.classList.toggle('hide');
}

export const onceAnswered = (scoreRight, scoreWrong) => {
    elements.chordAnswer.textContent = "";
    elements.countdown.textContent = "";
    elements.countdown.classList.toggle('hide');
    elements.rightWrong.classList.toggle('hide');
    elements.rightScore.textContent = scoreRight;
    elements.wrongScore.textContent = scoreWrong;
}