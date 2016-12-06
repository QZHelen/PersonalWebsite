import React from 'react';
import {render} from 'react-dom';
import NavItems from './components/main-nav/NavItems.jsx';
import BackGround from './components/main-nav/BackGround.jsx';

//require('./../style.css');

class App extends React.Component {
    render() {
        return (
          <div>
            <NavItems />
            <BackGround />
          </div>
        );
    }
}

render(<App/>, document.getElementById('root'));