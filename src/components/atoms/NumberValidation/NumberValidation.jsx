import React from 'react';
import "./NumberValidation.css";
import paperPlane from "../../../assets/images/paper-plane.png";

const NumberValidation = () => {
  return (
    <section className='NumberValidation'>
        <img src={paperPlane} alt="Enviando un SMS" loading='lazy'/>
        <p>Te estamos reenviando el código...</p>
    </section>
  )
}

export default NumberValidation