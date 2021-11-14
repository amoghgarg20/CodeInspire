
import { useContext } from "react";
import "../card.css";
import  { CartContext } from "../Context/CartContext/Cartcontext";

import ProductItems from "./ProductItems";
function Product() {



  const {products ,addTocart} = useContext(CartContext);
  return (
    <div id='arrange' class='row row-cols-1 row-cols-md-3 g-12 py-5 '>
      {
        
        products.map((item)=>{
          return(
          <ProductItems key = {item.id} item = {item}/>
          )
        })
      }
      <ProductItems />
      
    </div>
  );
}

export default Product;


//   <div class='col'>
{/* <div class='card h-100 bg-warning mx-4 my-3 mb-3 border-danger hover-shadow'>
<img class='card-img-top img-fluid' src={img1} alt='...'></img>
<div class='card-header'>Windchimes</div>
<div class='card-body'>
  <h5 class='card-title'>Rs.300</h5>
  <p class='card-text text-muted'>10% OFF</p>
  <p class='card-text '>
    Delivery within 4 days (2 days for <i>Prime</i> members).
  </p>
</div>
</div>
</div>
<br />
<div class='col'>
<div class='card h-100 bg-warning mx-4 my-3 mb-3 border-danger'>
<img src={img2} class='card-img-top img-fluid' alt='...'></img>
<div class='card-header'>Garden Bells</div>
<div class='card-body'>
  <h5 class='card-title'>Rs. 250</h5>
  <p class='card-text text-muted'>7% OFF</p>
  <p class='card-text '>Delivery within 5 days </p>
</div>
</div>
</div>
<br />
<div class='col'>
<div class='card h-100 bg-warning mx-4 my-3 mb-3 border-danger'>
<img
  src={img3}
  style={
    ({ height: "200px" }, { width: "200px" }, { margin: "auto" })
  }
  class='card-img-top img-fluid'
  alt='...'
></img>
<div class='card-header'>Candle Holders</div>
<div class='card-body'>
  <h5 class='card-title'>Rs. 350</h5>
  <p class='card-text text-muted'>12% OFF</p>
  <p class='card-text '>
    Delivery within 2 days <i>Free</i> vouchers
  </p>
</div>
</div>
</div>
<br />
<div class='col'>
<div class='card h-100 bg-warning mx-4 my-3 mt-3 border-danger'>
<img
  src={img4}
  style={
    ({ height: "200px" }, { width: "200px" }, { margin: "auto" })
  }
  class='card-img-top img-fluid'
  alt='...'
></img>
<div class='card-header'>Antique Rasai Patina</div>
<div class='card-body'>
  <h5 class='card-title'>Rs. 500</h5>
  <p class='card-text text-muted'>8% OFF</p>
  <p class='card-text '>
    Delivery within 6 days. <i>Special Offers</i>
  </p>
</div>
</div>
</div>

<div class='col'>
<div class='card h-100 bg-warning mx-4 my-3 border-danger'>
<img
  src={img5}
  style={
    ({ height: "200px" }, { width: "200px" }, { margin: "auto" })
  }
  class='card-img-top img-fluid'
  alt='...'
></img>
<div class='card-header'>ShepherdHook</div>
<div class='card-body'>
  <h5 class='card-title'>Rs 450</h5>
  <p class='card-text text-muted'>13% OFF</p>
  <p class='card-text '>
    Delivery within 5 days (2 days for <i>Prime</i> members).
  </p>
</div>
</div>
</div>
{/* change */}

// <div class='col'>
// <div class='card h-100 bg-warning mx-4 my-3 border-danger'>
// <img
//   src={img6}
//   style={
//     ({ height: "200px" }, { width: "200px" }, { margin: "auto" })
//   }
//   class='card-img-top img-fluid'
//   alt='...'
// ></img>
// <div class='card-header'>Iron Handcuff</div>
// <div class='card-body'>
//   <h5 class='card-title'>Rs. 570</h5>
//   <p class='card-text text-muted'>19% OFF</p>
//   <p class='card-text '>Delivery within 3 days.</p>
// </div>
// </div>
// </div>

