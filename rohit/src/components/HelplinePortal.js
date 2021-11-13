import React, { useContext } from "react";
import { LanguageContext } from "../Context/LanguageContext/LanguageContext";






const HelplinePortal = () => {

  const {Language, changeLanguage} = useContext(LanguageContext)
  return (
    <div class='container helpline-portal'>

      <h2 className='hp-header'>{Language.HelplinePortalTitle}</h2>

      <button onClick ={changeLanguage}  className ="btn changeLanguage">{Language.changeLanguagebtn}</button>

      <div>
        <div className='helpline'>
          <i className='bi bi-headset'>{Language.HelplineNumberTitle}</i>
        </div>
        <div className='helpline-number'>
          <ul>
            <li>
              <i class='bi bi-lightbulb-fill'></i>
              {Language.HelplineNumber1} 
              <a href='tel:1091' >1091</a>
            </li>
            <li>
              <i class='bi bi-lightbulb-fill'></i>
              {Language.HelplineNumber2}
              <a href='tel:155260'>155260</a>
            </li>
            <li>
              <i class='bi bi-lightbulb-fill'></i>
              {Language.HelplineNumber3}
              <a href='tel:7827170170'>7827170170</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="compliant-box">
          <h2 className="complaint-header">{Language.ComplaintBoxTitle}</h2>

          <form class ="complaint-form" >
              <label htmlFor="name">{Language.ComplaintName}: </label>
              <input type="text" name="name" id="name" placeholder= {Language.ComplaintNamePlaceholder} />
              <label htmlFor="email">{Language.ComplaintEmail}: </label>
              <input type="email" name="email" id="email" placeholder ={Language.ComplaintNamePlaceholder} />

              <label htmlFor="text-box">{Language.ComplaintLabel} : </label>
              <textarea name="text-box" id="text-box" cols="30" rows="10" placeholder ={Language.ComplaintLablePlaceholder}></textarea>

              <input type="submit" value={Language.ComplaintSubmit} className="btn"/>
          </form>
      </div>

    </div>
  );
};

export default HelplinePortal;
