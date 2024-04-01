import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import banner1 from "../Images/Cards/card3.jpg";
import banner2 from "../Images/Cards/card1.jpeg";
import banner3 from "../Images/Cards/card2.jpg";
import banner4 from "../Images/Cards/card6.jpg";
import CollectionCard from './CollectionCard';


export default function Collection() {
  return (
    <div>
      <h3 className='text-center p-3'>COLLECTION</h3>
 
      <Container fluid style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
        <Row>
          <Col xs={12} sm={6} md={4} lg={3} style={{ marginBottom: '20px' }}>
            <CollectionCard imgsrc={banner1} title="Lahenga" desc="Lehengas that Define Glamour" />
          </Col>
          <Col xs={12} sm={6} md={4} lg={3} style={{ marginBottom: '20px' }}>
            <CollectionCard imgsrc={banner2} title="Kurta-Set" desc="Kurta Sets for Every Occasion" />
          </Col>
          <Col xs={12} sm={6} md={4} lg={3} style={{ marginBottom: '20px' }}>
            <CollectionCard imgsrc={banner3} title="Saree" desc="Sarees, the Pride of Indian Ethnic Wear" />
          </Col>
          <Col xs={12} sm={6} md={4} lg={3} style={{ marginBottom: '20px' }}>
            <CollectionCard imgsrc={banner4} title="Accessories" desc="Finest Accessories here" />
          </Col>
        </Row>
      </Container>
    
    </div>
  );
}
