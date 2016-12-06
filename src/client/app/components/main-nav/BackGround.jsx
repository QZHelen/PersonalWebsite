import React from 'react';
import { Carousel } from 'react-bootstrap';
import NavItems from './NavItems.jsx';

const imgStyle = {
    width: '100%',
    height: '100%',
    maxWidth: 1422,
    maxHeight: 900,
    minWidth: 550,
    minHeight: 300,
};

const navStyle = {
    margin: 0,
    padding: 0
};

class BackGround extends React.Component {
    constructor(props) {
        super(props);
        this.state = {index : 0, direction: null};
         this.handleSelect = this.handleSelect.bind(this);
    }

    handleSelect(selectedIndex, e) {
        this.setState({
            index: selectedIndex,
            direction: e.direction
        });
    }

    render() {
        return(
            <Carousel style = {navStyle} activeIndex={this.state.index} direction={this.state.direction} onSelect={this.handleSelect}>
                <Carousel.Item>
                    <img style={imgStyle} src="https://static.pexels.com/photos/7101/wood-coffee-iphone-notebook.jpg" />
                    <Carousel.Caption>
                        <h3>Helen Qin</h3>
                        <p>Work hard, Think Differently, Program</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img style={imgStyle} src="https://static.pexels.com/photos/132982/pexels-photo-132982.jpeg" />
                    <Carousel.Caption>
                        <h3>Helen Qin</h3>
                        <p>Work hard, Think Differently, Program</p>
                    </Carousel.Caption>
                </Carousel.Item>

            </Carousel>
        );
    }
}

export default BackGround;