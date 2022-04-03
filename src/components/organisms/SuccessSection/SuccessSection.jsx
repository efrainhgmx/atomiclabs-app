import React from 'react';
import developerIMG from "../../../assets/images/developer.png";
import "./SuccessSection.css";

const SuccessSection = () => {
  return (
    <section className='SuccessSection'>
      <div className='success-text'>
        <h2>TUS DATOS
          <span style={ { display: "block" }} className='orange'>HAN SIDO ENVIADOS CON ÉXITO</span>
        </h2>
        <p>En breve recibiras un correó de confirmación por parte del equipo de AtomicLabs.</p>
        <p>Recuerda revisar tu carpeta de spam</p>
        <p>¡Esperamos verte pronto!</p>
      </div>

      <figure>
        <img src={developerIMG} alt="GRACIAS POR CONTACTARNOS" loading='lazy' />
      </figure>
    </section>
  )
}

export default SuccessSection;