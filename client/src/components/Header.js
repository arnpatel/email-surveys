import React, { Component } from 'react';
import { connect } from 'react-redux';
import Payments from './Payments';
import M from  'materialize-css/dist/js/materialize.min.js';
import { Link } from 'react-router-dom';

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
                    <li><Link to="/join-us">Join Us</Link></li>
                    <li><Link to="/contact-us">Contact Us</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    </div>
                ];
            
            default:
                return [
                    <li key="1"><Payments /></li>,
                    <li key="4"><Link to='/surveys'>Dashboard</Link></li>,
                    <li key="3" style={{ margin: '0 10px'}}>
                        Credits: {this.props.auth.credits}
                    </li>,
                    <li key="4"><Link to='/profile'>Profile</Link></li>,
                    <li><Link to="/contact-us">Contact Us</Link></li>,
                    
                <li key="2"><a href="/api/logout">Logout</a></li>
                ];
        }
    }




    render() {
        return (
            <div>
            
            <nav>
                <div className="nav-wrapper cyan darken-3">
                <Link
                 to={this.props.auth ? '/surveys' : '/'}
                 className="left brand-logo"
                 style={{ margin: '0 10px'}}
                 >
                     <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
                     <i class="material-icons">email</i>
                    AP Contact
                </Link>
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