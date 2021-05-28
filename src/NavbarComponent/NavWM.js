import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import React from "react";
import { NavLink } from "react-router-dom";
import ReactLogo from "../static/img/atom.png";
import { FiSettings } from "react-icons/fi";
import DarkMode from "../CustomComponent/DarkMode";

function NavWM() {
  const navBarSwitcher = DarkMode();

  return (
    <>
      <Navbar expand="xl" bg="light">
        <NavLink className="nav-link sv-img-navbar-logo" to="/">
          <img src={ReactLogo} alt="React Logo" />
          React example
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto m-0 m-auto">
            <NavDropdown title="Information" id="basic-nav-dropdown">
              <NavDropdown.Item className="nav-link" href="/exampleUE">
                TodoList example
              </NavDropdown.Item>
              <NavDropdown.Item className="nav-link" href="/information">
                Basic create blog
              </NavDropdown.Item>
              <NavDropdown.Item className="nav-link" href="/formRedux">
                Form Redux
              </NavDropdown.Item>
            </NavDropdown>
            <NavLink className="nav-link" to="/component">
              Components examples
            </NavLink>
            <NavLink className="nav-link" to="/alldevmembers">
              Position in team
            </NavLink>
            <NavDropdown title="Components" id="basic-nav-dropdown">
              <NavDropdown.Item className="nav-link" href="/compTest1">
                Component 1
              </NavDropdown.Item>
              <NavDropdown.Item className="nav-link" href="/componentTest">
                Component 2
              </NavDropdown.Item>
              <NavDropdown.Item className="nav-link" href="/componentsRandom">
                Component 3
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav className="float-right">
            {navBarSwitcher}
            <NavLink className="nav-link" to="/settings">
              Settings <FiSettings className="font-size-20" />
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default NavWM;
