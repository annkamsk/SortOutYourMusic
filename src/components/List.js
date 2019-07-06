import React from 'react';
import Key from '../components/Key';
import '../index.scss';

export default class List extends React.Component {
    render() {
        return(
            <ul className="list">
                {this.props.items.map(this.handleItemRender)}
            </ul>
        )
    }
    handleItemRender = (item, index) => {
        return(
            <Key key={item.key} sound={item.sound} />
        );
    };

}