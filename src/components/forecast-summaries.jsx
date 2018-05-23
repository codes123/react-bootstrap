import React from 'react';
import ForecastSummary from './forecast-summary';

const ForecastSummaries = props => <h1 className="forecast-summaries">{props.date}, {props.description}, {props.icon}, {props.temperature}</h1>;    
     props.Forecast.map(Forecast => ( 
     ForecastSummary
         key= forecast.date.Proptypes.string.isRequired
         date: forecast.date.PropTypes.string.isRequired,
         description: forecast.description.PropTypes.string.isRequired,
         icon: forecast.icon.PropTypes.string.isRequired,
         temperature: forecast.temperature.PropTypes.string.isRequired,

export default ForecastSummaries;
