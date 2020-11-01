import React, { useEffect, useState } from "react";
import Product from "../components/Product";
import axios from "axios";
import { useDispatch } from "react-redux";
import { Row, Col } from "react-bootstrap";
import { listProducts } from "redux/product/action";

const BASE_URL = "http://localhost:4500/api/v1";

const Home: React.FC = () => {
  const [products, setProducts] = useState<any>();
  const dispatch = useDispatch();

  useEffect(() => {
    // getProducts();
    // console.log(products);
    dispatch(listProducts());
  }, []);

  const getProducts = async () => {
    const { data, status } = await axios.get(`/api/v1/products`);
    if (status === 200) {
      setProducts(data.data);
    }
  };

  return (
    <>
      <h1>Latest Products:</h1>
      <Row>
        {products &&
          products?.map((product: any) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          ))}
      </Row>
    </>
  );
};

export default Home;
