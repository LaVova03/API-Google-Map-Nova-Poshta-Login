import './Register.css';
import Image from '../../assets/images.png';
import Image2 from '../../assets/besplatnaya-dostavka-po-ukraine.jpg';
import React, { useState, useEffect } from 'react';

const Register = () => {

    const [inputName, setInputName] = useState('');
    const [inputPhone, setInputPhone] = useState('');
    const [inputMail, setInputMail] = useState('');
    const [isFlipped, setFlipped] = useState(false);

    useEffect(() => {
        const intervalId = setInterval(() => {
            if (isFlipped === false) {
                setFlipped(true)
            }
            if (isFlipped === true) {
                setFlipped(false)
            }
        }, 2000);

        return () => {
            clearInterval(intervalId);
        };
    }, [isFlipped]);



    return (
        <div className='grid'>
            <div className='wrap'>
                <div id='header-placing'>Контактні дані</div>
                <div className='parent-register'>
                    <div>
                        <br /><label className='register-lable'>ПІП:</label>
                        <br /><br /><label className='register-lable'>Телефон:</label>
                        <br /><br /><label className='register-lable'>Електронна пошта:</label>
                    </div>
                    <form className='register-form' defaultValue='value' >
                        <br /><label className='register-lable'>
                            <input className='input-register' type='text' value={inputName} onChange={(event) => { setInputName(event.target.value) }} />
                        </label>
                        <br /><br /><label className='register-lable'>
                            <input className='input-register' type='text' value={inputPhone} onChange={(event) => { setInputPhone(event.target.value) }} />
                        </label>
                        <br /><br /><label className='register-lable'>
                            <input className='input-register' type='text' value={inputMail} onChange={(event) => { setInputMail(event.target.value) }} />
                        </label>
                    </form>
                </div>
            </div>
            <div className={isFlipped ? 'main-image' : 'second-image'}>
                <img src={isFlipped ? Image : Image2} alt='logo'></img>
            </div>
        </div>
    )
}

export default Register;