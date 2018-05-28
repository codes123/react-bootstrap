import React from 'react';

import ForecastSummary from './forecast-summary';
import '../styles/forecast-summaries.scss';

const ForecastSummaries = props => (
  <div className="forecast-summaries">
    {
      props.forecasts.map(forecast => (
        <ForecastSummary
          date={forecast.date}
          description={forecast.description}
          icon={forecast.icon}
          temperature={forecast.temperature.max}
        />
      ))
    }
  </div>
);

const ForecastSummaries = props => <h1 className="forecast-summaries">{props.date}, {props.description}, {props.icon}, {props.temperature}</h1>;

ForecastSummary.propTypes = {
  date: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  icon: propTypes.number.isRequired,
  temperature: PropTypes.number.isRequired,
};

export default ForecastSummaries;

