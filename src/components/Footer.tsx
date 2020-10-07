import React from "react";
import { Col, Container, Row } from "react-bootstrap";

interface FooterProps {
  darkMode: boolean;
}

const Footer: React.FC<FooterProps> = ({ darkMode }) => {
  return (
    <footer>
      <Container>
        <Row>
          <Col className="text-center py-2">e-douShop 2020 &copy;</Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
