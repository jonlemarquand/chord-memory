import chords from '../chords.js';


let chordNumber = Math.round(Math.random() * (chords.length - 1));
let quiz = chords[chordNumber];
export default quiz;