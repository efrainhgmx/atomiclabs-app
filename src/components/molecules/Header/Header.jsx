import React from 'react';
import { Link } from 'react-router-dom'
import "./Header.css";
import atomicLogo from "../../../assets/images/atomic-labs.webp";

const Header = () => {
  return (
    <header className='Header'>
        <Link to="/" rel="noopener noreferrer" aria-label='Ir al inicio'>
            <img className='header-image' src={atomicLogo} alt='Atomic Labs' width={162} height={81} loading="lazy"/>
        </Link>
    </header>
  )
}

export default Header;