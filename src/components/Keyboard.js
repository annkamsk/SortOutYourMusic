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
                0, 15, 10, 4, 20, 21, 5, 3, 8
            ],
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
            const scale = Scales.get(state.scale);
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
        this.sortOne(algo);
    };

    sortOne = (algo) => {
        if (!algo.isNext()) return;
        const items = algo.nextStep(this.state.data);
        this.setState({data: items, algo: algo.strategy},
            () => setTimeout(() => {
                this.sortOne(algo);
            }, 1000));
    }
}
