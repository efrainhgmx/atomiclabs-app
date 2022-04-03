import React from 'react'
import { Link } from 'react-router-dom';
import { Header } from '../Header';
import "./Hero.css";

import astronautMobile from '../../../assets/images/heroAstronaut-mobile.png';
import astronautDesktop from '../../../assets/images/hero.png';

const Hero = () => {
  return (
    <section className='Hero'>
      <Header />
      <div className='hero-content__container'>
        <picture>
          <source srcSet={astronautDesktop} media="(min-width: 1024px)"/>
          <img className='hero-image' src={astronautMobile} alt="Astronauta" width={300} height={300} loading='lazy'/>
        </picture>

        <div className='hero-content__text'>
          <p>Desarrolla todo <span className='orange'>tu POTENCIAL</span> dentro del equipo de <span className='orange'>ATOMIC</span>LABS</p>
          <Link className='btn-primary' to="/" rel='noopener noreferrer'>¡Quiero ser parte!</Link> 
        </div>
      </div>
      <div className='more-info__container'>
          <div role="button" className='arrow-button' aria-label="Saber más"></div>
          <p>Quiero saber más</p>
      </div>
    </section>
  )
}

export default Hero;