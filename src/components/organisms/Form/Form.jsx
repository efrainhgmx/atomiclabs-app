import React, { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import classnames from "classnames";
import { Progressbar } from '../../atoms';
import checkIMG from "../../../assets/images/checkform.png";
import meditationIMG from "../../../assets/images/meditando.png"
import "./Form.css";


const Form = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  const [progress, setProgress] = useState(25);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    setCounter(prevState => prevState + 1);
    if(progress >= 100) {
        setProgress(100);
        setCounter(4)
    } 
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

        <div className='title'>
        <span className='number active'>
            <p>{counter}</p>
        </span>
        {(counter === 1) &&<h2> TE QUEREMOS <span className='orange'>CONOCER</span></h2>}
        {(counter === 2) &&<h2> VALIDA TU <span className='orange'>CELULAR</span></h2>}
        {(counter === 3) &&<h2> CÓDIGO DE <span className='orange'>VERIFICACIÓN</span></h2>}
        {(counter === 4) &&<h2> TERMINOS Y <span className='orange'>CONDICIONES</span></h2>}
        </div>

        <div className='form-section'>
            <form onSubmit={handleSubmit(onSubmit)}>
                {(counter === 1) && (
                    <>
                        <p>Queremos saber que eres, por favor ingresa los siguientes datos.</p>
                        <label>Nombres(s)</label>
                        <input type="text" {...register("firstName", { required: true, minLength: 5 })}/> <span className='block'></span>
                        {errors.firstName && <span className='red'>El nombre requiere minimo 5 carácteres</span>}

                        <label>Apellidos(s)</label>
                        <input type="text" {...register("lastName", { required: true })}/> <span className='block'></span>
                        {errors.lastName && <span className='red'>Por favor llena este campo</span>}
                    </>
                )}

                {(counter === 2) && (
                    <>
                        <p>Queremos saber que eres, por favor ingresa los siguientes datos.</p>
                    
                        <label>Número de Celular</label>
                        <input type="number" {...register("cellphone", { required: true, minLength: 3 })}/> <span className='block'></span>
                        {errors.cellphone && <span className='red'>Por favor llena este campo</span>}
                    </>
                )}

                {(counter === 3) && (
                    <>
                        <p>Queremos saber que eres, por favor ingresa los siguientes datos.</p>
                        <label>Nombres(s)</label>
                        <input type="text" {...register("firstName", { required: true, minLength: 5 })}/> <span className='block'></span>
                        {errors.firstName && <span className='red'>El nombre requiere minimo 5 carácteres</span>}

                        <label>Apellidos(s)</label>
                        <input type="text" {...register("lastName", { required: true })}/> <span className='block'></span>
                        {errors.lastName && <span className='red'>Por favor llena este campo</span>}
                    </>
                )}

                {(counter === 4) && (
                    <>
                        <p>Queremos saber que eres, por favor ingresa los siguientes datos.</p>
                        <label>Nombres(s)</label>
                        <input type="text" {...register("firstName", { required: true, minLength: 5 })}/> <span className='block'></span>
                        {errors.firstName && <span className='red'>El nombre requiere minimo 5 carácteres</span>}

                        <label>Apellidos(s)</label>
                        <input type="text" {...register("lastName", { required: true })}/> <span className='block'></span>
                        {errors.lastName && <span className='red'>Por favor llena este campo</span>}
                    </>
                )}
                <input type='submit' value="Enviar" aria-label='Enviar' className='btn-form' onClick={() => setProgress(prevState => prevState + 25)
                   }/>
            </form>

            <figure>
                <img src={meditationIMG} alt="Astronauta" loading='lazy'/>
            </figure>
        </div>
    </section>
  );
}

export default Form