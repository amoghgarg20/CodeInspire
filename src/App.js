import React, {useEffect} from 'react';
import ImageCarousel from './components/ImageCarousel';
import Tutorials from './components/Tutorials';
import 'animate.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap-icons/font/bootstrap-icons.css'
import HelplinePortal from './components/HelplinePortal';
import LanguageState from './Context/LanguageContext/LanguageContext';
import Card from './components/Products';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Product from './components/Products';
import Navbar from './components/Navbar';
import LoginIn from './components/LoginIn';
import SignUp from './components/signUp';
import Feedback from './components/Feedback';
import Cart from './components/Cart';
import CartState from './Context/CartContext/Cartcontext';
import Footer from './components/footer';
import Faqs from './components/Faqs';



function App() {

  useEffect(() => {
    Aos.init({duration: 2000})
  }, [])

  
  return (
   <>
   <LanguageState>
     <CartState>
     <Router>
       <Navbar/>


       <Switch>
         <Route exact path ="/">
           <ImageCarousel/>
           <Tutorials/>
         </Route>

         <Route exact path ="/products">
           <Product/>
         </Route>


         <Route exact path ="/helpline">
           <HelplinePortal/>
         </Route>

         <Route exact path ="/login">
           <LoginIn/>
         </Route>


         <Route exact path ="/signup">
           <SignUp/>
         </Route>

         <Route exact path = "/feedback">
           <Feedback/>
         </Route>

         <Route exact path = "/cart">
           <Cart/>
         </Route>

         <Route exact path = "/faq">
           <Faqs/>
         </Route>
       </Switch>
       <Footer/>

     </Router>
   </CartState>
   </LanguageState>

   </>
  );
}

export default App;
