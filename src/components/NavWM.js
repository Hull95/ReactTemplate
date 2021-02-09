import { Navbar, Nav } from "react-bootstrap";

function NavWM() {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/example-navbar">Form</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/AddAndDeleteForm">Create form</Nav.Link>
            <Nav.Link href="/table">Table</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default NavWM;
