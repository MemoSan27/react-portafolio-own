import "./contact.css"
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useState } from "react";
import useIntersection from "../../hooks/useIntersection";

const Contact = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [active, setActive] = useState(false)
    const inputNull = { name: "", phone: "", email: "", company: "" };
    const [ elementRef, isIntersecting ] = useIntersection({ threshold: 0.4, });

    const sendEmail = data => {
        setActive(true)
        axios.defaults.headers.post['Content-Type'] = 'application/json';
        axios.post('https://formsubmit.co/ajax/memo2705@gmail.com', {
            name: `Nuevo mensaje de ${data.name}`,
            message: `${data.name}, de la empresa ${data.company} desea ponerse en contacto contigo. L@ puedes contactar este correo ${data.email} o a su numero telefónico ${data.phone}.`
        })
            .then(res => {
                reset(inputNull)
                setActive(false)
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Email sent success',
                    showConfirmButton: false,
                    timer: 1500
                  })
            })
            .catch(error => {
                console.error(error)
                Swal.fire({
                    position: 'center',
                    icon: 'error',
                    title: 'Error while sending your email.',
                    showConfirmButton: false,
                    timer: 1500
                  })  
            });
    }
    return (
        <div id="contacto" className="contacto">
            <h2 ref={elementRef} className={ isIntersecting ? "contact__title show" : "contact__title hidden"}   id="contact">Contact Me 😁</h2>
            <div ref={elementRef} className={ isIntersecting ? "formulario show" : "formulario hidden" } >
                <p className="contact__subtitle">I would be glad to contact you back as soon as possible!</p>
                <form onSubmit={handleSubmit(sendEmail)}
                className='form_container'>
                    <i className={ active ? 'sending email bx bx-mail-send bx-fade-right bx-lg' : 'email bx bx-mail-send bx-lg'}></i>
                    <div className="names_container">
                        <div className="input_container">
                            <label className="label" htmlFor="name">Name and Lastname:</label>
                            <input type="text" id='name' placeholder="Your complete name"  {...register('name')} required />
                        </div>
                    </div>
                    <div className="input_container">
                        <label className="label" htmlFor="email">Email:</label>
                        <input type="email" id='email' placeholder="Your e-mail"{...register('email')} required />
                    </div>
                    <div className="input_container">
                        <label className="label" htmlFor="phone">Cellphone (please incluide code of your country)</label>
                        <input type="text" id='phone' placeholder="Example: +526697321122" {...register('phone')} required />
                    </div>
                    <div className="input_container">
                        <label className="label" htmlFor="company">Company or institution: </label>
                        <input type="text" id='company' placeholder="Company, institution or startup's name" {...register('company')} required />
                    </div>
                    <button className='submit_btn'>
                        Send
                    </button>
                    <hr />
                    <p>Thanks for your visit and your contact!</p>
                    <p>I would be glad to be part of your team!</p>
                </form>
            </div>
        </div>
    );
};

export default Contact;