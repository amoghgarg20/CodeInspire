import React, { createContext, useState } from 'react';


export const LanguageContext =createContext();

const English  = {
    HelplinePortalTitle : "HELPLINE PORTAL",
    HelplineNumberTitle : "Helpline number",
    HelplineNumber1 :"Women Helpline ( All India )-Women In Distress",
    HelplineNumber2 : "Helpline Number to caplaint a cyber crime (Delhi, Rajasthan, Uttarakhand, Chhattisgarh,Uttar Pradesh, Assam,Tamil Nadu and Andhra Pradesh)24*7",
    HelplineNumber3: "National Commison For Women (NCW) ( Domestic voilence 24x7 helpline for Sexual Voilence and harrashment )",
    ComplaintBoxTitle:"Complaint Box",
    ComplaintName: "Name",
    ComplaintNamePlaceholder: "Enter Your name",
    ComplaintEmail:"Email",
    ComplaintEmailPlaceholder:"Enter your email",
    ComplaintLabel: "Complaint",
    ComplaintLablePlaceholder: "Write your Complaint ... ",
    ComplaintSubmit: "Submit Complaint",
    changeLanguagebtn: "भाषा बदलें"

}

const Hindi = {
    HelplinePortalTitle : "हेल्पलाइन पोर्टल",
    HelplineNumberTitle : "हेल्पलाइन नंबर",
    HelplineNumber1 :"महिला हेल्पलाइन (अखिल भारतीय) - संकट में महिलाएं",
    HelplineNumber2 : "साइबर अपराध की शिकायत के लिए हेल्पलाइन नंबर(दिल्ली, राजस्थान, उत्तराखंड, छत्तीसगढ़, उत्तर प्रदेश, असम, तमिलनाडु और आंध्र प्रदेश)24*7",
    HelplineNumber3: "महिलाओं के लिए राष्ट्रीय आयोग (एनसीडब्ल्यू) (यौन हिंसा और उत्पीड़न के लिए घरेलू हिंसा 24x7 हेल्पलाइन)",
    ComplaintBoxTitle:"शिकायत फ़ॉर्म",
    ComplaintName: "नाम",
    ComplaintNamePlaceholder: "अपना नाम लिखें",
    ComplaintEmail:"ईमेल",
    ComplaintEmailPlaceholder:"अपना ईमेल लिखें",
    ComplaintLabel: "शिकायत",
    ComplaintLablePlaceholder: "अपनी शिकायत लिखें... ",
    ComplaintSubmit: "शिकायत दर्ज करें",
    changeLanguagebtn: "Change Language"

}

const LanguageState = (props)=>{
    const [isEnglish, setsEnglish] = useState(true);
    const [Language, setLanguage] = useState(English);

    const changeLanguage = ()=>{
        setsEnglish(!isEnglish);
        
        if(isEnglish){
            setLanguage(English);
        
        }
        else{
            setLanguage(Hindi);
        }
    }
return(
    <LanguageContext.Provider
    value ={{
        Language,
        changeLanguage 
    }}>
        {props.children}
    </LanguageContext.Provider>
)
   

}

export default LanguageState;