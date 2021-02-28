import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Product from "../components/Product";
import { listProducts } from "redux/product/action";
import { RootState } from "redux/store";
import Loader from "components/Loader";
import Message from "components/Message";

const Home: React.FC = () => {
  const { products, isLoading, error } = useSelector((state: RootState) => state.productList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <>
      <h1>Latest Products:</h1>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger" error={error} />
      ) : (
        <Row>
          {products?.map((product: any) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      )}{" "}
    </>
  );
};

export default Home;
