import React from 'react';
import '../index.scss';
import Sound from '../components/Sound';

export default class Key extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.index,
            height: props.sound * 10 + 100,
        };
    }
    play  = () => {
        const sound = new Sound({ sound: this.props.sound, });
        sound.play();
    };
    render() {
        const x = this.props.sound * 100;
        const ctrans = 'translate('+x+'%, 0)';
        // TODO nope - changes only height, not position, position needs to be changed
        // maybe make separate functions for generate and sort render?
        const height = this.props.sound * 10 + 100;
        const styles = {
            transform: ctrans,
            // height: height,
            left: x,
            height: this.state.height,
        };
        this.play();
        return (
            <li style={styles}>
            </li>
        );
    }
}