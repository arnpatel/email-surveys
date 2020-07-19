import React from 'react';
import CookieConsent from "react-cookie-consent";
import  {Helmet} from 'react-helmet';
import logo from './github.svg';

const Landing = () => {

    return (

        document.body.style.background = "#e0f2f1",



        <div style={{ textAlign: 'center' }} className="black-text teal lighten-5" >

<Helmet><title>Get Feedback From Users | AP Contact</title></Helmet>

            
          
          
          
            <h2 style={{color: 'black'}}><b>
                AP Contact
                </b>
            </h2>
            <h4>
                Powerful email feedbacks made easy.
            </h4>
            <br />
            <div>
                <h5><u>Application Features:</u></h5>
                <p>Send bulk survey emails that reach your users.</p>
                <p>Contact our team to get started with some custom templates for your business.</p>
                <p>More reviews, More improvement.</p>
                <p>Track your services by getting review from users.</p>
                <p>Email marketing service that is affordable, easy to use, faster, well, and funner.</p>
                <p>We surely help your business reach more customers.</p>

            </div>
            <br />
            <div>
                <h5><u>Pricing:</u></h5>
                <p>We understand your needs, No-contract, Prepaid service to bring more accessibility.</p>
                <p>1 Dollar a survey - Unlimited receipent attachment.</p>
                <p>Dollar 5 - Minimum purchase value.</p>
                <p>Contact us to place a larger one time purchase order.</p>

            </div>
            <br />
            <div>
                <h5><u>Contact Us:</u> </h5><h6><a href="mailto:support@arthnpatel.com">support@arthnpatel.com</a></h6>
                <br />
            </div>

            <div><p ><a href='https://status.arthnpatel.com' className="black-text">
                System Status
                </a>
                </p></div>

            <div>
                <a href="https://github.com/arnpatel">
            <img width="20" height="20" src={logo}></img>
            </a>
            </div>

        

            <div class="container" className="cyan darken-3 white-text">
                <br />
            <a href='/privacy-policy' className="black-text">Privacy Policy</a>   -   Copyright ©2020 AP Contact Team    -  <a href='/terms-and-conditions' className="black-text">Terms And Conditions.</a>
            <br />
            <br />
            </div>

            

        <CookieConsent
        location="bottom"
        buttonText="Ok"
        cookieName="myAwesomeCookieName2"
        style={{ background: "#2B373B" }}
        buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
        expires={150}
        >
            We use cookies to ensure that we give you the best experience on our website. If you continue to use this site, we will assume that you are happy with it.</CookieConsent>
          
        
        </div>

        
    );
};


export default Landing;