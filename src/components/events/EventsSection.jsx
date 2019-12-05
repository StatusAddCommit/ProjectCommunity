import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import gmapInit from '../../helpers/gmap-init';
import generalJs from '../../helpers/general';

import EventsItem from './EventsItem';

const EventsSection = ({ events }) => {
  useEffect(() => {
    gmapInit();
    generalJs();
  });
  return (
    <section className="section">
      <div className="container">
        <div className="fly-events flex-container">
          <EventsItem events={events} />
        </div>
      </div>
    </section>
  );
};

EventsSection.propTypes = {
  events: PropTypes.arrayOf(PropTypes.array).isRequired
};

export default EventsSection;
