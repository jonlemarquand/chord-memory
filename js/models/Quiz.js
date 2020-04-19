import chords from '../chords.js';

export let chordNumber = () => {
    return Math.round(Math.random() * (chords.length - 1));
}