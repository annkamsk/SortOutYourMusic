import React from 'react';
import '../index.scss';
import {Scales} from './Config';

export default class SelectScale extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            scale: 'Major'
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
        this.generate();
        event.preventDefault();
    };

    generate = () => {
        const scale = this.state.scale;
        console.log(scale);
        const array = [];
        for (let i = 0; i < this.props.keys; ++i) {
            const randomIdx = Math.floor(Math.random() * Scales.get(scale).length);
            array.push({ key: i  + 1, sound: Scales.get(scale)[randomIdx] });
        }
        this.props.onItemsChange(array);
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Scale
                    <select className="selections" value={this.state.scale} name="scale" onChange={this.handleInputChange}>
                        {Array.from(Scales.keys()).map(s =>
                            <option key={s} value={s}>{s}</option>
                        )}
                    </select>
                </label>
                <button className="buttons" type="submit">Generate</button>
            </form>
        );
    }
}