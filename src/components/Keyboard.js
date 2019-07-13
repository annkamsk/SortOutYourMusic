import React from 'react';
import List from '../components/List';
import '../index.scss';
import SelectScale from "./SelectScale";
import SelectAlgo from "./SelectAlgo";
import {Scales} from "./Config";
import {Algorithm} from "./Algorithm";

export default class Keyboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                0, 15, 10, 4, 20
            ],
            algo: '',
            scale: 'Major',
        };
    }

    render() {
        return (
            <div>
                <header>
                    {/*<div className="buttons">*/}
                    {/*    <button className="data-toggle"*/}
                    {/*            onClick={this.mixItUp}>Mix it up!*/}
                    {/*    </button>*/}
                    {/*</div>*/}
                    <div className="buttons">
                        <button className="data-toggle"
                                onClick={this.generate}>Generate
                        </button>
                    </div>
                    <div className="selections">
                        <SelectScale
                            onChange={this.handleScaleChange}/>

                        <SelectAlgo
                            onItemsChange={this.handleAlgorithmChange}/>
                    </div>
                </header>
                <div className="list-container">
                    <List
                        items={this.state.data}/>
                </div>
            </div>
        )
    }

    handleScaleChange = (value) => {
        // this.setState({scale: value});
    };

    handleAlgorithmChange = (value) => {
        this.sort(value);
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


    generate = () => {
        this.setState(state => {
            const scale = Scales.get('Major');
            const data = new Array(state.data.length)
                .fill(0)
                .map(() => scale[Math.floor(scale.length * Math.random())]);
            return {
                data,
            };
        });
    };

    sort = (algoName) => {
        const algo = new Algorithm(algoName);
        algo.init(this.state.data);
        while (algo.isNext()) {
            const items = algo.nextStep(this.state.data);
            this.setState({data: items, algo: algoName});
        }
    };
}
