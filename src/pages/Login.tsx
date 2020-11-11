import React, { useEffect, useState } from "react";
import FormContainer from "components/FormContainer";
import { Button, Col, Form, Row } from "react-bootstrap";
import { Link, useHistory, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "redux/store";
import { login } from "redux/user/action";
import Loader from "components/Loader";
import Message from "components/Message";

interface Props {}

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory<any>();
  const { search } = useLocation();
  const redirect = search ? search.split("=")[1] : "";

  const { isLoading, error, user } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    if (user?.token) {
      history.push(history.location?.state?.from.pathname || "/");
    }
  }, [history, user, redirect]);

  const handleSubmit = (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();

    // TODO: validation
    dispatch(login(email, password));
  };

  return (
    <>
      {error && <Message variant="danger" error={error} />}
      <FormContainer>
        <h1 className="text-center">Login</h1>

        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email..."
              value={user?.email || email}
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
              Login
            </Button>
          )}
        </Form>

        <Row className="py-3">
          <Col>
            You don't have an account?{" "}
            <Link to={redirect ? `/register?redirect=${redirect}` : "/register"}> Register </Link>
          </Col>
        </Row>
      </FormContainer>
    </>
  );
};

export default Login;
