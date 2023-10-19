import './PaymenMethod.css';

const PaymenMethod = () => {
    return (
        <div className='grid'>
            <div className='wrap'>
                <div id='header-placing'>Спосіб оплати</div>
                <div>
                    <br /><input type="radio" name="pay" value="" /><label>Оплтата при отриманні (накладний платіж)</label>
                    <br /><input type="radio" name="pay" value="" /><label>Онлайн-оплата (банківською картою)</label>
                    <textarea className='textarea' placeholder='Коментар'></textarea>
                </div>
            </div>
            <button className='form-submit'>Оформити замовлення</button>

        </div>
    )
}

export default PaymenMethod;