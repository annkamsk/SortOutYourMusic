import React from 'react';
import '../index.scss';
import {Data, Octaves, Notes} from './Config';

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
        const octave = Octaves[Math.floor(sound / Notes.length)].octave;
        const note = Notes[sound % Notes.length].note;
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
    static data = [...Notes.keys()].map(n => {
        return [...Array(Octaves.length).keys()]
            .map(v => n + Notes.length * v) // produces the same sound for each octave
    }).flat();

    static sounds = new Map(this.data.map(s => [s, new Sound({sound: s})]));
}
