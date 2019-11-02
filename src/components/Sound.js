import React from 'react';
import '../index.scss';
import {Notes} from './Config';
const notes = [
    {id: 0, note: 'C'}, {id: 1, note: 'C#'}, {id: 2, note: 'D'}, {id: 3, note: 'D#'}, {id: 4, note: 'E'},
    {id: 5, note: 'F'}, {id: 6, note: 'F#'}, {id: 7, note: 'G'}, {id: 8, note: 'G#'}, {id: 9, note: 'A'},
    {id: 10, note: 'A#'}, {id: 11, note: 'B'},
];

const octaves = [
    {id: 0, octave: 3}, {id: 1, octave: 4}, {id: 2, octave: 5},
];

class Sound extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sound: props.sound,
        };
        this.audio = new Audio(this.getAudioName(props.sound));
    }

    getAudioName = (sound) => {
        const prefix = process.env.PUBLIC_URL + '/sounds/';
        const sufix = '.mp3';
        const octave = octaves[Math.floor(sound / notes.length)].octave;
        const note = notes[sound % notes.length].note;
        if (note.endsWith('#')) {
            return prefix + note.charAt(0).toLocaleLowerCase() + '-' + octave + sufix;
        } else {
            return prefix + '_' + note.charAt(0).toLocaleLowerCase() + octave + sufix;
        }
    };
    play = () => {
        return this.audio.play();
    };
}

export default class Sounds {
    static data = [...Notes];
    static sounds = new Map(this.data.map(s => [s, new Sound({sound: s})]));
}
