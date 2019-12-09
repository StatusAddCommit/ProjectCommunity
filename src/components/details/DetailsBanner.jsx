import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import messages from '../../constants/messages';

const {
  eventdetails: { DetailsBannerImg }
} = messages;

const DetailsBanner = ({ event }) => (
  <section
    className="fly-header parallax overlay"
    style={{
      backgroundImage: `url(${DetailsBannerImg})`
    }}
  >
    <div className="fly-header-content">
      <div className="page-subtitle">Event Details</div>
      <h1 id="projectTitle1" className="page-title" itemProp="title">
        {event[0]}
      </h1>
    </div>
  </section>
);

const mapStateToProps = state => ({
  events: state.events
});

DetailsBanner.propTypes = {
  event: PropTypes.arrayOf(PropTypes.any).isRequired
};

export default connect(mapStateToProps)(DetailsBanner);
