import React from 'react';
import '../index.scss';
import {Algos} from './Config';

export default class SelectAlgo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            algo: 'Bubble',
        };
    }

    handleInputChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    };
    handleSubmit = (event) => {
        this.sort();
        event.preventDefault();
    };

    sort = () => {
        const algo = this.state.algo;
        const array = [];
        for (let i = 0; i < this.props.keys; ++i) {

            this.props.onItemsChange(array);
        }
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Algorithm
                    <select className="selections" value={this.state.algo} name="algo" onChange={this.handleInputChange}>
                        {Algos.map(a =>
                            <option key={a.id} value={a.id}>{a.name}</option>
                        )}
                    </select>
                </label>
                <button className="buttons" type="submit">Sort</button>
            </form>
        );
    }
}