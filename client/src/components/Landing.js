import React from 'react';
import { Link } from 'react-router-dom';
import CookieConsent from "react-cookie-consent";

const Landing = () => {

    return (

        document.body.style.background = "black",
            <div style={{ textAlign: 'center' }} className="white-text black" >
            
            <h1 style={{color: 'white'}}><b>
                AP Contact
                </b>
            </h1>
            <h4>
                Powerful Email Marketing Made Easy.
            </h4>
        <br />
            <div>
                <h5><u>Application Features:</u></h5>
                <p><i>Send bulk survey emails that reach your users.</i></p>
                <p><i>Contact our team to get started with some custom templates for your business.</i></p>
                <p><i>More reviews, More imporovement.</i></p>
                <p><i>Track your services by getting review from users.</i></p>
                <p><i>Email marketing service that is affordable, easy to use, faster, well, and funner.</i></p>
                <p><i>We surely help your business reach more customers.</i></p>

            </div>
            <br />
            <div>
                <h5><u>Pricing:</u></h5>
                <p><i>We understand your needs, No-contract, Prepaid service to bring more accessibility.</i></p>
                <p><i>1 Dollar a survey - Unlimited receipent attachment.</i></p>
                <p><i>Dollar 5 - Minimum purcahse value.</i></p>
                <p><i>Contact us to place a larger one time purchase order.</i></p>

            </div>
            <br />
            <div>
                <h5><u>Contact Us:</u> </h5><h6>arth48414@gmail.com</h6>
                <br />
            </div>

        
            
        <footer class="page-footer grey darken-2" style= {{position:"moving", bottom:"0", left:"0", width:"100%"}}>
          <div class="footer-copyright">
          
            <div class="container">
            <Link to='/privacy-policy'>Privacy Policy</Link>   -   Copyright ©2020 Developed By Arth Patel    -  <Link to='/terms-and-conditions'>Terms And Conditions</Link>
            </div>
          </div>
        </footer>



        <CookieConsent>By tapping on 'I Understand', you agree to us and our partners' use of cookies and other technologies to process your personal data to personalize your experience and deliver tailored adversiting to you, on and off our sites. Please read our <Link to='/privacy-policy'>Privacy Policy</Link> and <Link to='/terms-and-conditions'>Terms and Conditions</Link></CookieConsent>
          
        
        </div>

        
    );
};


export default Landing;