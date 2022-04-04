import React from 'react';
import "./CodeValidation.css";
import checkIMG from "../../../assets/images/checkform.png";

const CodeValidation = () => {
  return (
    <section className='CodeValidation'>
        <img src={checkIMG} alt="Listo" loading='lazy'/>
        <p>Hemos validado el código</p>
    </section>
  )
}

export default CodeValidation