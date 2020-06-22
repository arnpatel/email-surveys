import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SurveyList from './surveys/SurveyList';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';


class Dashboard extends Component {

    

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

    <a style={{ textAlign: 'center' }} class="waves-effect waves-light btn" href="/login">Login</a>

                    </div>
                ];
            
            default:
                return [
                   
                  
                    <div>
                    <h5 style={{ textAlign: 'center'}}>Hello, {this.props.auth.googleDisplayName}.  These are your survey histories.</h5>
                <div >
                    <Helmet>
                        <title>
                            Dashboard | AP Contact
                        </title>
                    </Helmet>
                    <SurveyList />
                    <div className="fixed-action-btn">
                        <Link to="/surveys/new" className="btn-floating btn-large dark-green">
                            <i className="material-icons">add</i>
                        </Link>
        
                    </div>
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
export default connect(mapStateToProps)(Dashboard);