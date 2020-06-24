import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';

class Profile extends Component {

    

    renderContent() {
        switch (this.props.auth) {
            case null:
                return;

            case false:
                return [
                    <div style={{ textAlign: 'center' }}>
                    <h1 style={{color: 'black'}}><b>
    
                    <h5>You must be logged in to view this content.</h5>
    
                     </b>
                        </h1>

                    <a href="/login" style={{ textAlign: 'center' }} class="waves-effect waves-light btn" >Login</a>

                    </div>
                ];
            
            default:
                return [
                   
                  
        <div  className="black-text #e0f2f1" >
            <Helmet><title>
                Profile | AP Contact
                </title></Helmet>

            
            <h1 style={{color: 'black'}} style={{ textAlign: 'center' }}>
    
                Profile 
            </h1>



          <div class="center-align">
    
              <img src={this.props.auth.googlePhotos} alt="" class="circle responsive-img" height={150} width={150}></img>

      </div>










            <div style={{ textAlign: 'center'}} > 
              <h5>      

                <p><b>Name:</b> {this.props.auth.googleDisplayName}</p>
                <p><b>Email:</b> {this.props.auth.googleEmails}</p>
                <p><b>Credits:</b> {this.props.auth.credits}</p>
                </h5>

                <p>We currently have disabled the edit feature to comply with security regulations. Should you need to change your personal details, don't hesitate to contact us. We will be happy to help.</p>

                        </div>
                        </div>

                ];
        }
    }




    render() {
        return (
            
            document.body.style.background = "#e0f2f1",
            <div>
            
                    {this.renderContent()}
                </div>
                  

            
        );
    }


    

}


function mapStateToProps({ auth }) {

        return {auth};

}
export default connect(mapStateToProps)(Profile);