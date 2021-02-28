import React, { useEffect, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { Link, useHistory, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "redux/store";
import { register, updateProfile } from "redux/user/action";
import Loader from "components/Loader";
import Message from "components/Message";
import { getAllOrders } from "redux/order/action";
import { Order } from "redux/order/types";

const Profile = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isUpdating, setUpdating] = useState(false);
  // TODO: Password Confirmation

  const history = useHistory();
  // const { search } = useLocation();
  // const redirect = search ? search.split("=")[1] : "";

  const { isLoading, error, user } = useSelector((state: RootState) => state.auth);
  const order = useSelector((state: RootState) => state.order);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   user?.token && history.push(redirect);
  // }, [history, user, redirect]);

  useEffect(() => {
    dispatch(getAllOrders());
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();

    if (isUpdating) {
      // TODO: validation
      dispatch(updateProfile({ firstName, lastName, email, password }));
    }
    setUpdating(!isUpdating);
  };

  // TODO: seperate auth and profile
  // profile returns email login not
  // remove getprofile from app etc

  return (
    <>
      {error && <Message variant="danger" error={error} />}
      <Row>
        <Col md={4}>
          <h1>Profile</h1>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="firstName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="firstName"
                defaultValue={user?.firstName}
                autoFocus
                onChange={(e) => setFirstName(e.target.value)}
                disabled={!isUpdating || isLoading}
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId="lastName">
              <Form.Label>Surname</Form.Label>
              <Form.Control
                type="lastName"
                defaultValue={user?.lastName}
                autoFocus
                onChange={(e) => setLastName(e.target.value)}
                disabled={!isUpdating || isLoading}
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                defaultValue={user?.email}
                autoFocus
                onChange={(e) => setEmail(e.target.value)}
                disabled={!isUpdating || isLoading}
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                defaultValue={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={!isUpdating || isLoading}
              ></Form.Control>
            </Form.Group>
            {isLoading ? (
              <Loader size={36} />
            ) : (
              <Button type="submit" variant="primary" block disabled={isLoading}>
                {isUpdating ? "Save" : "Edit"} Profile
              </Button>
            )}
          </Form>
        </Col>
        <Col md={8}>
          <h1>Orders</h1>
          {order.userOrders?.length === 0
            ? "No orders"
            : order.userOrders?.map((order: Order, i: number) => <p>{order._id}</p>)}
        </Col>
      </Row>
    </>
  );
};

export default Profile;
