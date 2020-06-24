import React from 'react';
import { Helmet } from 'react-helmet';
import logo from './logo.png';
import logo1 from './logo.svg';
const Login = () => {

    return (

        document.body.style.background = "#e0f2f1",
        
        <div  className="black-text #e0f2f1" >
            <Helmet>
                <title>
                    Login | AP Contact
                </title>
            </Helmet>
            <h4 style={{color: 'black'}} style={{ textAlign: 'center' }}>

            <img width="70" height="70" src={logo}></img>
            <br />

            <br />
            <b> Connecting to the Dashboard.</b> </h4>  <br />
                <h5 style={{ textAlign: 'center' }}>Log in to save your surveys. We won't post anything anywhere.</h5>
                
            <br />
            <br />
            <br />
        <a href="/auth/google">
          <button class="row valign-wrapper">
              <img src={logo1} alt="" class="responsive-img" />
              <span class="black-text" style={{ textAlign: 'center' }}>
                Sign in with Google
              </span>
          </button>
          </a>

            
            <br />
            <p style={{ textAlign: 'center' }}>Need help with Sign-In?<a href="mailto:oauth@arthnpatel.com"> Login Support</a></p>
            <p style={{ textAlign: 'center' }}><a href="/privacy-policy"> Privacy Policy</a> and <a href="terms-and-conditions"> Terms And Conditions</a></p>
        

            <br />
            <br />
            <br />
            <br />

        
        
        
        
        
        </div>

        
);
};


export default Login;