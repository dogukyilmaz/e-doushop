import React from "react";
import { Navbar, Nav, Form, FormControl, Button, NavDropdown } from "react-bootstrap";
import { FiLogIn, FiShoppingCart } from "react-icons/fi";

interface HeaderProps {
  darkMode: boolean;
}

const Header: React.FC<HeaderProps> = ({ darkMode }) => {
  return (
    <header>
      <Navbar bg={darkMode ? "dark" : "light"} variant={darkMode ? "dark" : "light"} expand="md" collapseOnSelect>
        <Navbar.Brand href="#home">e-douShop</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="/cart" className="align-middle">
              <FiShoppingCart size={22} className="mr-2" />
              <span className="align-middle">Cart</span>
            </Nav.Link>
            <Nav.Link href="/login">
              <span className="align-middle">Login</span>
              <FiLogIn size={22} className="ml-1" />
            </Nav.Link>
            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
          {/* <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant={darkMode ? "outline-info" : "outline-primary"}>Search</Button>
          </Form> */}
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default Header;
