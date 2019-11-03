import React from 'react';
import '../index.scss';
import {Notes} from './Config';

export default class SelectBase extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            base: 'C',
        };
    }

    handleInputChange = (event) => {
        const target = event.target;
        const value = target.value;

        this.props.onChange(value);
    };
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onItemsChange(this.props.base);
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Base
                    <select className="selections" value={this.props.base} name="base" onChange={this.handleInputChange}>
                        {Array.from(Notes.values()).map(s =>
                            <option key={s} value={s}>{s}</option>
                        )}
                    </select>
                </label>
                {/*    <button className="buttons" type="submit">Generate</button>*/}
            </form>
        );
    }
}