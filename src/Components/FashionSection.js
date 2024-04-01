import React from 'react';
import model from "../Images/Cards/topmodel.png";

export default function FashionSection() {
  return (
    <div style={{
      backgroundImage: `url(${model})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: "80vh",
      position: "relative",
      overflow: "hidden" // Ensure image does not overflow its container
    }}>
      <p style={{
        color: "white",
        textTransform: "uppercase",
        fontSize: "2rem",
        position: 'absolute',
        bottom: "5%",
        right: "3%",
        zIndex: 1 // Ensure text is above the background image
      }}>
        <span className='fw-bold'>Brido</span> Collection
      </p>
    </div>
  );
}
