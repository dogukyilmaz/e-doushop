import Message from "components/Message";
import React, { useEffect } from "react";
import { Row, Col, Alert, ListGroup, Image, Button, FormControl, InputGroup, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory, useLocation, useParams } from "react-router-dom";
import { addItemCart, removeItemCart } from "redux/cart/action";
import { CartItem } from "redux/cart/types";
import { RootState } from "redux/store";

import { IoMdTrash, IoIosTrash } from "react-icons/io";
import Loader from "components/Loader";

interface Props {
  darkMode: boolean;
}

const Cart: React.FC<Props> = ({ darkMode }) => {
  const history = useHistory();
  const { search } = useLocation<any>();
  const { id } = useParams<any>();

  const { items, isLoading } = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();

  const qty: number = search ? Number(search.split("=")[1]) : 1;

  useEffect(() => {
    if (id) {
      dispatch(addItemCart(id, qty));
    }
  }, [dispatch, id, qty]);

  const handleCartAdd = (item: CartItem) => {
    if (item.quantity !== item.stockCount) {
      dispatch(addItemCart(item.product, item.quantity + 1));
    }
  };
  const handleCartRemove = (item: CartItem) => {
    if (item.quantity === 1) {
      dispatch(removeItemCart(item.product));
    } else {
      dispatch(addItemCart(item.product, item.quantity - 1));
    }
  };

  const handleCheckout = () => {
    history.push("/login?redirect=shipping");
  };

  return (
    <Row>
      <Col md={9}>
        <h1>Shopping Cart</h1>
        {isLoading ? (
          <Loader />
        ) : items.length === 0 ? (
          <Alert className="text-center" variant="info">
            Your cart is empty now, please add items.
            <br />
            <Link to="/"> Continue to shopping.</Link>
          </Alert>
        ) : (
          <ListGroup variant="flush">
            {items.map((item: CartItem) => (
              <ListGroup.Item key={item.product}>
                <Row>
                  <Col md={2}>
                    <Image src={item.image} alt={item.name} fluid rounded />
                  </Col>
                  <Col md={3}>
                    <Link to={`/product/${item.product}`}>{item.name}</Link>
                  </Col>
                  <Col md={2}>${item.price}</Col>
                  <Col md={3} className="d-flex">
                    <Row>
                      <InputGroup className="mb-4">
                        <InputGroup.Prepend>
                          <Button
                            variant="outline-warning"
                            style={{ borderTopLeftRadius: 10, borderBottomLeftRadius: 10 }}
                            disabled={item.quantity === 0}
                            onClick={() => handleCartRemove(item)}
                          >
                            -
                          </Button>
                          <Button variant={darkMode ? "secondary" : "primary"} disabled>
                            {item.quantity}
                          </Button>
                          <Button
                            variant="outline-success"
                            style={{ borderTopRightRadius: 10, borderBottomRightRadius: 10 }}
                            disabled={item.quantity === item.stockCount}
                            onClick={() => handleCartAdd(item)}
                          >
                            +
                          </Button>
                        </InputGroup.Prepend>
                      </InputGroup>
                    </Row>
                  </Col>
                  <Col md={2}>
                    <Button variant="outline-danger" onClick={() => dispatch(removeItemCart(item.product))}>
                      <IoMdTrash size={20} />
                    </Button>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
        )}
      </Col>
      <Col md={3}>
        <Card>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h2>Subtotal ({items.reduce((acc: number, item: CartItem) => acc + item.quantity, 0)}) items</h2>
              <span>
                ${items.reduce((acc: number, item: CartItem) => acc + item.quantity * item.price, 0).toFixed(2)}
              </span>
            </ListGroup.Item>
            <ListGroup.Item>
              <Button className="btn-block success" disabled={items.length === 0} onClick={handleCheckout}>
                Buy
              </Button>
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </Col>
    </Row>
  );
};

export default Cart;
