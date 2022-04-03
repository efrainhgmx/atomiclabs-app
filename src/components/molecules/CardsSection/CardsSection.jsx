import React from 'react';
import { Card } from '../../atoms';
import "./CardsSection.css";

const CardsSection = () => {
  return (
    <section className='CardsSection'>
        <p className='text'>SOMOS EL BRAZO DERECHO <span className='orange'>DE LA TECNOLOGÍA</span></p>
        <Card />
    </section>
  )
}

export default CardsSection