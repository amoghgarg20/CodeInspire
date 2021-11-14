import React from 'react'
import Cart from './Cart'

const CartItem = ({item}) => {
    return (
        <div className="cartitem" data-aos = "fade-up">
                    <div className="cart-product">
                        <div className="cart-p-image">
                            <img src={item.img} alt="" />
                        </div>
                        <div className="cart-p-det">
                            <p className ="cart-p-name">{item.name}</p>
                            <h4 class='card-title'><span  class = "text-muted text-decoration-line-through">Rs. {item.exPrice}</span> Rs.{item.Price}</h4>
                            </div>
                    </div>
                    <div className="cart-quantity">

                        <form >
                        <input type="number" value={item.quantity}  />
                        </form>
                    </div>
                    <div className="cart-remove">
                    <i class="bi bi-x-circle-fill"></i>
                    </div>
                </div>
    )
}

export default CartItem
