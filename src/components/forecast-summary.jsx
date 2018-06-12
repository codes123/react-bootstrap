import React from 'react';
import PropTypes from 'prop-types';
import WeatherIcon from 'react-icons-weather';
import moment from 'moment';

const ForecastSummary = props => (
  <h1 className="forecast-summaries">
    <div className="forecast-summary__date">
      {moment(props.date).format('ddd Do MMM')}
    </div>
    <span className="forecast-summary__temperature">{props.temperature}</span>,
    <span className="forecast-summary__description">{props.description}</span>,
    <div className="forecast-summary__icon">
      <WeatherIcon
        name="owm"
        iconId={props.icon}
      />
    </div>
  </h1>
);

ForecastSummary.displayName = 'forecastSummary';

ForecastSummary.propTypes = {
  date: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  temperature: PropTypes.number.isRequired,
};

export default ForecastSummary;

