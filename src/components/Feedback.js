import React from "react";

const Feedback = () => {
  return (
    <div id = "feedback">
      <h1>
        <b>Feedback Form</b>
      </h1>
      <form>
        <div className='form'>
          <div className='form-group'>
            <label htmlFor='exampleFormControlInput1'>Email address</label>
            <input
              type='email'
              className='form-control'
              id='exampleFormControlInput1'
              placeholder='name@example.com'
            />
          </div>
          <div className='form-group'>
            <label htmlFor='exampleFormControlInput1'>Contact Number</label>
            <input
              type='number'
              className='form-control'
              id='exampleFormControlInput1'
              placeholder='Number'
            />
          </div>
          <div className='form-group'>
            <label htmlFor='exampleFormControlSelect1'>
              Rate your experience of the website(out of 5)
            </label>
            <select className='form-control' id='exampleFormControlSelect1'>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
          <div className='form-group'>
            <label htmlFor='exampleFormControlTextarea1'>Any Suggestions?</label>
            <textarea
              className='form-control'
              id='exampleFormControlTextarea1'
              rows='3'
            ></textarea>
          </div>
          <div>Would you like to donate?</div>
          <div className='form-check form-check-inline'>
            <input
              className='form-check-input'
              type='radio'
              name='inlineRadioOptions'
              id='inlineRadio1'
              value='option1'
            />
            <label className='form-check-label' htmlFor='inlineRadio1'>
              Yes
            </label>
          </div>
          <div className='form-check form-check-inline'>
            <input
              className='form-check-input'
              type='radio'
              name='inlineRadioOptions'
              id='inlineRadio2'
              value='option2'
            />
            <label className='form-check-label' htmlFor='inlineRadio2'>
              No
            </label>
          </div>
          <div>
            If you are willing to donate we will reach out to you very soon
          </div>
          <div className='buttons'>
            <input type='submit' value='Submit' />{" "}
            <input type='reset' value='Reset' />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Feedback;
