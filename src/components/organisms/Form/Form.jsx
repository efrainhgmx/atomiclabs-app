import React from 'react';
import { Progressbar } from '../../atoms';
import "./Form.css";


const Form = () => {

  

  return (
    <section className='Form'>
        <Progressbar bgcolor="orange" progress='30'  height={15} />
    </section>
  );
}

export default Form