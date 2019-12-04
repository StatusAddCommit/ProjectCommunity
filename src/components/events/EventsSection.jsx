import React from 'react';
import PropTypes from 'prop-types';

import EventsItem from './EventsItem';
import EventsPagination from './EventsPagination';

const EventsSection = ({ events }) => {
  return (
    <section className="section">
      <div className="container">
        <div className="fly-events flex-container">
          <EventsItem events={events} />
        </div>
        <EventsPagination />
      </div>
    </section>
  );
};

EventsSection.propTypes = {
  events: PropTypes.arrayOf(PropTypes.array).isRequired
};

export default EventsSection;
