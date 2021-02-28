import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
interface Props {
  children: React.ReactNode;
}
const FormContainer = ({ children }: Props) => {
  return (
    <Container style={{ marginTop: "50%", transform: "translateY(-50%)" }}>
      <Card style={{ width: "30rem", margin: "auto" }} className="py-2">
        <Row className="justify-content-md-center">
          <Col xs={12} md={8}>
            {children}
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default FormContainer;
