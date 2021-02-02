import { Navbar, Nav, NavDropdown } from "react-bootstrap";

function NavWM() {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/example-navbar">Example navbar</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/AddAndDeleteForm">AddAndDeleteForm</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Test</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Test1</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Test2</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Test3</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default NavWM;
