import React, { Component } from 'react';
import { connect } from 'react-redux';
import Payments from './Payments';

class Header extends Component {



    

    renderContent() {
        
        switch (this.props.auth) {
            case null:
                return;

            case false:
                return [
                    <div>
                    <li><a href="/contact-us">Contact Us</a></li>
                    <li><a href="/auth/google">Login With Google</a></li>
                    </div>
                ];
            
            default:
                return [
                    <li key="1"><Payments /></li>,
                    <li key="3" style={{ margin: '0 10px'}}>
                        Credits: {this.props.auth.credits}
                    </li>,
                    <li key="4"><a href='/surveys'>Dashboard</a></li>,
                <li key="2"><a href="/api/logout">Logout</a></li>
                ];
        }
    }




    render() {
        return (
            
            <nav>
                <div className="nav-wrapper cyan darken-3">
                <a
                 href={this.props.auth ? '/surveys' : '/'}
                 className="left brand-logo"
                 style={{ margin: '0 10px'}}
                 >
                    AP Contact
                </a>
                <ul className="right">
                    {this.renderContent()}
                </ul>
                </div>
            </nav>

            
        );
    }


}


function mapStateToProps({ auth }) {

        return {auth};

}
export default connect(mapStateToProps)(Header);