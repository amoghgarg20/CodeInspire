
import React, { useEffect, useRef, useState } from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {

    const [loggedIn, setLoggedIn] = useState(false)

    return (
        <div>
             <nav id="navbar" class="flex-nav">
    <div class="flex-nav-left">
      <Link to="/" class="underline-animation">Home</Link>
      <Link to="/products" class="underline-animation">Products</Link>
      <Link to="/helpline" class="underline-animation">Helpline</Link>
      <Link to="/feedback" class="underline-animation">Feedback</Link>
      <Link to="/faq" class="underline-animation">FAQ</Link>
    </div>
    <h2 class="flex-nav-center"></h2>
    <div class="flex-nav-right">
        <Link to="/cart" class="underline-animation">Cart</Link>
        <Link to="/login" class="underline-animation">Log In</Link>
    </div>
  </nav> 
        </div>
    )
}

export default Navbar
