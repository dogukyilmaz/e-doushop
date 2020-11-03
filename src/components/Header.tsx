import React from "react";
import { Navbar, Nav, Form, FormControl, Button, NavDropdown, Container, Badge } from "react-bootstrap";
import { FiLogIn, FiShoppingCart } from "react-icons/fi";
import { useSelector } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";
import { RootState } from "redux/store";

interface HeaderProps {
  darkMode: boolean;
}

const Header: React.FC<HeaderProps> = ({ darkMode }) => {
  const cartItemsCount = useSelector((state: RootState) => state.cart.items.length);

  return (
    <header>
      <Navbar bg={darkMode ? "dark" : "light"} variant={darkMode ? "dark" : "light"} expand="md" collapseOnSelect>
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>e-douShop</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <LinkContainer to="/cart">
                <Nav.Link className="align-middle">
                  <FiShoppingCart size={22} className="mr-2" />
                  {cartItemsCount > 0 && (
                    <Badge
                      as="sup"
                      pill
                      variant="danger"
                      style={{
                        marginLeft: -18,
                        border: `2px solid ${darkMode ? "var(--dark)" : "var(--light)"}`,
                      }}
                    >
                      {cartItemsCount}
                    </Badge>
                  )}
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/login">
                <Nav.Link>
                  <span className="align-middle">Login</span>
                  <FiLogIn size={22} className="ml-1" />
                </Nav.Link>
              </LinkContainer>
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
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
