import React, { useEffect, useState } from "react";
import FormContainer from "components/FormContainer";
import { Button, Card, Col, Container, Form, ListGroup, Row } from "react-bootstrap";
import { Link, useHistory, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "redux/store";
import Loader from "components/Loader";
import Message from "components/Message";
import { saveShippingAddress } from "redux/cart/action";
import PaymentSteps from "components/PaymentSteps";
import { CartItem, PaymentMethod } from "redux/cart/types";
import { Image } from "react-bootstrap";
import { createOrder } from "redux/order/action";

const fixDecimal = (num: number) => {
  return (Math.round(num * 100) / 100).toFixed(2);
};

const PlaceOrder = () => {
  const [cartFee, setCartFee] = useState(0);
  const [taxCost, setTaxCost] = useState(0);
  const [shippingCost, setShippingCost] = useState(19.99);
  const [totalCost, setTotalCost] = useState(0);

  const { items, paymentMethod, shippingAddress } = useSelector((state: RootState) => state.cart);
  const { order, error, success, isLoading, lastOrderId } = useSelector((state: RootState) => state.order);
  const dispatch = useDispatch();

  const history = useHistory();
  if (items.length === 0) {
    history.push("/");
  }

  useEffect(() => {
    setCartFee(Number(items.reduce((acc: number, item: CartItem) => acc + item.quantity * item.price, 0).toFixed(2)));
  }, [items]);

  useEffect(() => {
    setTaxCost(Number((cartFee * 0.18).toFixed(2)));
    cartFee >= 5000 && setShippingCost(0);
  }, [cartFee]);

  useEffect(() => {
    setTotalCost(Number((cartFee + taxCost + shippingCost).toFixed(2)));
  }, [taxCost]);

  useEffect(() => {
    if (success && !isLoading) {
      history.push(`/orders/${lastOrderId}`);
    }
  }, [lastOrderId, success, isLoading]);

  const handlePlaceOrder = () => {
    dispatch(
      createOrder({
        cartFee,
        orderItems: items,
        paymentMethod,
        shippingPrice: shippingCost,
        shippingAddress,
        taxPrice: taxCost,
        totalPrice: totalCost,
      })
    );
  };

  return (
    <Container>
      {error && <Message variant="danger" error={error} />}
      <PaymentSteps step1 step2 step3 step4 />
      <Row>
        <Col md={8}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h2 className="text-warning">Shipping</h2>
              <p>
                <small className="text-primary">Address: </small> {shippingAddress?.address}, {shippingAddress?.city},{" "}
                {shippingAddress?.zipcode}, {shippingAddress?.country}
              </p>
            </ListGroup.Item>
            <ListGroup.Item>
              <h2 className="text-warning">Payment Method</h2>
              <small className="text-primary">Method: </small> {paymentMethod}
            </ListGroup.Item>
            <ListGroup.Item>
              <h2 className="text-warning">Products</h2>
              <ListGroup variant="flush">
                {items.map((item: CartItem, i: number) => (
                  <ListGroup.Item key={i}>
                    <Row>
                      <Col md={2}>
                        <Image src={item.image} alt={item.name} rounded fluid />
                      </Col>
                      <Col>
                        <Link to={`/product/${item.product}`}>{item.name}</Link>
                      </Col>
                      <Col md={3}>$ {item.price}</Col>
                      <Col md={1}>x{item.quantity}</Col>
                    </Row>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </ListGroup.Item>
            <ListGroup.Item>
              <ListGroup variant="flush">
                <Row>
                  <Col md={{ offset: 4 }}>
                    <h2 className="text-warning">Cart Total</h2>
                  </Col>
                  <Col md={{ span: 3 }}>$ {cartFee}</Col>
                  <Col md={{ span: 1 }} />
                </Row>
              </ListGroup>
            </ListGroup.Item>
          </ListGroup>
        </Col>

        <Col md={4}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h2 className="text-warning">Payment</h2>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row className="text-success">
                  <Col>Products</Col>
                  <Col className="text-right">
                    <span style={{ float: "left", marginLeft: 30 }}>$ </span>
                    <span> {fixDecimal(cartFee)}</span>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row className="text-info">
                  <Col>Tax (18%)</Col>
                  <Col className="text-right">
                    <span style={{ float: "left", marginLeft: 30 }}>$ </span>
                    <span> {fixDecimal(taxCost)}</span>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row className={`text-${shippingCost === 0 ? "danger" : "info"}`}>
                  <Col>Shipping</Col>
                  <Col className="text-right">
                    <span style={{ float: "left", marginLeft: 30 }}>$ </span>
                    <span> {fixDecimal(shippingCost)}</span>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>
                    <span>Total</span>
                  </Col>
                  <Col className="text-right">
                    <span style={{ float: "left", marginLeft: 30 }}>$ </span>
                    <span> {fixDecimal(totalCost)}</span>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                {isLoading ? (
                  <Loader size={36} />
                ) : (
                  <Button
                    type="button"
                    className="btn-block"
                    disabled={items.length === 0 || isLoading}
                    onClick={handlePlaceOrder}
                  >
                    Buy
                  </Button>
                )}
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default PlaceOrder;
