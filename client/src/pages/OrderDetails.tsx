import React, { useEffect, useState } from "react";
import FormContainer from "components/FormContainer";
import { Button, Card, Col, Container, Form, ListGroup, Row } from "react-bootstrap";
import { Link, useHistory, useLocation, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "redux/store";
import Loader from "components/Loader";
import Message from "components/Message";
import { saveShippingAddress } from "redux/cart/action";
import PaymentSteps from "components/PaymentSteps";
import { CartItem, PaymentMethod } from "redux/cart/types";
import { Image } from "react-bootstrap";
import { getOrder } from "redux/order/action";

const fixDecimal = (num: number = 0) => {
  return (Math.round(num * 100) / 100).toFixed(2);
};

const OrderDetails = () => {
  const { id } = useParams<any>();
  const { order, error, success, isLoading } = useSelector((state: RootState) => state.order);
  const dispatch = useDispatch();

  const history = useHistory();

  useEffect(() => {
    dispatch(getOrder(id));
  }, [dispatch, id]);

  return isLoading ? (
    <Loader />
  ) : error ? (
    <Message variant="danger" error={error} />
  ) : (
    <Container>
      <h1>Order: {order?._id}</h1>
      <Row>
        <Col md={8}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h2 className="text-warning">Shipping</h2>
              <p>
                <small className="text-primary">Address: </small> {order?.shippingAddress?.address},{" "}
                {order?.shippingAddress?.city}, {order?.shippingAddress?.zipcode}, {order?.shippingAddress?.country}
              </p>
            </ListGroup.Item>
            <ListGroup.Item>
              <h2 className="text-warning">Payment Method</h2>
              <small className="text-primary">Method: </small> {order?.paymentMethod}
            </ListGroup.Item>
            <ListGroup.Item>
              <h2 className="text-warning">Products</h2>
              <ListGroup variant="flush">
                {order?.orderItems.map((item: CartItem, i: number) => (
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
                  <Col md={{ span: 3 }}>$ {order?.cartFee}</Col>
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
                    <span> {fixDecimal(order?.cartFee)}</span>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row className="text-info">
                  <Col>Tax (18%)</Col>
                  <Col className="text-right">
                    <span style={{ float: "left", marginLeft: 30 }}>$ </span>
                    <span> {fixDecimal(order?.taxPrice)}</span>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row className={`text-${order?.shippingPrice === 0 ? "danger" : "info"}`}>
                  <Col>Shipping</Col>
                  <Col className="text-right">
                    <span style={{ float: "left", marginLeft: 30 }}>$ </span>
                    <span> {fixDecimal(order?.shippingPrice)}</span>
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
                    <span> {fixDecimal(order?.totalPrice)}</span>
                  </Col>
                </Row>
              </ListGroup.Item>
              {/* <ListGroup.Item>
                {isLoading ? (
                  <Loader size={36} />
                ) : (
                  <Button
                    type="button"
                    className="btn-block"
                    disabled={order?.orderItems.length === 0 || isLoading}
                    // onClick={handlePlaceOrder}
                  >
                    Buy
                  </Button>
                )}
              </ListGroup.Item> */}
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default OrderDetails;
