import React, { useEffect, useState } from "react";
import FormContainer from "components/FormContainer";
import { Button, Col, Form, Row } from "react-bootstrap";
import { Link, useHistory, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "redux/store";
import { register } from "redux/user/action";
import Loader from "components/Loader";
import Message from "components/Message";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // TODO: Password Confirmation

  const history = useHistory();
  // const { search } = useLocation();
  // const redirect = search ? search.split("=")[1] : "";

  const { isLoading, error } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   user?.token && history.push(redirect);
  // }, [history, user, redirect]);

  const handleSubmit = (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();

    // TODO: validation

    dispatch(register(firstName, lastName, email, password));
    history.push("/login");
  };

  return (
    <>
      {error && <Message variant="danger" error={error} />}
      <FormContainer>
        <h1 className="text-center">Register</h1>

        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="firstName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="firstName"
              placeholder="Enter First Name..."
              value={firstName}
              autoFocus
              onChange={(e) => setFirstName(e.target.value)}
              disabled={isLoading}
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="lastName">
            <Form.Label>Surname</Form.Label>
            <Form.Control
              type="lastName"
              placeholder="Enter Last Name..."
              value={lastName}
              autoFocus
              onChange={(e) => setLastName(e.target.value)}
              disabled={isLoading}
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email..."
              value={email}
              autoFocus
              onChange={(e) => setEmail(e.target.value)}
              disabled={isLoading}
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter password..."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={isLoading}
            ></Form.Control>
          </Form.Group>
          {isLoading ? (
            <Loader size={36} />
          ) : (
            <Button type="submit" variant="primary" block disabled={isLoading}>
              Register
            </Button>
          )}
        </Form>

        <Row className="py-3">
          <Col>
            Already have an account? <Link to="/login"> Login </Link>
          </Col>
        </Row>
      </FormContainer>
    </>
  );
};

export default Register;
