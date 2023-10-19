import './CardLogin.css';
import InputLogin from '../../components/InputLogin/InputLogin';
import Button from '../../components/Button/Button';
import React, { useState } from 'react';
import ValidationWindow from '../../components/ValidationWindow/ValidationWindow';
import { useNavigate } from "react-router-dom";

const regex1 = /\S{1,4}/;
const regex2 = /\S{5,9}/;
const regex3 = /\S{10,}/;

const CardLogin = () => {

    const navigate = useNavigate();

    const [eye, setEye] = useState(false);
    const [validModal, setValidModal] = useState({
        loginModal: false,
        passwordModal: false,
    })
    const [inputValue, setInputValue] = useState({
        Login: '',
        Password: '',
    })
    const [stateRegex, setStateRegex] = useState({
        testLogin1: false,
        testLogin2: false,
        testLogin3: false,
        testPassword1: false,
        testPassword2: false,
        testPassword3: false,
    })

    const includsLogin = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        if (name === 'Login') {
            validModal.loginModal = true;
            stateRegex.testLogin1 = regex1.test(value);
            stateRegex.testLogin2 = regex2.test(value);
            stateRegex.testLogin3 = regex3.test(value);
        }
        if (name === 'Password') {
            validModal.passwordModal = true;
            stateRegex.testPassword1 = regex1.test(value);
            stateRegex.testPassword2 = regex2.test(value);
            stateRegex.testPassword3 = regex3.test(value);
        }

        if (inputValue.Login === '') {
            validModal.loginModal = false;
        }
        if (inputValue.Password === '') {
            validModal.passwordModal = false;
        }

        setInputValue(values => ({ ...values, [name]: value }));
    }


    const buttonClick = (event) => {
        event.preventDefault();
        if (stateRegex.testLogin3, stateRegex.testPassword3) {
            localStorage.setItem("token", "154dfd541");
            inputValue.Login = '';
            inputValue.Password = '';
            navigate("/main");
        }
    }

    return (
        <div className='card-login'>
            <InputLogin isLogin includsLogin={includsLogin} inputValueLogin={inputValue.Login} />
            <ValidationWindow validLogin={validModal.loginModal} testLogin1={stateRegex.testLogin1}
                testLogin2={stateRegex.testLogin2} testLogin3={stateRegex.testLogin3} />
            <br /><InputLogin eye={eye} setEye={setEye} includsLogin={includsLogin} inputValuePassword={inputValue.Password} />
            <ValidationWindow validPassword={validModal.passwordModal} testPassword1={stateRegex.testPassword1}
                testPassword2={stateRegex.testPassword2} testPassword3={stateRegex.testPassword3} />
            <br /><Button isEnter buttonClick={buttonClick} />
        </div>
    )
}

export default CardLogin;