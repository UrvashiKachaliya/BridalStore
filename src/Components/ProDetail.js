import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import arrival1 from "../Images/Cards/Anarkali1.jpg";

export default function ProDetail() {
  return (
    <div>
      <Container>
        <Row>
          <Col lg={12}>
           
              <img
                src={arrival1}
                alt="image1"
                className="mt-5"
                style={{maxWidth:"100%", height: "30rem", maxHeight: "100%"}}
              />
             
            
          </Col>
         
        </Row>
      </Container>
    </div>
  );
}
