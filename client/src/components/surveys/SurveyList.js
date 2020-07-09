import React, { Component, PureComponent } from 'react';
import { connect } from 'react-redux';
import { fetchSurveys } from '../../actions';
import Collapsible from 'react-collapsible';
import { RadialBarChart, RadialBar, Legend } from 'recharts';

class SurveysList extends Component {
componentDidMount() {
    this.props.fetchSurveys();

}

renderSurveys() {
    return this.props.surveys.reverse().map(survey => {
        

        const data = [
            {
              name: 'No', uv: survey.no, pv: 2400, fill: '#8884d8',
            },
            {
              name: 'Yes', uv: survey.yes, pv: 4567, fill: '#83a6ed',
            },
        ];
        const style = {
            top: 0,
            left: 350,
            lineHeight: '24px',
          };

        return (
            document.body.style.background = "#e0f2f1",
                <div className="card grey darken-1 white-text " key={survey._id} style={{ margin: '15px'}}>
                    <div className="card-content">
                    <span className="card-title">Survey title:{survey.title}, Id:{survey._id} </span>
                    <p>Email subject:{survey.subject}</p>
                    <p>Email body:{survey.body}</p>
                    <p className="right">
                        Sent On: {new Date (survey.dateSent).toLocaleString(`en-US`)}
                        </p>
                        </div>
                    <div className="card-action">
                        <a>Yes: {survey.yes}</a>
                        <a>No: {survey.no}</a>
                    <Collapsible trigger="Expand to see graphical version ↓" className="center">
                        
                    <RadialBarChart width={500} height={300} cx={150} cy={150} innerRadius={20} outerRadius={140} barSize={10} data={data}>
        <RadialBar minAngle={15} label={{ position: 'insideStart', fill: '#fff' }} background clockWise dataKey="uv" />
        <Legend iconSize={10} width={120} height={140} layout="vertical" verticalAlign="middle" wrapperStyle={style} />
      </RadialBarChart>
                    </Collapsible>
                    </div>
                </div>
        );
    });
}

    render() {
        return (
            <div>
                {this.renderSurveys()}
                </div>
        );
    }
}


function mapStateToProps({ surveys }) {
    return { surveys };
}


export default connect(mapStateToProps, { fetchSurveys })(SurveysList);