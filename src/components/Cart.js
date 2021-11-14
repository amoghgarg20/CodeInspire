import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from '../Context/CartContext/Cartcontext'
import CartItem from './CartItem'

const Cart = () => {


    const {cartItems} = useContext(CartContext);

    let totalAmounnt = 0;

    for (let i = 0; i < cartItems.length; i++) {
        const cart = cartItems[i];

        totalAmounnt+= cart.Price*cart.quantity;
        
    }

    if(cartItems.length > 0){
    return (
        <div id ="cart">
            <div className ="cart-container">
            <div className="cartheader">
                <ul >
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
            </div>

            {cartItems.map((item)=>{
                return(
                    <CartItem key = {item.id} item = {item}/>
                )
            })}

            <div className="total ">
               <p className ="total-head">Total</p>
               <p className ="total-price">Rs. {totalAmounnt}.00</p>
            </div>

            </div>
        </div>
    )
    }
    else{
        return (
            <div id ="cart">
                <div className ="cart-container">
                <div className="cartheader">
                    <ul >
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
                </div>

                <div class= "empty-cart">
                    <p>Your cart is empty :(</p>
                    <Link to ="/products" class='btn btn-primary' >Add Products</Link>
                </div>
    
                <div className="total ">
                   <p className ="total-head">Total</p>
                   <p className ="total-price">Rs. {totalAmounnt}.00</p>
                </div>

                <div className ="buy-now">
                    <button className="btn btn-primary">Pay Now</button>
                </div>
    
                </div>
            </div>
        )

    }

}

export default Cart
