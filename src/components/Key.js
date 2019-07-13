import React from 'react';
import ReactDOM from 'react-dom';
import '../index.scss';
import Sound from '../components/Sound';

export default class Key extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.index,
            height: props.sound * 10 + 100,
        };
        // this.sound = new Sound({ sound: props.sound, });
    }
    play  = () => {
      // this.sound.play();
    };
    render() {
        const x = this.props.index * 100;
        const ctrans = 'translate('+x+'%, 0)';
        const height = this.props.sound * 10 + 100;
        const styles = {
            transform: ctrans,
            height: height
        };
        return (
            <li style={styles}></li>
        );
    }
}