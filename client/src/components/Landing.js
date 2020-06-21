import React from 'react';
import CookieConsent from "react-cookie-consent";

const Landing = () => {

    return (

        document.body.style.background = "#e0f2f1",
        

        <div style={{ textAlign: 'center' }} className="black-text teal lighten-5" >





<div class="container" className="black white-text">
                <br />
                <h5>Black Lives Matter!</h5>
            <br />
            </div>
            
          
          
          
            <h1 style={{color: 'black'}}><b>
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
                <p><i>More reviews, More improvement.</i></p>
                <p><i>Track your services by getting review from users.</i></p>
                <p><i>Email marketing service that is affordable, easy to use, faster, well, and funner.</i></p>
                <p><i>We surely help your business reach more customers.</i></p>

            </div>
            <br />
            <div>
                <h5><u>Pricing:</u></h5>
                <p><i>We understand your needs, No-contract, Prepaid service to bring more accessibility.</i></p>
                <p><i>1 Dollar a survey - Unlimited receipent attachment.</i></p>
                <p><i>Dollar 5 - Minimum purchase value.</i></p>
                <p><i>Contact us to place a larger one time purchase order.</i></p>

            </div>
            <br />
            <div>
                <h5><u>Contact Us:</u> </h5><h6><a href="mailto:support@arthnpatel.com">support@arthnpatel.com</a></h6>
                <br />
            </div>

        

            <div class="container" className="cyan darken-3 white-text">
                <br />
            <a href='/privacy-policy' className="black-text">Privacy Policy</a>   -   Copyright ©2020 Developed By Arth Patel    -  <a href='/terms-and-conditions' className="black-text">Terms And Conditions.</a>
            <br />
            <br />
            </div>

            

        <CookieConsent>This website stores cookies on your computer. These cookies are used to collect information about how you interact with our website and allow us to remember you. We use this information in order to improve and customize your browsing experience and for analytics and metrics about our visitors both on this website and other media. To find out more about the cookies we use, see our <a href='/privacy-policy'>Privacy Policy</a> and <a href='/terms-and-conditions' >Terms and Conditions</a>.</CookieConsent>
          
        
        </div>

        
    );
};


export default Landing;