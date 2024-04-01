import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import PlaceIcon from '@mui/icons-material/Place';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';

const Footer = () => {
  return (
    <footer className='mt-5' style={{ backgroundColor: "black", color: "white" }}>
      <Container className="py-5">
        <Row>
          <Col lg={3} className="mb-4 mb-lg-0">
            <h5 className="fw-semibold">INFORMATION</h5>
            <ul className="list-unstyled" style={{lineHeight:"2.2rem"}}>
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Blog</li>
              <li>Shipping & Delivery</li>
              <li>Sitemap</li>
            </ul>
          </Col>
          <Col lg={3} className="mb-4 mb-lg-0">
            <h5 className="fw-semibold">QUICK LINKS</h5>
            <ul className="list-unstyled" style={{lineHeight:"2.2rem"}}>
              <li>Ethnic Wear</li>
              <li>Formal Wear</li>
              <li>Party Wear</li>
              <li>Co-ord Set</li>
            </ul>
          </Col>
          <Col lg={3} className="mb-4 mb-lg-0">
            <h5 className="fw-semibold">ACCOUNT</h5>
            <ul className="list-unstyled" style={{lineHeight:"2.2rem"}}>
              <li>My Account</li>
              <li>Wishlist</li>
              <li>Return Policy</li>
              <li>Help and FAQ</li>
            </ul>
          </Col>
          <Col lg={3}>
            <h5 className="fw-semibold">CONTACTS</h5>
            <p><PlaceIcon /> A-28, Sector-83 Noida-201305(U.P)</p>
            <p><LocalPhoneIcon /> +91 9711303035</p>
            <p><EmailIcon /> contact@bridal.co.in</p>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col lg={6}>
            <h1 className="fw-semibold">BRIDO</h1>
            <div className="d-flex">
              <YouTubeIcon className="me-2" />
              <TwitterIcon className="me-2" />
              <FacebookIcon className="me-2" />
              <InstagramIcon />
            </div>
          </Col>
         
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
