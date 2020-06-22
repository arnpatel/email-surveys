import React from 'react';
import { Link } from 'react-router-dom';
import SurveyList from './surveys/SurveyList';
import { Helmet } from 'react-helmet';

const Dashboard = () => {
    return (
        <div>
            <h4 style={{ textAlign: 'center'}}><b>Survey History.</b></h4>
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

    );
};

export default Dashboard;