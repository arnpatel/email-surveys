import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';


import Header from './Header';
import Landing from './Landing';
import Dashboard from './Dashboard';
import SurveyNew from './surveys/SurveyNew';
import Privacy from './Privacy';
import Terms from './Terms';
import NotFound from './NotFound';
import ContactUs from './ContactUs';
import Login from './Login';

class App extends Component {
    componentDidMount() {
        this.props.fetchUser();

        
    }


    render() {
    return (

        <div>
            <BrowserRouter>
                <div>
                    <Header /> 
                    <Switch>
                    <Route exact path="/" component={Landing} />
                    <Route exact path="/surveys" component={Dashboard} />
                    <Route path="/surveys/new" component={SurveyNew} />
                    <Route path="/privacy-policy" component={Privacy} />
                    <Route path="/terms-and-conditions" component={Terms} />
                    <Route path="/contact-us" component={ContactUs} />
                    <Route path="/login" component={Login} />
                    <Route path="*" component={NotFound} />
                    
                        </Switch>
                    
                </div>
            </BrowserRouter>

        </div>

    );
    }
}

export default connect(null, actions)(App);