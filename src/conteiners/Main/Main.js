import './Main.css';
import PlacingAnOrder from '../../components/PlacingAnOrder/PlacingAnOrder';
import Register from '../../components/Register/Register';
import PaymenMethod from '../../components/PaymentMethod/PaymenMethod';

const Main = () => {
    return (
        <div id='main'>
            <h1 className='register-h1'>Оформлення замовлення</h1>
            <div className='parent'>
                <Register />
                <PlacingAnOrder />
                <PaymenMethod />
            </div>
        </div>
    )
}

export default Main;