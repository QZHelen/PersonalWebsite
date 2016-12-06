import React from 'react';
import { Row, Navbar, NavItem, Nav, MenuItem, NavDropdown} from 'react-bootstrap';
import './Nav.css'

class NavItems extends React.Component {
    render () {
        return( 
            <Navbar inverse collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                            <a href="https://www.google.com"><img src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Tokyoship_Home_icon.svg"/></a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <NavItem eventKey={1} href="#"> Link</NavItem>
                        <NavItem eventKey={2} href="#"> Link</NavItem>
                        <NavDropdown eventKey = {3} title="Dropdown" id="basic-nav-dropdown">
                            <MenuItem eventKey = {3.1}>Action</MenuItem>
                            <MenuItem eventKey = {3.2}>Another action</MenuItem>
                            <MenuItem divider />
                            <MenuItem eventKey = {3.3}>Close</MenuItem>
                        </NavDropdown>
                    </Nav>
                    <Nav pullRight>
                        <MenuItem eventKey = {1} href="#">Blogs</MenuItem>
                        <MenuItem eventKey = {2} href="#">Projects</MenuItem>
                        <MenuItem eventKey = {3} href="#">About</MenuItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default NavItems;