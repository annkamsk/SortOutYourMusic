import React from 'react';
import ReactDOM from 'react-dom';
import '../index.scss';

const Algos = [ { id: 0, name: 'Bubble' }, { id: 1, name: 'Selection'} ];
const Scales = [ { id: 0, name: 'Major' }, ];

export default class Select extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: props.items,
            algo: 'Bubble',
            scale: 'Major',
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
        this.props.handleSubmit();
        event.preventDefault();
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Scale
                    <select className="selections" value={this.state.scale} name="scale" onChange={this.handleInputChange}>
                        {Scales.map(s =>
                            <option key={s.id} value={s.id}>{s.name}</option>
                        )}
                    </select>
                </label>
                <label>
                    Algorithm
                    <select className="selections" value={this.state.algo} name="algo" onChange={this.handleInputChange}>
                        {Algos.map(a =>
                            <option key={a.id} value={a.id}>{a.name}</option>
                        )}
                    </select>
                </label>
                <button className="buttons" type="submit">Generate</button>
            </form>
        );
    }
}