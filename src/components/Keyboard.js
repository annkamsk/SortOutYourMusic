import React from 'react';
import ReactDOM from 'react-dom';
import List from '../components/List';
import '../index.scss';

export default class Keyboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: props.data,
            algo: props.algo,
            scale: props.scale,
        };
    }

    render() {
        return (
            <div>
                <header>
                    <div className="buttons">
                        <button className="data-toggle" onClick={this.mixItUp}>Mix it up!</button>
                    </div>
                    <div className="selections">
                        <select className="selectAlgo"/>
                    </div>
                    <div className="buttons">
                        <button className="data-toggle" onClick={this.sort}>Sort!</button>
                    </div>
                </header>
                <div className="list-container">
                    <List items={this.state.data} ripItUp={this.ripItUp}/>
                </div>
            </div>
        )
    }

    generate = () => {

    };
    mixItUp = () => {
        const array = this.state.data;
        let currentIndex = array.length, temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        this.setState({data: array});
    };
    sort = () => {

    };
}
