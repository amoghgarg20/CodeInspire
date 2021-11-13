import React from 'react'

const CartItem = () => {
    return (
        <div className="cartitem" data-aos = "fade-up">
                    <div className="cart-product">
                        <div className="cart-p-image">
                            <img src={'https://cdn.shopify.com/s/files/1/0030/9759/1872/products/EL-003-246_A_1024x1024@2x.jpg?v=1633760247'} alt="" />
                        </div>
                        <div className="cart-p-det">
                            <p className ="cart-p-name">'Conical Ivory' Handcrafted Table Lamp In Mango Wood (13 Inch)</p>
                            <p className="cart-p-price">₹ <span>1649</span>.00</p>
                            </div>
                    </div>
                    <div className="cart-quantity">

                        <form >
                        <input type="number" value="1" />
                        </form>
                    </div>
                    <div className="cart-remove">
                    <i class="bi bi-x-circle-fill"></i>
                    </div>
                </div>
    )
}

export default CartItem
