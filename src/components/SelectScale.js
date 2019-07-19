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

        this.props.onChange(value);
    };
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onItemsChange(this.state.scale);
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
            {/*    <button className="buttons" type="submit">Generate</button>*/}
            </form>
        );
    }
}