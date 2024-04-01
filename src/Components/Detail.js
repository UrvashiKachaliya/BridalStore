import React from 'react'
import { Container,Row,Col, Button } from 'react-bootstrap'
import ProDetail from './ProDetail'
import LocalMallIcon from '@mui/icons-material/LocalMall';
import SpeakerNotesOutlinedIcon from '@mui/icons-material/SpeakerNotesOutlined';
import Header from './Header';
import Footer from './Footer';




export default function Detail() {
  return (
    <div>
         <Header/>
        <Container>
          <Row>
         
            <Col lg={4}>
              <ProDetail/>
            </Col>
            <Col lg={7} className='ms-auto my-auto'>
              <h5>Women Teal & White Bandhani Printed Gotta Patti Georgette Anarkali Kurta</h5>
              <p>$2,999.00</p>
              <Button className="text-uppercase bg-black text-white px-4 py-2 border-0 fw-semibold mb-3"><LocalMallIcon className='fs-5 mb-1 me-2'/> Add To Cart</Button>
              <hr style={{color:"black"}}/>
              <h6 className='text-uppercase mt-4'>Product Details <SpeakerNotesOutlinedIcon/></h6>
              <p className='fw-semibold'>Colour : Blue</p>
              <p className='fw-semibold'>Sleeve Length : Long Sleeves</p>
              <p className='fw-semibold'>Shape : Anarkali</p>
              <p className='fw-semibold'>Print or Pattern Type : Bandhani</p>
              <p className='fw-semibold'>Length : Ankle Length</p>
              


            </Col>
          </Row>
         
        </Container>
        <Footer/>
    </div>
  )
}
