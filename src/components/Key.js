import React from 'react';
import '../index.scss';
import Sounds from '../components/Sound';

export default class Key extends React.Component {

    play = () => {
        const sound = Sounds.sounds.get(this.props.sound);
        sound.play();
    };

    render() {
        const x = this.props.position * 70 + 100;
        const ctrans = 'translate(' + x + '%)';
        const color = 'rgb(' + this.props.sound * 100 % 256 + ',' + this.props.sound * 20 % 256 + ',' + this.props.sound * 5 % 256 + ')';
        const styles = {
            transform: ctrans,
            height: this.props.sound * 10 + 100,
            backgroundColor: color
        };
        return (
            <li style={styles}></li>
        );
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.position !== prevProps.position) {
            this.play();
        }
    }
}