import React from 'react';
import {render} from 'react-dom';
import NavItems from './components/main-nav/NavItems.jsx';
import NavW3 from './components/main-nav/NavW3.jsx'
import BackGround from './components/main-nav/BackGround.jsx';
import ProjectItem from './components/main-nav/ProjectItem.jsx';
//require('./../style.css');

class App extends React.Component {
    render() {
        return (
          <div>
            <NavW3/>
            <ProjectItem imgsrc={"https://goo.gl/ekcchC"} 
                         position={"Technical Product Manager"} 
                         specifics={"GoDaddy | 2017.1 - 2017.5 | Sunnyvale CA" }
                         bulletPts={["• China Strategy",
                         "• Code in react.js to product the frontend web product"]}
                         skills={["React.js","User-centric Design","HTML CSS Javascript","Agile Development"]}
                         demoLink={"http://google.com"}/>
          </div>
        );
    }
}

render(<App/>, document.getElementById('root'));