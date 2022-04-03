import React from 'react';
import "./WhyUs.css";

import techIMG from "../../../assets/images/tech.png";
import menIMG from "../../../assets/images/men.png";
import upIMG from "../../../assets/images/up.png";

import checkIMG from "../../../assets/images/check.png";

const WhyUs = () => {
  return (
    <section className='WhyUs'>
        <h2>¿POR QUE <span className='orange'>ATOMIC?</span></h2>
        <div className='WhyUs-content__container'>
            <div className='grid-content'>
                <div className='content'>
                    <img src={techIMG} alt='Tecnologia moderna' height={320} loading='lazy'/>
                    <p><img src={checkIMG} alt="check" loading='lazy' width={20} height={20}/>  Usamos las tecnologías más modernas</p>
                    <p><img src={checkIMG} alt="check" loading='lazy' width={20} height={20}/>  Inovamos y creamos proyectos retadores</p>
                </div>

                <div className='content'>
                    <img src={menIMG} alt='Tecnologia moderna' height={320} loading='lazy'/>
                    <p><img src={checkIMG} alt="check" loading='lazy' width={20} height={20}/>  ¡Trabajamos en equipo rumbo al exito!</p>
                    <p><img src={checkIMG} alt="check" loading='lazy' width={20} height={20}/>  No tenemos código de vestimenta</p>
                </div>

                <div className='content'>
                    <img src={upIMG} alt='Tecnologia moderna' height={320} loading='lazy'/>
                    <p><img src={checkIMG} alt="check" loading='lazy' width={20} height={20}/>  Realizamos actividades para tu bienestar</p>
                    <p><img src={checkIMG} alt="check" loading='lazy' width={20} height={20}/>  ¡Tenemos un parque frente a la oficina!</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default WhyUs