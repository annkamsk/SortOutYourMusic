import React from 'react';
import '../index.scss';
import {Algos} from './Config';

export default class SelectAlgo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            algo: 'Bubble',
        };
        console.log(this.props.items);
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
        event.preventDefault();
        this.props.onItemsChange(this.state.algo);
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