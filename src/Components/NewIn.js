import React from 'react';
import Header from './Header';
import Footer from './Footer';
import banner3 from "../Images/Cards/new3.jpg";
import SampleCard from "./SampleCard";
import pic1 from "../Images/Cards/card2.jpg"
import { Container, Row, Col } from 'react-bootstrap';

export default function NewIn() {
  return (
    <div>
      <Header />
      <div
        style={{
          backgroundImage: `url(${banner3})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "80vh",
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"// Center the content vertically
        }}
      >
        <p style={{ color: "black", textTransform: "uppercase", fontSize: "2rem", position: 'absolute', bottom: "5%", right: "3%" }}>
          <span className='fw-bold'>NEW</span> Collection
        </p>
      </div>

      <Container fluid style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap" }}>
        <Row className="mt-3">
          <Col xs={12} sm={6} md={4} lg={3} style={{ marginBottom: '20px' }}>
            <SampleCard imgsrc={pic1} title="Red Choli" price="6500$" />
          </Col>
          <Col xs={12} sm={6} md={4} lg={3} style={{ marginBottom: '20px' }}>
            <SampleCard imgsrc={pic1} title="Red Choli" price="6500$" />
          </Col>
          <Col xs={12} sm={6} md={4} lg={3} style={{ marginBottom: '20px' }}>
            <SampleCard imgsrc={pic1} title="Red Choli" price="6500$" />
          </Col>
          <Col xs={12} sm={6} md={4} lg={3} style={{ marginBottom: '20px' }}>
            <SampleCard imgsrc={pic1} title="Red Choli" price="6500$" />
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  )
}
