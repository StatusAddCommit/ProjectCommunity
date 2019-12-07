import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import generalJs from '../../helpers/general';

import EventsBanner from './EventsBanner';
import EventsSection from './EventsSection';
import Footer from '../Footer';

const Events = ({ events }) => {
  useEffect(() => {
    generalJs();
  });
  return (
    <div>
      <EventsBanner />
      <EventsSection events={events} />
      <Footer />
    </div>
  );
};

const mapStateToProps = state => ({
  events: state.events
});

Events.propTypes = {
  events: PropTypes.arrayOf(PropTypes.array).isRequired
};

export default connect(mapStateToProps)(Events);
