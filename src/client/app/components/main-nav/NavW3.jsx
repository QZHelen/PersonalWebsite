import React from 'react';
import NavItemW3 from './NavItemW3.jsx';

class NavW3 extends React.Component {
    render () {
        return (
            <div className="w3-top">
                 <div className="w3-row w3-large">
                    <NavItemW3 navLink = {"#Study"} navTopic = {"Academic Focus"}/>
                    <NavItemW3 navLink = {"#Strength"} navTopic = {"Strength"}/>
                    <NavItemW3 navLink = {"#Interests"} navTopic = {"Interests"}/>
                    <NavItemW3 navLink = {"#Contact"} navTopic = {"Contact"}/>
                </div>
            </div>
        );
    }
}

export default NavW3;