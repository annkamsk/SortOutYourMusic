import React from 'react';
import List from '../components/List';
import '../index.scss';
import SelectScale from "./SelectScale";
import SelectAlgo from "./SelectAlgo";

export default class Keyboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            keys: 20,
            data: props.data,
        };
    }

    render() {
        return (
            <div>
                <header>
                    <div className="buttons">
                        <button className="data-toggle"
                                onClick={this.mixItUp}>Mix it up!</button>
                    </div>
                    <div className="selections">
                        <SelectScale
                            keys={this.state.keys}
                            onItemsChange={this.handleItemsChange}/>
                        <SelectAlgo
                            keys={this.state.keys}
                            onItemsChange={this.handleItemsChange}/>
                    </div>
                </header>
                <div className="list-container">
                    <List
                        items={this.state.data}/>
                </div>
            </div>
        )
    }

    handleItemsChange = (items) => {
        this.setState({keys: this.state.keys, data: items});
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

        this.setState({keys: this.state.keys, data: array});
    };
}
