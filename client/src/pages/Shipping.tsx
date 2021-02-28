import React, { useEffect, useState } from "react";
import FormContainer from "components/FormContainer";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link, useHistory, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "redux/store";
import Loader from "components/Loader";
import Message from "components/Message";
import { saveShippingAddress } from "redux/cart/action";
import PaymentSteps from "components/PaymentSteps";

interface Props {}

const Shipping = (props: Props) => {
  const { shippingAddress } = useSelector((state: RootState) => state.cart);

  const [address, setAddress] = useState(shippingAddress?.address || "");
  const [city, setCity] = useState(shippingAddress?.city || "");
  const [zipcode, setZipcode] = useState(shippingAddress?.zipcode || "");
  const [country, setCountry] = useState(shippingAddress?.country || "");

  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();

    // TODO: validation
    dispatch(saveShippingAddress({ address, city, zipcode, country }));
    history.push("/payment");
  };

  return (
    <Container style={{ width: "35rem" }}>
      <PaymentSteps step1 step2 />

      <h1>Shipping</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="address">
          <Form.Label>Address</Form.Label>
          <Form.Control
            type="address"
            placeholder="Enter Address.."
            value={address}
            autoFocus
            required
            onChange={(e) => setAddress(e.target.value)}
            // disabled={isLoading}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="city">
          <Form.Label>City</Form.Label>
          <Form.Control
            type="city"
            placeholder="Enter City.."
            value={city}
            autoFocus
            required
            onChange={(e) => setCity(e.target.value)}
            // disabled={isLoading}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="zipcode">
          <Form.Label>Zipcode</Form.Label>
          <Form.Control
            type="zipcode"
            placeholder="Enter City.."
            value={zipcode}
            autoFocus
            required
            onChange={(e) => setZipcode(e.target.value)}
            // disabled={isLoading}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="country">
          <Form.Label>Country</Form.Label>
          <Form.Control
            type="country"
            placeholder="Enter City.."
            value={country}
            autoFocus
            required
            onChange={(e) => setCountry(e.target.value)}
            // disabled={isLoading}
          ></Form.Control>
        </Form.Group>

        <Button type="submit" variant="primary">
          Payment
        </Button>
      </Form>
    </Container>
  );
};

export default Shipping;
