import React from "react";
import { Col, Container, Row} from "react-bootstrap";
import SampleCard from "./SampleCard";
import pic1 from "../Images/Cards/card1.jpeg"
// import pic2 from "../Images/Cards/card3.jpg"





export default function Anarkalisuit() {
  return (
    <div>
          <h3 className='text-center p-2 text-uppercase'>Recommended For You</h3>
     
     <Container fluid style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
        <Row>
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
    
     
    </div>
  );
}
