import React from 'react';
import ReactDOM from 'react-dom';
import Key from '../components/Key';
import '../index.scss';

export default class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: props.items,
        };
    }

    render() {
        return(
            <ul className="list">
                {this.state.items.map(this.handleItemRender)}
            </ul>
        )
    }
    handleItemRender = (item, index) => {
        return(
            <Key key={item.key} sound={item.sound} />
        );
    };

}