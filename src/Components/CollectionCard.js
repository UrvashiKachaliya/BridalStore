import React from 'react';

export default function CollectionCard(props) {
  return (
    <div className='collection-card mt-3 lg-mt-0 md-mt-2 sm-mt-2  lg-ms-0 md-mt-2 sm-mt-2'>
      <img
        src={props.imgsrc}
        alt={props.title}
        style={{
          height: "400px",
          width: "300px",
          justifyContent:"space-between",
          backgroundPosition: "center",
          backgroundSize: "cover",
          maxWidth: "100%"
        }}
      />
      <div className='content' style={{ textAlign: "center" }}>
        <h4 style={{ fontFamily: "Roboto, Arial, sans-serif", textTransform: "uppercase", lineHeight: "1.5", margin: "0 0.5rem", fontWeight: "500" }}>{props.title}</h4>
        <p>{props.desc}</p>
      </div>
    </div>
  );
}
