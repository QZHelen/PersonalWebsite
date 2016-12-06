import { Button } from 'react-bootstrap';
import React from 'react';

class NavItem extends React.Component {
    render () {
        return (
        <Button bsStyle="success" bsSize={this.props.size}>{this.props.topic}</Button>
        );
    }
}

export default NavItem;