import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import formFields from './formFields';
import { withRouter } from 'react-router-dom';
import * as actions from '../../actions';
import { Helmet } from 'react-helmet';

const SurveyFormReview = ({ onCancel, formValues, submitSurvey, history }) => {
   
   const reviewFields = _.map(formFields, ({ name, label }) => {
       return (
            <div key={name}>
                    <label>{label}</label>
                    <div>
                        {formValues[name]}
                    </div>

            </div>
       );
   });
   
   
    return (
        document.body.style.background = "#e0f2f1",
        <div style={{ margin: '0 45px'}}>
            <Helmet>
                <title>
                    New Survey | AP Contact
                </title>
            </Helmet>
            <h4 style={{ textAlign: 'center' }}>Please confirm your entries.</h4>
            {reviewFields}
           
            <button
                className="yellow darken-3 white-text btn-flat"
                onClick={onCancel}
                >
                Back
                </button>
                <button 
                onClick={ () => submitSurvey(formValues, history)}
                className="teal btn-flat right white-text"
                >
                    Send Survey
                    <i className="material-icons right">email</i>
                </button>
        </div>


    );


};

function mapStateToProps(state) {
return { formValues: state.form.surveyForm.values };
}

export default connect(mapStateToProps, actions) (withRouter(SurveyFormReview));