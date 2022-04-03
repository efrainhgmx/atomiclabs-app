import React, { useState, useEffect } from 'react';
import classnames from "classnames";
import { Progressbar } from '../../atoms';
import checkIMG from "../../../assets/images/checkform.png";
import "./Form.css";


const Form = () => {
  const [progress, setProgress] = useState(25);

  useEffect(() => {
    if(progress >= 100) setProgress(100); 
  }, [progress])

  return (
    <section className='Form'>
        <div className='counter-section'>
            <span className={classnames("number", {
                active: progress === 25,
                check: progress > 25
            })}>
                <p>{(progress > 25) ? <img src={checkIMG} alt="check" loading='lazy' width={25} height={25} /> : 1 }</p>
            </span>
            <span className={classnames("number", {
                active: progress === 50,
                check: progress > 50
            })}>
                <p>{(progress > 50) ? <img src={checkIMG} alt="check" loading='lazy' width={25} height={25} /> : 2 }</p>
            </span>
            <span className={classnames("number", {
                active: progress === 75,
                check: progress > 75
            })}>
                <p>{(progress > 75) ? <img src={checkIMG} alt="check" loading='lazy' width={25} height={25} /> : 3 }</p>
            </span>
            <span className={classnames("number", {
                active: progress === 100,
            })}>
                <p>4</p>
            </span>
        </div>
        <Progressbar bgcolor="#ff4c00" progress={progress}  height={12} />
        <button aria-label='Enviar' className='btn-form disabled' onClick={() => setProgress(prevState => prevState + 25)}>ENVIAR</button>
    </section>
  );
}

export default Form