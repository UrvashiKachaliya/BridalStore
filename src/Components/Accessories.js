import React from "react";
import { Col, Container, Row} from "react-bootstrap";
import Header from "./Header";
import Footer from "./Footer";
import SampleCard from "./SampleCard";
import pic1 from "../Images/Cards/card2.jpg"
// import pic2 from "../Images/Cards/card3.jpg"





export default function Accessories() {
  return (
    <div>
        <Header/>
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
      <Footer/>
    
     
    </div>
  );
}
