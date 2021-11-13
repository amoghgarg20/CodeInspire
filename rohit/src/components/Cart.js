import React from 'react'
import CartItem from './CartItem'

const Cart = () => {
    return (
        <div id ="cart">
            <div className ="cart-container">
            <div className="cartheader">
                <ul className ="">
                    <li className ="product">
                        Procduct
                    </li>
                    <li className ="price">
                        Quantity
                    </li>
                    <li className ="remove">
                        Remove
                    </li>

                </ul>
                <CartItem/>
                <CartItem/>
                <CartItem/>
                
            </div>
            </div>
        </div>
    )
}

export default Cart
