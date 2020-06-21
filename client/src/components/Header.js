import React, { Component } from 'react';
import { connect } from 'react-redux';
import Payments from './Payments';
import M from  'materialize-css/dist/js/materialize.min.js';

class Header extends Component {

    

    renderContent() {
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.sidenav');
            var instances = M.Sidenav.init(elems, {});
          });
        
        switch (this.props.auth) {
            case null:
                return;

            case false:
                return [
                    <div>
                    <li><a href="/contact-us">Contact Us</a></li>
                    <li><a href="/login">Login</a></li>
                    </div>
                ];
            
            default:
                return [
                    <li key="1"><Payments /></li>,
                    <li key="4"><a href='/surveys'>Dashboard</a></li>,
                    <li key="3" style={{ margin: '0 10px'}}>
                        Credits: {this.props.auth.credits}
                    </li>,
                    <li><a href="/contact-us">Contact Us</a></li>,
                    
                <li key="2"><a href="/api/logout">Logout</a></li>
                ];
        }
    }




    render() {
        return (
            <div>
            
            <nav>
                <div className="nav-wrapper cyan darken-3">
                <a
                 href={this.props.auth ? '/surveys' : '/'}
                 className="left brand-logo"
                 style={{ margin: '0 10px'}}
                 >
                     <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
                     <i class="material-icons">email</i>
                    AP Contact
                </a>
                <ul class="right hide-on-med-and-down">
                    {this.renderContent()}
                </ul>
                </div>
            </nav>
            <ul class="sidenav" id="mobile-demo">
            <li style={{ textAlign: 'center' }}> {this.renderContent()} </li>
            
          </ul>
                  
            </div>

            
        );
    }


    

}


function mapStateToProps({ auth }) {

        return {auth};

}
export default connect(mapStateToProps)(Header);