// <div class='col'>
// <div class='card h-100 bg-warning mx-4 my-3 border-danger'>
// <img
//   src={img7}
//   style={
//     ({ height: "200px" }, { width: "200px" }, { margin: "auto" })
//   }
//   class='card-img-top img-fluid'
//   alt='...'
// ></img>
// <div class='card-header'>Sword Canes</div>
// <div class='card-body'>
//   <h5 class='card-title'>Rs.290</h5>
//   <p class='card-text text-muted'>10% OFF</p>
//   <p class='card-text '>
//     Delivery within 4 days (2 days for <i>Prime</i> members).
//   </p>
// </div>
// </div>
// </div>

// <div class='col'>
// <div class='card h-100 bg-warning mx-4 my-3 border-danger'>
// <img
//   src={img8}
//   style={
//     ({ height: "200px" }, { width: "200px" }, { margin: "auto" })
//   }
//   class='card-img-top img-fluid'
//   alt='...'
// ></img>
// <div class='card-header'>Decorative crafts</div>
// <div class='card-body'>
//   <h5 class='card-title'>Rs.400</h5>
//   <p class='card-text text-muted'>16% OFF</p>
//   <p class='card-text '>Delivery within 5 days.</p>
// </div>
// </div>
// </div>

// <div class='col'>
// <div class='card h-100 bg-warning mx-4 my-3 border-danger'>
// <img
//   src={img9}
//   style={
//     ({ height: "200px" }, { width: "200px" }, { margin: "auto" })
//   }
//   class='card-img-top img-fluid'
//   alt='...'
// ></img>
// <div class='card-header'>Brass Crafts</div>
// <div class='card-body'>
//   <h5 class='card-title'>Rs.1500</h5>
//   <p class='card-text text-muted'>10% OFF</p>
//   <p class='card-text '>
//     Delivery within 4 days (2 days for <i>Prime</i> members).
//   </p>
// </div>
// </div>
// </div>
// <div class='col'>
// <div class='card h-100 bg-warning mx-4 my-3 border-danger'>
// <img
//   src={img10}
//   style={
//     ({ height: "200px" }, { width: "200px" }, { margin: "auto" })
//   }
//   class='card-img-top img-fluid'
//   alt='...'
// ></img>
// <div class='card-header'>Wood Crafts</div>
// <div class='card-body'>
//   <h5 class='card-title'>Rs.900</h5>
//   <p class='card-text text-muted'>11% OFF</p>
//   <p class='card-text '>Delivery within 5 days.</p>
// </div>
// </div>
// </div>
// <div class='col'>
// <div class='card h-100 bg-warning mx-4 my-3 border-danger'>
// <img
//   src={img11}
//   style={
//     ({ height: "200px" }, { width: "200px" }, { margin: "auto" })
//   }
//   class='card-img-top img-fluid'
//   alt='...'
// ></img>
// <div class='card-header'>Napkin Ring</div>
// <div class='card-body'>
//   <h5 class='card-title'>Rs.100</h5>
//   <p class='card-text text-muted'>10% OFF</p>
//   <p class='card-text '>
//     Delivery within 2 days (Today for <i>Prime</i> members).
//   </p>
// </div>
// </div>
// </div>
// <div class='col'>
// <div class='card h-100 bg-warning mx-4 my-3 border-danger'>
// <img src={img12} class='card-img-top img-fluid' alt='...'></img>
// <div class='card-header'>Book Stand</div>
// <div class='card-body'>
//   <h5 class='card-title'>Rs. 1200</h5>
//   <p class='card-text text-muted'>5% OFF</p>
//   <p class='card-text '>Delivery within 5 days.</p>
// </div>
// </div> */}