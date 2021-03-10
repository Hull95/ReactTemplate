import { Navbar } from "react-bootstrap";

function NavWM() {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">Blog</Navbar.Brand>
        <Navbar.Brand href="/information">Information</Navbar.Brand>
        <Navbar.Brand href="/component">Components</Navbar.Brand>
        <Navbar.Brand href="/exampleUE">Example toggle</Navbar.Brand>
        <Navbar.Brand href="/formRedux">Form Redux</Navbar.Brand>
      </Navbar>
    </div>
  );
}

export default NavWM;
