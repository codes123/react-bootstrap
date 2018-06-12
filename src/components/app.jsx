import React from 'react';
import PropTypes from 'prop-types';

import LocationDetails from './location-details';
import ForecastSummaries from './forecast-summaries';

import '../styles/app.scss';
import ForecastDetails from './Forecast-details';

const App = props => (
  <div>
    <LocationDetails
      city={props.location.city}
      country={props.location.country}
    />
    <ForecastSummaries forecasts={props.forecasts} />
    <ForecastDetails forecast={props.forecasts[0]} />
  </div>

);


App.propTypes = {
  location: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  forecasts: PropTypes.arrayOf.isRequired,
  forecast: PropTypes.string.isRequired,
};

App.defaultProps = {
  location: 'World',
};

export default App;
