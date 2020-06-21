import React from 'react';
import { Helmet } from 'react-helmet';
const Login = () => {

    return (

        document.body.style.background = "#e0f2f1",
        
        <div  className="black-text #e0f2f1" >
            <Helmet>
                <title>
                    Login | AP Contact
                </title>
            </Helmet>
            <div class="progress">
      <div class="indeterminate"></div>
  </div>
            
            <h4 style={{color: 'black'}} style={{ textAlign: 'center' }}>
            <br />
            <b> Connecting to AP Contact ...</b> </h4>  <br />
                <h5 style={{ textAlign: 'center' }}>Log in to save your surveys. We won't post anything anywhere.</h5>
                
            <br />
            <br />
            <br />
            <div style={{ textAlign: 'center' }}>
            <a class="waves-effect waves-light btn-large white blue-text" href="/auth/google"><b>Sign in with Google</b></a>
            </div>
            <br />
            <p style={{ textAlign: 'center' }}>Need help with Sign-In?<a href="mailto:oauth@arthnpatel.com"> Login Support</a></p>
            <p style={{ textAlign: 'center' }}><a href="/privacy-policy"> Privacy Policy</a> and <a href="terms-and-conditions"> Terms And Conditions</a></p>
        

            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />





            <div style={{ textAlign: 'center' }} class="container" className="cyan darken-3 white-text">
                <br />
            <a href='/privacy-policy' className="black-text">Privacy Policy</a>   -   Copyright ©2020 Developed By Arth Patel    -  <a href='/terms-and-conditions' className="black-text">Terms And Conditions.</a>
            <br />
            <br />
            </div>
        
        
        
        
        
        </div>

        
);
};


export default Login;