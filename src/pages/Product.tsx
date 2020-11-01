import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Button, Col, ListGroup, Row, Image, Card } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useParams } from "react-router-dom";
import Rating from "../components/Rating";

import { IProduct } from "./types";

interface Props {}

const Product = () => {
  const [darkMode] = useState(localStorage.getItem("darkMode") === "true"); //refactor with redux later
  const [product, setProduct] = useState<IProduct>();
  const [loading, setLoading] = useState(true);

  const { id } = useParams<any>();

  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = async () => {
    const { data, status } = await Axios.get(`/api/v1/products/${id}`);
    if (status === 200) {
      setProduct(data.data);
      setLoading(false);
    }
  };

  if (loading) {
    return <div>loading</div>;
  }

  return (
    <>
      <LinkContainer to="/">
        <Button variant={darkMode ? "light" : "dark"}>GO BACK</Button>
      </LinkContainer>
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
              {product!.stockCount > 0 && product!.stockCount < 6 && (
                <ListGroup.Item>
                  <Row>
                    <Col>Last {product!.stockCount} item on stock.</Col>
                  </Row>
                </ListGroup.Item>
              )}
              <ListGroup.Item>
                <Button className="btn-block" disabled={product!.stockCount === 0}>
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
