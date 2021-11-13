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


function App() {

  useEffect(() => {
    Aos.init({duration: 2000})
  }, [])

  
  return (
   <>
   <LanguageState>
   <ImageCarousel/>
   <Tutorials/>
{/* editted */}
   <Card/>

   <HelplinePortal/>
   </LanguageState>

   </>
  );
}

export default App;
