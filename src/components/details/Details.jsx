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
      <DetailsBanner
        event={!events[0] ? [['']] : events[eventId]}
        bgImg={
          !events[0]
            ? 'url(images/temp/slide-16.jpg)'
            : events[eventId][2].split(',')[0]
        }
      />

      <div className="page-wrapper page-sidebar">
        <div className="container">
          <div className="row">
            <main
              itemProp="mainContentOfPage"
              itemScope
              itemType="http://schema.org/WebPageElement"
              className="content"
            >
              <DetailsEventDetails
                event={!events[0] ? [['']] : events[eventId]}
              />
            </main>

            <aside
              className="sidebar sidebar-sticky"
              itemScope
              itemType="http://schema.org/WPSideBar"
            >
              <DetailsWidgetText />
              <ul className="post-social clearfix">
                <li>
                  <a href="#" className="fa fa-facebook js-wave" />
                </li>
                <li>
                  <a href="#" className="fa fa-twitter js-wave" />
                </li>
                <li>
                  <a href="#" className="fa fa-instagram js-wave" />
                </li>
              </ul>
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
