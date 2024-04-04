import React from 'react';
import { Container, Card } from 'react-bootstrap';

export default function SampleCard(props) {
  return (
    <Container>
      <Card className='cardp' style={{ width: '100%', border: 'none', alignItems: 'center', transition: 'box-shadow 0.3s ease' }}>
        <div style={{ width: '100%' }}>
          <img src={props.imgsrc} alt='image1' className='img mt-5 rounded-2' style={{ width: '100%', objectFit: 'cover' }} />
          <div className='text-center'>
            <p className='fw-semibold mt-3'>{props.title}</p>
            <p className='fw-semibold'>{props.price}</p>
          </div>
        </div>
      </Card>
    </Container>
  );
}
