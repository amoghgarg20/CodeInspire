
import React, { useEffect, useRef, useState } from 'react'

const Navbar = () => {

    const [loggedIn, setLoggedIn] = useState(false)

    return (
        <div>
             <nav id="navbar" class="flex-nav">
    <div class="flex-nav-left">
      <a href="/" class="underline-animation">Our Moto</a>
      <a href="#Products" class="underline-animation">Products</a>
      <a href="/helpline" class="underline-animation">Helpline</a>
      <a href="/" class="underline-animation">Feedback</a>
      <a href="/" class="underline-animation">FAQ</a>
    </div>
    <h2 class="flex-nav-center"></h2>
    <div class="flex-nav-right">
        <a href="#login" class="underline-animation">Log In</a><a href="#signup" class="underline-animation">Sign up</a>
    </div>
  </nav> 
        </div>
    )
}

export default Navbar
