import React from 'react';
import List from '../components/List';
import '../index.scss';
import SelectScale from "./SelectScale";
import SelectAlgo from "./SelectAlgo";
import {Scales, Data, Octaves, Notes} from "./Config";
import {Algorithm} from "./Algorithm";
import Sounds from "./Sound";

export default class Keyboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: Data,
            algo: '',
            scale: 'Major',
        };
    }

    render() {
        return (
            <div>
                <header>
                    <div className="selections">
                        <SelectScale
                            onChange={this.handleScaleChange}/>
                    </div>
                    <div className="buttons">
                        <button className="data-toggle"
                                onClick={this.generate}>Generate
                        </button>
                    </div>
                    <div className="selections">
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
        this.setState({scale: value});
    };

    handleAlgorithmChange = (value) => {
        this.sort(value);
    };

    generate = () => {
        this.setState(state => {
            let scale = Scales.get(state.scale);
            const data = scale.map(n => {
                return [...Array(Octaves.length).keys()]
                    .map(v => n + Notes.length * v) // produces the same sound for each octave
            }).flat()
                .sort(() => 0.5 - Math.random()) // shuffle
                .slice(0, Data.length);
            return {
                data,
            };
        });
    };

    sort = (algoName) => {
        const algo = new Algorithm(algoName);
        algo.init(this.state.data);
        this.sortOne(algo);
    };

    sortOne = (algo) => {
        if (!algo.isNext()) return;
        const items = algo.nextStep(this.state.data);
        this.setState({data: items, algo: algo.strategy},
            () => setTimeout(() => {
                this.sortOne(algo);
            }, 500));
    }
}
