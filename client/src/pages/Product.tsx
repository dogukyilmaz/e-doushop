import React, { useEffect, useState } from "react";
import { Button, Col, ListGroup, Row, Image, Card, Form } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useHistory, useParams } from "react-router-dom";
import Rating from "components/Rating";

import { useDispatch, useSelector } from "react-redux";
import { listProductDetails } from "redux/product/action";
import { RootState } from "redux/store";
import Loader from "components/Loader";
import Message from "components/Message";

interface Props {}

const Product = () => {
  const [darkMode] = useState(localStorage.getItem("darkMode") === "true"); //refactor with redux later
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams<any>();
  const history = useHistory();
  const { error, isLoading, product } = useSelector((state: RootState) => state.productDetail);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listProductDetails(id));
  }, [dispatch, id]);

  const addCart = () => {
    history.push(`/cart/${id}?qty=${quantity}`);
  };

  return isLoading ? (
    <Loader />
  ) : error ? (
    <Message variant="danger" error={error} />
  ) : (
    <>
      <Button variant={darkMode ? "light" : "dark"} onClick={() => history.goBack()}>
        GO BACK
      </Button>
      <Row>
        <Col md={6}>
          <Image src={product?.image} alt={product?.name} fluid />
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h4>{product?.name}</h4>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating value={product!.rating} text={`${product?.reviewCount} reviews`} />
            </ListGroup.Item>
            <ListGroup.Item>Price: ${product?.price}</ListGroup.Item>
            <ListGroup.Item>Description: {product?.description}</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Row>
                  <Col>Price:</Col>
                  <Col>
                    <strong>${product?.price}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              {/* TODO: remove 6 */}
              {product.stockCount > 0 && product.stockCount < 6 && (
                <ListGroup.Item>
                  <Row>
                    <Col>Last {product!.stockCount} item on stock.</Col>
                  </Row>
                </ListGroup.Item>
              )}

              {product.stockCount > 0 && (
                <ListGroup.Item>
                  <Row>
                    <Col>Qty</Col>
                    <Col>
                      <Form.Control
                        as="select"
                        value={quantity}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setQuantity(Number(e.target.value))}
                      >
                        {[...Array(product.stockCount).keys()].map((x: number) => (
                          <option key={x + 1} value={x + 1}>
                            {x + 1}
                          </option>
                        ))}
                      </Form.Control>
                    </Col>
                  </Row>
                </ListGroup.Item>
              )}

              <ListGroup.Item>
                <Button className="btn-block" disabled={product!.stockCount === 0} onClick={addCart}>
                  {product!.stockCount > 0 ? "Add to Cart" : "Out of Stock"}
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Product;
