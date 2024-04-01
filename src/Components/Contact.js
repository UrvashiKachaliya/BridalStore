import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Header from './Header';
import Footer from './Footer';

export default function Contact() {
  return (
    <div>
      <Header />
      <Container fluid>
        <Row>
          <Col lg={12} className='my-4'>
            <iframe
              title='.'
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.6664744020504!2d72.54658979999999!3d23.036015199999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84ead1103329%3A0x1a907f7fee8b2b7f!2sGujarat%20University!5e0!3m2!1sen!2sin!4v1711711390132!5m2!1sen!2sin"
              width="1330"
              height="450"
              style={{ border: '0' }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade">
            </iframe>
          </Col>
        </Row>

        <Row>
          <Col lg={12}>
            <h2 className='fw-semibold text-center'>GET IN TOUCH</h2>
          </Col>
        </Row>

        <Row className='mt-3' style={{ display: 'flex', justifyContent: 'center' }}>
          <Col lg={3}>
            <Form>
              <Form.Group className="mb-3">
                <Form.Control className='px-3 py-3' style={{ backgroundColor: '#F0F0F0' }} type="text" placeholder="Name" />
              </Form.Group>
            </Form>
          </Col>

          <Col lg={3}>
            <Form>
              <Form.Group className="mb-3" >
                <Form.Control className='px-3 py-3' style={{ backgroundColor: '#F0F0F0' }} type="email" placeholder="name@example.com" />
              </Form.Group>
            </Form>
          </Col>

          <Col lg={3}>
            <Form>
              <Form.Group className="mb-3">
                <Form.Control className='px-3 py-3' style={{ backgroundColor: '#F0F0F0' }} type="tel" placeholder="Phone Number" />
              </Form.Group>
            </Form>
          </Col>
        </Row>

        <Row style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Col lg={9}>
            <Form.Group className="mb-3">
              <Form.Control className='px-3 py-3' style={{ backgroundColor: '#F0F0F0' }} as="textarea" placeholder="Message" rows={5} />
            </Form.Group>
          </Col>
        </Row>

      </Container>
     
      <Footer />
    </div>
    
  )
}
