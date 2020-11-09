import React from "react";
import { Navbar, Nav, Form, FormControl, Button, NavDropdown, Container, Badge } from "react-bootstrap";
import { FiLogIn, FiLogOut, FiShoppingCart, FiUser } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";
import { RootState } from "redux/store";
import { logout } from "redux/user/action";

interface HeaderProps {
  darkMode: boolean;
}

const Header: React.FC<HeaderProps> = ({ darkMode }) => {
  const cartItemsCount = useSelector((state: RootState) => state.cart.items.length);
  const user = useSelector((state: RootState) => state.auth.user);
  const dispatch = useDispatch();

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
              {!user?.isAuth ? (
                <LinkContainer to="/login">
                  <Nav.Link>
                    <span className="align-middle">Login</span>
                    <FiLogIn size={22} className="ml-1" />
                  </Nav.Link>
                </LinkContainer>
              ) : (
                <NavDropdown title={`${user.firstName} ${user.lastName}`} id="basic-nav-dropdown">
                  <LinkContainer to="/profile">
                    <NavDropdown.Item>
                      <FiUser size={22} className="ml-1" /> <span className="align-middle">Profile</span>
                    </NavDropdown.Item>
                  </LinkContainer>

                  <NavDropdown.Divider />

                  <NavDropdown.Item onClick={() => dispatch(logout())}>
                    <FiLogOut size={22} className="ml-1" /> <span className="align-middle">Logout</span>
                  </NavDropdown.Item>
                </NavDropdown>
              )}
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
