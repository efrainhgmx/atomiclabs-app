import React from 'react';
import { Link } from "react-router-dom";
import "./TeamWork.css";

import teamworkIMG from "../../../assets/images/teamwork.png";

const TeamWork = () => {
  return (
    <section className='TeamWork'>
        <h2>¡TE ENCATARÁ <span className='orange'>TRABAJAR CON NOSOTROS!</span></h2>
        <div className='TeamWork-content'>
            <img src={teamworkIMG} alt="Trabaja con nosotros" loading='lazy'/>
            <div className='TeamWork-content__text'>
                <p>Contratación remota  <span className='orange'>&rarr;</span></p>
                <p>Entrevista con area de RH  <span className='orange'>&rarr;</span></p>
                <p>Prueba práctica  <span className='orange'>&rarr;</span></p>
                <p>Entrevista Técnica</p>
            </div>
            <Link className='btn-primary' to="/contact" rel='noopener noreferrer'>¡Quiero ser parte!</Link> 
        </div>
    </section>
  )
}

export default TeamWork