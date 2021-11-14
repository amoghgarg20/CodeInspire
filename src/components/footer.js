import React from 'react'

const Footer = () => {
    return (
        <footer class="text-center text-lg-start bg-light text-muted">
  {/* <!-- Section: Social media --> */}
  <section
    class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom"
  >
    {/* <!-- Left --> */}
    <div class="me-5 d-none d-lg-block">
      <span>Get connected with us on our social media platforms:</span>
    </div>
    {/* <!-- Left --> */}

    {/* <!-- Right --> */}
    <div id="icons" class="ma">
      <a href="" class="me-4 text-reset">
        <i class="fab fa-facebook-f fa-lg"></i>
      </a>
      <a href="" class="me-4 text-reset">
        <i class="fab fa-twitter fa-lg "></i>
      </a>
      <a href="" class="me-4 text-reset">
        <i class="fab fa-google fa-lg "></i>
      </a>
      <a href="" class="me-4 text-reset">
        <i class="fab fa-instagram fa-lg"></i>
      </a>
      <a href="" class="me-4 text-reset">
        <i class="fab fa-linkedin fa-lg"></i>
      </a>
      <a href="" class="me-4 text-reset">
        <i class="fab fa-github"></i>
      </a> 
    </div>
    {/* <!-- Right --> */}
  </section>
  {/* <!-- Section: Social media --> */}

  {/* <!-- Section: Links  --> */}
  <section class="">
    <div class="container text-center text-md-start mt-5">
      {/* <!-- Grid row --> */}
      <div class="row mt-3">
        {/* <!-- Grid column --> */}
        <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
          {/* <!-- Content --> */}
          <h6 class="text-uppercase fw-bold mb-4">
            <i class="fas fa-gem me-3"></i>Company Office
          </h6>
          <p>
            {/* <!-- Here you can use rows and columns to organize your footer content. Lorem ipsum
            dolor sit amet, consectetur adipisicing elit. --> */}
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112088.64082830932!2d77.22377175820313!3d28.6066752!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5f7a1a10e4b%3A0x8e768370e7791cb9!2sdigital%20village%20india!5e0!3m2!1sen!2sin!4v1636728356080!5m2!1sen!2sin" width="300" height="200"  allowfullscreen="" loading="lazy"></iframe>
          </p>
        </div>
        {/* <!-- Grid column --> */}

        {/* <!-- Grid column --> */}
        <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
          {/* <!-- Links --> */}
          <h6 class="text-uppercase fw-bold mb-4">
            Products
          </h6>
          <p>
            <a href="#!" class="text-decoration-none text-black text-muted">Handicrafts</a>
          </p>
          <p>
            <a href="#!" class="text-decoration-none text-black text-muted">Hand-Made Utensils</a>
          </p>
          <p>
            <a href="#!" class="text-decoration-none text-black text-muted">Decorative Items</a>
          </p>
          <p>
            <a href="#!" class="text-black text-muted">and many more.......</a>
          </p>
        </div>
        {/* <!-- Grid column --> */}

        {/* <!-- Grid column --> */}
        <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
          {/* <!-- Links --> */}
          <h6 class="text-uppercase fw-bold mb-4">
            Useful links
          </h6>
          <p>
            <a href="#!" class="text-decoration-none text-black text-muted">Pricing</a>
          </p>
          <p>
            <a href="#!" class="text-decoration-none text-black text-muted">Settings</a>
          </p>
          <p>
            <a href="#!" class="text-decoration-none text-black text-muted">Orders</a>
          </p>
          <p>
            <a href="#!" class="text-decoration-none text-black text-muted">Help</a>
          </p>
        </div>
        {/* <!-- Grid column --> */}

        {/* <!-- Grid column --> */}
        <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
          {/* <!-- Links --> */}
          <h6 class="text-uppercase fw-bold mb-4">
            Contact
          </h6>
          <p><i class="fas fa-home me-3"></i> Shashi Garden, New delhi-110091, India</p>
          <p>
            <i class="fas fa-envelope me-3"></i>
            CodeInspire@ieee.com
          </p>
          <p><i class="fas fa-phone me-3"></i> + 01 234 567 88</p>
          <p><i class="fas fa-print me-3"></i> + 01 234 567 89</p>
        </div>
        {/* <!-- Grid column --> */}
      </div>
      {/* <!-- Grid row --> */}
    </div>
  </section>
  {/* <!-- Section: Links  --> */}

  {/* <!-- Copyright --> */}
  <div class="text-center p-4 text-mutec" >
    © 2021 Copyright:
    <a class="text-reset fw-bold" href="https://nsut.ac.in">HelpWomen.com</a>
  </div>
  {/* <!-- Copyright --> */}
</footer>
    )
}

export default Footer
