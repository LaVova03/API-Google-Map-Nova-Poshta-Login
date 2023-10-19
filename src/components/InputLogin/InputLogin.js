import './InputLogin.css';
import { ImEye } from "react-icons/im";
import { ImEyeBlocked } from "react-icons/im";

const InputLogin = ({ isLogin, eye, setEye, includsLogin, inputValueLogin, inputValuePassword }) => {

    return (
        <div>
            <form>
                <input
                    type={!isLogin && !eye ? 'password' : 'text'}
                    name={isLogin ? 'Login' : 'Password'}
                    placeholder={isLogin ? 'Login' : 'Password'}
                    className='input-login'
                    onChange={includsLogin}
                    value={isLogin ? inputValueLogin : inputValuePassword}
                    autoComplete={!isLogin ? 'new-password' : undefined}
                />
                {!isLogin && !eye ?
                    (<button onClick={(event) => { event.preventDefault(); setEye(true) }} className='button-eye'>
                        <ImEyeBlocked id='eye-width' />
                    </button>) :
                    null ||
                    (!isLogin && eye ?
                        <button onClick={(event) => { event.preventDefault(); setEye(false) }} className='button-eye' >
                            <ImEye id='eye-width' />
                        </button> : null)
                }
            </form>
        </div >
    )
}

export default InputLogin;