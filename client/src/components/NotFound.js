import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const NotFound = () => {

    return (


        document.body.style.background = "#e0f2f1",
        <div style={{ textAlign: 'center' }} className="black-text #e0f2f1" >
            <Helmet>
                <title>
                    404 Not Found | AP Contact
                </title>
            </Helmet>
 

            <h1 style={{color: 'black'}}><b>
    
                Page not found. 
                <h5>The page you requested was not found on this server.</h5>
                
                <h6>The URL may have been mistyped or you may have a old link. We apologize for the inconvenience.</h6>
                </b>
            </h1>

            <Link style={{ textAlign: 'center' }} class="waves-effect waves-light btn" to="/">Homepage</Link>


          </div>  
            

        );
};






export default NotFound;