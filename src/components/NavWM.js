import {
  Navbar,
  NavDropdown,
  Nav,
  Form,
  Button,
  FormControl,
} from "react-bootstrap";

function NavWM() {
  return (
    <div>
      <Navbar expand="xl" bg="light">
        <Navbar.Brand href="#home">React hooks</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Blog</Nav.Link>
            <Nav.Link href="/information">Information</Nav.Link>
            <Nav.Link href="/component">Components</Nav.Link>
            <Nav.Link href="/exampleUE">Example toggle</Nav.Link>
            <Nav.Link href="/formRedux">Form Redux</Nav.Link>
            <Nav.Link href="/map">Map</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default NavWM;
