import React from 'react';
import  {Helmet} from 'react-helmet';

const JoinUs = () => {

    return (

        document.body.style.background = "#e0f2f1",

        <div style={{ textAlign: 'center' }} className="black-text teal lighten-5" >
<Helmet>
<title>Join Our Team | AP Contact</title>
</Helmet>


<div class="container" className="black white-text">
                <br />
                <h5>We need a team member!</h5>
            <br />
            </div>

            <br />


        <h1><b>Join our team*.</b></h1>
          <br />
          <br />
          <h6> Benjamin Franklin once said ‘Tell me and I forget. Teach me and I remember. Involve me and I learn.’</h6> 
              <h6>We work with NodeJS, React, Redux, Express, MongoDB, and other Front-end and Back-end framework and libraries to bring Full-stack development of this website. </h6>
                  <h6>Should you think you might be a good fit, Please fill out the <a href="https://docs.google.com/forms/d/e/1FAIpQLSdzAFJhpe0q60NjE0mE74rGGlaKTshioiHhFwjTqXmbbFEcGg/viewform">form</a> or contact us at <a href="mailto:dev@arthnpatel.com">dev@arthnpatel.com</a>.</h6>
          
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <p>* We currently only search for college students.</p>
           

        
        </div>

        
    );
};


export default JoinUs;