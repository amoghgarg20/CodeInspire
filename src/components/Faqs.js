import React from 'react'

const Faqs = () => {
    return (
        <div id = "faqs">
            <div class="heading">
        <h1><b>Frequently Asked Questions</b></h1>
    </div>
    <div class="accordion container py-5" id="accordionExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingOne">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              How to sell on HelpWomen if you don't know how to use aur website ?
            </button>
          </h2>
          <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              <strong>You just have to Contact us .</strong> Then we will provide you volunteers to help you get on our website .These volunteers will help you to get started and also give you some tutorials about how to use the website.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingTwo">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              How to change language to Hindi ?
            </button>
          </h2>
          <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              <strong>Click on the button "Change to Hindi" on HomeScreen</strong> 
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingThree">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
             How to report a complaint against cheating or harrashment ?
            </button>
          </h2>
          <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              Go to the helpine section. Where you will find different helpline numbers or You can report a complaint Through complaint box .We will look into the matter and help you.
            </div>
          </div>
        </div>
      </div>
            
        </div>
    )
}

export default Faqs
