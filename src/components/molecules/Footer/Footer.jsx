import React from 'react';
import { Link } from "react-router-dom";
import linkedinMobile from "../../../assets/images/linkedin.png";
import linkedinPC from "../../../assets/images/linkedin2x.png";
import twitterMobile from "../../../assets/images/twitter.png";
import twitterPC from "../../../assets/images/twitter2x.png";
import "./Footer.css";

const Footer = () => {

    const year = new Date().getFullYear();
  return (
    <footer className='Footer'>
        <p>{`©${year} AtomicLabs. Todos los derechos reservados.`}</p>
        <div className='social-container'>
            <Link to="/" className='btn-privacy' rel="noopener noreferrer" target="_blank">Aviso de privacidad</Link>
            <a href='https://www.linkedin.com/company/atomic-mexico' rel='noopener noreferrer' target="_blank">
                <picture>
                    <source srcSet={linkedinPC} media="(min-width: 1024px)"/>
                    <img src={linkedinMobile} width={18} height={18} alt="Linkedin" loading='lazy'/>
                </picture>
            </a>
            <a href='https://twitter.com/atomicmexico' rel='noopener noreferrer' target="_blank">
                <picture>
                    <source srcSet={twitterPC} media="(min-width: 1024px)"/>
                    <img src={twitterMobile} width={18} height={18} alt="Linkedin" loading='lazy'/>
                </picture>
            </a>
        </div>
    </footer>
  )
}

export default Footer