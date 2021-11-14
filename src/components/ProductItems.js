import React from "react";
import { useContext } from "react";
import  { CartContext } from "../Context/CartContext/Cartcontext";



const ProductItems = ({item}) => {


    const {addToCart} = useContext(CartContext);


    const cartButtonClicked = () => {
        addToCart(item);
    }


    // console.log(item);



    if(item)
  return (
    <div class='col'>
      <div class='card h-100 bg-warning mx-4 my-3 mb-3 border-danger hover-shadow'>
        <img class='card-img-top img-fluid' src={item.img} alt='...'></img>
        <div class='card-header'>{item.name}</div>
        <div class='card-body'>
          <h5 class='card-title'><span  class = "text-muted text-decoration-line-through">Rs. {item.exPrice}</span> Rs.{item.Price}</h5>
          <p class = "discount">{item.discount}% OFF</p>
          <p class='card-text '>
            Delivery within 4 days (2 days for <i>Prime</i> members).
          </p>
          <button class = "btn btn-primary" onClick = {cartButtonClicked}>Add to cart</button>
        </div>
      </div>
    </div>
  );
  else return(<></>)
};

export default ProductItems;
