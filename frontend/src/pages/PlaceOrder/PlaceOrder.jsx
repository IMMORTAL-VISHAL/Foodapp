import React, { useContext } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../context/StoreContext'

const PlaceOrder = () => {

  const {getTotatlCartAmount} = useContext(StoreContext)

  return (
    <form className='place-order'>
       <div className='place-order-left'>
        <p className='title'>Delivery Options</p>
        <div className='multi-fields'>
          <input type='text' placeholder='First name'/>
          <input type='text' placeholder='Last name'/>
        </div>
        <input type='email' placeholder='Email Address'/>
        <input type='text' placeholder='Street'/>
        <div className='multi-fields'>
          <input type='text' placeholder='City'/>
          <input type='text' placeholder='State'/>
        </div>
        <div className='multi-fields'>
          <input type='text' placeholder='Zip code'/>
          <input type='text' placeholder='Country'/>
        </div>
        <input type='text' placeholder='Phone' />
       </div>
       <div className='place-order-right'>
       <div className="cart-total">
            <h2>Cart Totals</h2>
            <div>
              <div className="cart-total-details">
              <p>Subtotal</p>
              <p>₹ {getTotatlCartAmount()}</p>
              </div>
              <hr/>
              <div className="cart-total-details">
                <p>Delivery Fee</p>
                <p>₹ {getTotatlCartAmount()===0?0:49}</p>
              </div>
              <hr/>
              <div className="cart-total-details">
                <b>Total</b>
                <b>₹ {getTotatlCartAmount()===0?0:getTotatlCartAmount()+49}</b>
              </div>
            </div>
            <button onClick={()=>navigate('/order')}>PROCEED TO PAYMENT</button>
          </div>
       </div>
    </form>
  )
}

export default PlaceOrder