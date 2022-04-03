import React from 'react';
import "./Card.css";
import exploraIMG from "../../../assets/images/explora.png";

const Card = () => {
  return (
    <div className='Card'>
        <article className='single-card'>
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
    </div>
  )
}

export default Card