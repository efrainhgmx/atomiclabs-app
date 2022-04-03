import React, { useState } from 'react';
import classnames from 'classnames';
import "./Card.css";
import exploraIMG from "../../../assets/images/explora.png";
import imaginaIMG from "../../../assets/images/imagina.png";
import conquistaIMG from "../../../assets/images/conquista.png";

const Card = () => {
    const [exploreClicked, setExploreClicked] = useState(false);
    const [imagineClicked, setImagineClicked] = useState(false);
    const [conquistClicked, setConquistClicked] = useState(false);

  return (
    <div className='Card'>
        <article onMouseOver={() => setExploreClicked(true)} onMouseLeave={() => setExploreClicked(false)} className={classnames("single-card", {
            touch: exploreClicked
        })}>
            <img src={exploraIMG} alt='Explora' loading='lazy' />
            <div className='separator'>
                <div className='large'></div>
                <div className='short'></div>
                <div className='large'></div>
            </div>
            <h2>EXPLORA</h2>
            <ul>
                <li>Innovación y <strong>creación tecnologíca</strong></li>
                <li><strong>UI/UX</strong></li>
                <li>Innovación</li>
            </ul>
        </article>

        <article onMouseOver={() => setImagineClicked(true)} onMouseLeave={() => setImagineClicked(false)} className={classnames("single-card", {
            touch: imagineClicked
        })}>
            <img src={imaginaIMG} alt='Explora' loading='lazy' />
            <div className='separator'>
                <div className='large'></div>
                <div className='short'></div>
                <div className='large'></div>
            </div>
            <h2>IMAGINA</h2>
            <ul>
                <li><strong>Estrategía</strong> Digital</li>
                <li><strong>Big Data</strong> y Análisis</li>
                <li><strong>Consultoria</strong> Técnica</li>
                <li><strong>Reducción</strong> de costos TI</li>
            </ul>
        </article>

        <article onMouseOver={() => setConquistClicked(true)} onMouseLeave={() => setConquistClicked(false)} className={classnames("single-card", {
            touch: conquistClicked
        })}>
            <img src={conquistaIMG} alt='Explora' loading='lazy' />
            <div className='separator'>
                <div className='large'></div>
                <div className='short'></div>
                <div className='large'></div>
            </div>
            <h2>CONQUISTA</h2>
            <ul>
                <li>Desarrollo tecnológico <strong>a la medida</strong></li>
                <li><strong>Ciberseguridad</strong></li>
                <li><strong>Servicios en la nube</strong></li>
            </ul>
        </article>
    </div>
  )
}

export default Card