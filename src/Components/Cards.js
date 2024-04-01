// Cards.js
import React from 'react';
import { Card} from 'react-bootstrap';

export default function Cards(props) {
  return (
    // <Col xs={12} sm={6} md={4} lg={3} className='mt-3'>
      <Card style={{ maxWidth: "100%", boxShadow: "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px", border: "none" }}>
        <Card.Body className='text-center'>
          <img src={props.imgsrc} alt={props.title} style={{ maxWidth: "100%" }} />
          <h4 className='mt-2'>{props.title}</h4>
          <div className='details'>{props.details}</div>
        </Card.Body>
      </Card>
    // </Col>
  );
}
