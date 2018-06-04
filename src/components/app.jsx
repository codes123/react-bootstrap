import React from 'react';
import PropTypes from 'prop-types';

import LocationDetails from './location-details';
import ForecastSummaries from './forecast-summaries';

import '../styles/app.scss';


const App = props => (
  <div className="forecast">
    <LocationDetails
      city={props.location.city}
      country={props.location.country}
    />
    <ForecastSummaries
    forecasts={props.forecasts}
    />
  </div>
);

App.propTypes = {
  location: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  forecasts: PropTypes.array.isRequired,
};

App.defaultProps = {
  location: 'World',
};

export default App;
