// import logo from './logo.svg';
// import './App.css';
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Product from "./ProductPage/prodt"
import 'bootstrap/dist/css/bootstrap.min.css';
import './card.css';
// Images
import img1 from "./Images/windchime2.jpg";
import img2 from "./Images/gardenbells.jpg";
import img3 from "./Images/candle2.jpg";
import img4 from "./Images/antiquerasaipatina.jpg";
import img5 from "./Images/ShepherdHook.jpg";
import img6 from "./Images/handcuff.jpg";
import img7 from "./Images/sword.jpg";
import img8 from "./Images/decorative.jpg";
import img9 from "./Images/brass.jpg";
import img10 from "./Images/wood.jpg";
import img11 from "./Images/ring.jpg";
import img12 from "./Images/bookstand.jpg";
function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    //windchimes 1 d
    //garden bells 2 d
    //candle holders 3 d
    //antique rasai patina 4 d
    //shepherd hook 5 d
    //iron handcuff 6 d
    //sword canes 7 d
    //decorative craft 8 d
    //brass craft 9 d
    //wood craft 10 d
    //Napkin ring 11 d
    //book stand 12 d
    <div id="arrange" class="row row-cols-1 row-cols-md-3 g-12">
        <div class="col">
          <div class="card h-100 bg-warning mx-4 my-3 mb-3 border-danger hover-shadow">
            <img class="card-img-top img-fluid" src={img1}   alt="..."></img>
            <div class="card-header">Windchimes</div>
            <div class="card-body">
              <h5 class="card-title">Rs.300</h5>
              <p class="card-text text-muted">10% OFF</p>
              <p class="card-text ">Delivery within 4 days (2 days for <i>Prime</i> members).</p>
            </div>
          </div>
        </div>
        <br/>
        <div class="col">
          <div class="card h-100 bg-warning mx-4 my-3 mb-3 border-danger">
            <img src={img2}  class="card-img-top img-fluid" alt="..."></img>
            <div class="card-header">Garden Bells</div>
            <div class="card-body">
              <h5 class="card-title">Rs. 250</h5>
              <p class="card-text text-muted">7% OFF</p>
              <p class="card-text ">Delivery within 5 days </p>
            </div>
          </div>
        </div>
        <br/>
        <div class="col">
          <div class="card h-100 bg-warning mx-4 my-3 mb-3 border-danger">
            <img src={img3} style={{height:"200px"}, {width:"200px"},{margin:"auto"}} class="card-img-top img-fluid" alt="..."></img>
            <div class="card-header">Candle Holders</div>
            <div class="card-body">
              <h5 class="card-title">Rs. 350</h5>
              <p class="card-text text-muted">12% OFF</p>
              <p class="card-text ">Delivery within 2 days <i>Free</i> vouchers</p>
            </div>
          </div>
        </div>
        <br/>
        <div class="col">
          <div class="card h-100 bg-warning mx-4 my-3 mt-3 border-danger">
            <img src={img4} style={{height:"200px"}, {width:"200px"},{margin:"auto"}} class="card-img-top img-fluid" alt="..."></img>
            <div class="card-header">Antique Rasai Patina</div>
            <div class="card-body">
              <h5 class="card-title">Rs. 500</h5>
              <p class="card-text text-muted">8% OFF</p>
              <p class="card-text ">Delivery within 6 days. <i>Special Offers</i></p>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card h-100 bg-warning mx-4 my-3 border-danger">
            <img src={img5} style={{height:"200px"}, {width:"200px"},{margin:"auto"}} class="card-img-top img-fluid" alt="..."></img>
            <div class="card-header">ShepherdHook</div>
            <div class="card-body">
              <h5 class="card-title">Rs 450</h5>
              <p class="card-text text-muted">13% OFF</p>
              <p class="card-text ">Delivery within 5 days (2 days for <i>Prime</i> members).</p>
            </div>
          </div>
        </div>
{/* change */}
        <div class="col">
          <div class="card h-100 bg-warning mx-4 my-3 border-danger">
            <img src={img6} style={{height:"200px"}, {width:"200px"},{margin:"auto"}} class="card-img-top img-fluid" alt="..."></img>
            <div class="card-header">Iron Handcuff</div>
            <div class="card-body">
              <h5 class="card-title">Rs. 570</h5>
              <p class="card-text text-muted">19% OFF</p>
              <p class="card-text ">Delivery within 3 days.</p>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card h-100 bg-warning mx-4 my-3 border-danger">
            <img src={img7} style={{height:"200px"}, {width:"200px"},{margin:"auto"}} class="card-img-top img-fluid" alt="..."></img>
            <div class="card-header">Sword Canes</div>
            <div class="card-body">
              <h5 class="card-title">Rs.290</h5>
              <p class="card-text text-muted">10% OFF</p>
              <p class="card-text ">Delivery within 4 days (2 days for <i>Prime</i> members).</p>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card h-100 bg-warning mx-4 my-3 border-danger">
            <img src={img8} style={{height:"200px"}, {width:"200px"},{margin:"auto"}} class="card-img-top img-fluid" alt="..."></img>
            <div class="card-header">Decorative crafts</div>
            <div class="card-body">
              <h5 class="card-title">Rs.400</h5>
              <p class="card-text text-muted">16% OFF</p>
              <p class="card-text ">Delivery within 5 days.</p>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card h-100 bg-warning mx-4 my-3 border-danger">
            <img src={img9} style={{height:"200px"}, {width:"200px"},{margin:"auto"}} class="card-img-top img-fluid" alt="..."></img>
            <div class="card-header">Brass Crafts</div>
            <div class="card-body">
              <h5 class="card-title">Rs.1500</h5>
              <p class="card-text text-muted">10% OFF</p>
              <p class="card-text ">Delivery within 4 days (2 days for <i>Prime</i> members).</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100 bg-warning mx-4 my-3 border-danger">
            <img src={img10} style={{height:"200px"}, {width:"200px"},{margin:"auto"}} class="card-img-top img-fluid" alt="..."></img>
            <div class="card-header">Wood Crafts</div>
            <div class="card-body">
              <h5 class="card-title">Rs.900</h5>
              <p class="card-text text-muted">11% OFF</p>
              <p class="card-text ">Delivery within 5 days.</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100 bg-warning mx-4 my-3 border-danger">
            <img src={img11} style={{height:"200px"}, {width:"200px"},{margin:"auto"}} class="card-img-top img-fluid" alt="..."></img>
            <div class="card-header">Napkin Ring</div>
            <div class="card-body">
              <h5 class="card-title">Rs.100</h5>
              <p class="card-text text-muted">10% OFF</p>
              <p class="card-text ">Delivery within 2 days (Today for <i>Prime</i> members).</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100 bg-warning mx-4 my-3 border-danger">
            <img src={img12} class="card-img-top img-fluid" alt="..."></img>
            <div class="card-header">Book Stand</div>
            <div class="card-body">
              <h5 class="card-title">Rs. 1200</h5>
              <p class="card-text text-muted">5% OFF</p>
              <p class="card-text ">Delivery within 5 days.</p>
            </div>
          </div>
        </div>
        
      </div>

    // <Router>

    // </Router>

  );
}

export default App;
