import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import DetailsBanner from './DetailsBanner';
import DetailsEventDetails from './DetailsEventDetails';
import DetailsWidgetText from './DetailsWidgetText';
import Footer from '../Footer';

const Details = ({
  events,
  match: {
    params: { id }
  }
}) => {
  const eventId = id.slice(1);
  return (
    <div>
      <DetailsBanner events={events} id={eventId} />

      <div className="page-wrapper page-sidebar">
        <div className="container">
          <div className="row">
            <main
              itemProp="mainContentOfPage"
              itemScope
              itemType="http://schema.org/WebPageElement"
              className="content"
            >
              <DetailsEventDetails events={events} />
            </main>

            <aside
              className="sidebar sidebar-sticky"
              itemScope
              itemType="http://schema.org/WPSideBar"
            >
              <DetailsWidgetText />
            </aside>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

const mapStateToProps = state => ({
  events: state.events
});

Details.propTypes = {
  events: PropTypes.arrayOf(PropTypes.array).isRequired,
  match: PropTypes.objectOf(PropTypes.any).isRequired
};

export default connect(mapStateToProps)(Details);
