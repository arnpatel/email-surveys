// SurveyForm shows a form for aa user to add input
import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import SurveyField from './SurveyField';
import validateEmails from '../../utils/validateEmails';
import formFields from './formFields';
import { Helmet } from 'react-helmet';



class SurveyForm extends Component {
    renderFields() {
        return _.map(formFields, ({ label, name }) => {
            return (
                <b>
            <Field key={name} component={SurveyField} type="text" label={label} name={name} />
            </b>
            );
        });
    }

    render() {
        return (
            document.body.style.background = "#e0f2f1",
            <div style={{ margin: '0 45px'}}> 
            <h4 style={{ textAlign: 'center' }} >New Survey.</h4>
            <Helmet>
                <title>
                    New Survey | AP Contact
                </title>
            </Helmet>
                <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
                {this.renderFields()}
                <a href="/surveys" className="orange darken-4 btn-flat white-text">
                Cancel
                </a>
                <button type="submit" className="teal btn-flat right white-text">
                Next
                <i className="material-icons right">done</i>  
                </button>
                </form>
            </div>
        );
    }
}

function validate(values) {
    const errors = {};


    errors.recipients = validateEmails(values.recipients || '');

     _.each(formFields, ({ name }) => {
        if (!values[name]) {
            errors[name] = 'You must provide a value';
        }
    });

    


    return errors;

}

export default reduxForm({
    validate, 
    form: 'surveyForm',
    destroyOnUnmount: false
})(SurveyForm);