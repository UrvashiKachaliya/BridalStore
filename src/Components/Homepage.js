import React from 'react'
import Header from './Header';
import Slider from './Slider';
import Collection from './Collection';
import FashionSection from './FashionSection';
import Footer from './Footer';
import Anarkalisuit from './Anarkalisuit';
import UniqueCard from './UniqueCard';



export default function Homepage() {
  return (
    <div>
      {/* <Container fluid> */}
         <Header/>
         <Slider/>
         <Collection/>
         <FashionSection/>
         <UniqueCard/>
        <Anarkalisuit/>
        <Footer/>
      {/* </Container> */}
  
    </div>
  )
}
