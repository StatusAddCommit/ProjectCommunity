import React from 'react';
import PropTypes from 'prop-types';

/* TODO: replace remaining static data with live API data */

const DetailsBanner = ({ events, id }) => (
  <section
    className="fly-header parallax overlay"
    style={{
      backgroundImage: 'url(images/temp/slide-16.jpg)'
    }}
  >
    <div className="fly-header-content">
      <div className="page-subtitle">Event Details</div>
      <h1 id="projectTitle1" className="page-title" itemProp="title">
        {events.length === 1 ? events[0][0] : events[id][0]}
      </h1>
    </div>
  </section>
);

DetailsBanner.propTypes = {
  events: PropTypes.arrayOf(PropTypes.array).isRequired,
  id: PropTypes.string.isRequired
};

export default DetailsBanner;
