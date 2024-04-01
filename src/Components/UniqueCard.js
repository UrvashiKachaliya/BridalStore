// UniqueCard.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import logo1 from "../Images/Cards/logo1.png";
import logo2 from "../Images/Cards/logo2.png";
import logo3 from "../Images/Cards/logo3.png";
import logo4 from "../Images/Cards/logo4.png";
import Cards from './Cards';

export default function UniqueCard() {
  return (
    <div>
      <h3 className='text-center p-3' style={{ textTransform: "uppercase" }}>Decoding our Unique Spirit</h3>
      <Container fluid>
        <Row className='justify-content-center'>
          <Col xs={12} sm={6} md={4} lg={3} style={{ marginBottom: '20px' }}>
            <Cards imgsrc={logo1} title="Lahenga" details="Nothing makes a man look more handsome than a well-tailored suit. We present you the best of tailored suits to give you the perfect razor-sharp looks" />
          </Col>
          <Col xs={12} sm={6} md={4} lg={3} style={{ marginBottom: '20px' }}>
            <Cards imgsrc={logo2} title="Tailored" details="Nothing makes a man look more handsome than a well-tailored suit. We present you the best of tailored suits to give you the perfect razor-sharp looks" />
          </Col>
          <Col xs={12} sm={6} md={4} lg={3} style={{ marginBottom: '20px' }}>
            <Cards imgsrc={logo3} title="Saree" details="Nothing makes a man look more handsome than a well-tailored suit. We present you the best of tailored suits to give you the perfect razor-sharp looks" />
          </Col>
          <Col xs={12} sm={6} md={4} lg={3} style={{ marginBottom: '20px' }}>
            <Cards imgsrc={logo4} title="Accessories" details="Nothing makes a man look more handsome than a well-tailored suit. We present you the best of tailored suits to give you the perfect razor-sharp looks" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
