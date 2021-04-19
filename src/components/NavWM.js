import {
  Navbar,
  NavDropdown,
  Nav,
  Form,
  Button,
  FormControl,
} from "react-bootstrap";

import { NavLink, Route } from "react-router-dom";

function NavWM() {
  return (
    <div>
      <Navbar expand="xl" bg="light">
        <Navbar.Brand href="#home">React hooks</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavLink className="nav-link" to="/">
              Blog
            </NavLink>
            <NavLink className="nav-link" to="/information">
              Information
            </NavLink>
            <NavLink className="nav-link" to="/component">
              Components
            </NavLink>
            <NavLink className="nav-link" to="/exampleUE">
              Example toggle
            </NavLink>
            <NavLink className="nav-link" to="/formRedux">
              Form Redux
            </NavLink>
            <NavLink className="nav-link" to="/map">
              Map
            </NavLink>
            <NavLink className="nav-link" to="/alldevmembers">
              Developers
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default NavWM;
