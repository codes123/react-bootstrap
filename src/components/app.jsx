import React from 'react';
import PropTypes from 'prop-types';
import LocationDetails from './location-details';
import ForecastSummaries from './forecast-summaries';

const App = props => (
  <LocationDetails
    city={props.location.city}
    country={props.location.country}
  />
    <ForecastSummaries />
  </div >
);

App.propTypes = {
  name: PropTypes.string,
};

App.defaultProps = {
  name: 'World',
};

App.propTypes = {
  location: PropTypes.shape({
    city: PropTypes.string,
    country: PropTypes.string,
  }).isRequired,
};


export default App;
