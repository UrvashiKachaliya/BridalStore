import Carousel from 'react-bootstrap/Carousel';
import slide1 from "../Images/Cards/awesome7.png";
import slide2 from "../Images/Cards/awesome6.png"
import { Button } from 'react-bootstrap';




function Slider() {
  return (
    <Carousel indicators={true}>
      <Carousel.Item interval={1000}>
      <img
        style={{ width: '100%', height: 'auto', maxHeight: '550px',backgroundPosition:"center" }}
          src={slide1}
          alt="First slide"
        />
          <Carousel.Caption style={{display:"absolute", top:"5%",left:"60%",textAlign: "left"}} >
          <h1 style={{fontSize:"2.8rem"}}>Looking for the perfect lehenga choli to dazzle at your next event?</h1>
          <p style={{fontSize:"1.2rem"}}> We believe that looking your best shouldn't cost a fortune.</p>
          <Button style={{padding:"0.5rem 2rem",color:"black",backgroundColor:"white",border:"none"}}>Shop Now</Button>
        </Carousel.Caption>
      
      </Carousel.Item>
      <Carousel.Item interval={500}>
      <img
           style={{ width: '100%', height: 'auto', maxWidth: '100%', maxHeight: '550px' }}
          src={slide2}
          alt="First slide"
        />
        <Carousel.Caption style={{display:"absolute", top:"5%",left:"65%",textAlign: "left"}} >
          <h1 style={{fontSize:"2.6rem"}}>Explore our curated collection of exquisite sarees at unbeatable prices</h1>
          <p style={{fontSize:"1.2rem"}}> Drape yourself in timeless beauty.</p>
          <Button style={{padding:"0.5rem 2rem",color:"black",backgroundColor:"white",border:"none"}}>Shop Now</Button>
        </Carousel.Caption>
      </Carousel.Item>
     
     
    </Carousel>
  );
}

export default Slider;