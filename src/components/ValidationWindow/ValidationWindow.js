import './ValidationWindow.css';
import Image from '../../assets/circle.png'

const ValidationWindow = ({ validLogin, validPassword, testLogin1, testLogin2, testLogin3, testPassword1, testPassword2, testPassword3 }) => {
    let textLogin1 = 'weak login';
    let textLogin2 = 'average login';
    let textLogin3 = 'good login';
    let textPassword1 = 'weak password';
    let textPassword2 = 'average password';
    let textPassword3 = 'good password';

    return (
        validLogin ?
            (<div className={validLogin ? 'valid-modal' : 'not-valid-modal'}>
                <label style={testLogin1 && !testLogin2 ? { color: 'LightCoral ' } :
                    testLogin1 && testLogin2 && !testLogin3 ? { color: 'orange' } :
                        testLogin1 && testLogin2 && testLogin3 ? { color: 'Lime' } : { color: 'black' }
                }>{testLogin1 && !testLogin2 ? textLogin1 :
                    testLogin1 && testLogin2 && !testLogin3 ? textLogin2 :
                        testLogin1 && testLogin2 && testLogin3 ? (
                            <span>{textLogin3} <img className='excellent' src={Image} alt="logo" /></span>
                        ) : null
                    }</label>
            </div >)
            :
            validPassword ?
                (<div className={validPassword ? 'valid-modal' : 'not-valid-modal'} >
                    <label style={testPassword1 && !testPassword2 ? { color: 'LightCoral ' } :
                        testPassword1 && testPassword2 && !testPassword3 ? { color: 'orange' } :
                            testPassword1 && testPassword2 && testPassword3 ? { color: 'Lime' } : { color: 'black' }
                    }> {testPassword1 && !testPassword2 ? textPassword1 :
                        testPassword1 && testPassword2 && !testPassword3 ? textPassword2 :
                            testPassword1 && testPassword2 && testPassword3 ? (
                                <span>{textPassword3} <img className='excellent' src={Image} alt="logo" /></span>
                            ) : null
                        }</label>
                </div >) : null
    )
}

export default ValidationWindow;