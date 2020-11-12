import React, { useEffect, useState } from "react";
import FormContainer from "components/FormContainer";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link, useHistory, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "redux/store";
import Loader from "components/Loader";
import Message from "components/Message";
import { savePaymentMethod } from "redux/cart/action";
import PaymentSteps from "components/PaymentSteps";
import { PaymentMethod } from "redux/cart/types";

interface Props {}

const Payment = (props: Props) => {
  const { shippingAddress, paymentMethod } = useSelector((state: RootState) => state.cart);
  useEffect(() => {
    if (!shippingAddress) {
      history.push("/");
    }
  }, [shippingAddress]);

  const [payMethod, setPayMethod] = useState(paymentMethod || PaymentMethod.PAYPAL);

  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();

    dispatch(savePaymentMethod(payMethod));
    // history.push("/place_order");
  };

  return (
    <Container style={{ width: "35rem" }}>
      <PaymentSteps step1 step2 step3 />

      <h1>Payment</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label as="legend">Select Method</Form.Label>

          <Col>
            <Form.Check
              type="radio"
              label="PayPal or Credit Card"
              id={PaymentMethod.PAYPAL}
              name="payMethod"
              value={PaymentMethod.PAYPAL}
              checked={payMethod === PaymentMethod.PAYPAL}
              onChange={() => setPayMethod(PaymentMethod.PAYPAL)}
            ></Form.Check>
            <Form.Check
              type="radio"
              label="Stripe"
              id={PaymentMethod.STRIPE}
              name="payMethod"
              value={PaymentMethod.STRIPE}
              checked={payMethod === PaymentMethod.STRIPE}
              onChange={() => setPayMethod(PaymentMethod.STRIPE)}
            ></Form.Check>
            <Form.Check
              type="radio"
              label="Other"
              id={PaymentMethod.OTHER}
              name="payMethod"
              value={PaymentMethod.OTHER}
              checked={payMethod === PaymentMethod.OTHER}
              onChange={() => setPayMethod(PaymentMethod.OTHER)}
            ></Form.Check>
          </Col>
        </Form.Group>
        <Button type="submit" variant="primary">
          Place Order
        </Button>
      </Form>
    </Container>
  );
};

export default Payment;
