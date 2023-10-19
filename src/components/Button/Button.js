import './Button.css';

const Button = ({ isEnter, buttonClick }) => {


    return (
        <div>
            <button className='glow-on-hover' type="submit" onClick={buttonClick}>{isEnter ? 'Enter' : null}</button>
        </div>
    )
}
export default Button;