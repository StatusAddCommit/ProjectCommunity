/* eslint-disable */

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import getData from '../../actions/get-data';
import gmapInit from '../../helpers/gmap-init';
import generalJs from '../../helpers/general';

import DetailsBanner from './DetailsBanner';
import DetailsEventDetails from './DetailsEventDetails';
import DetailsWidgetText from './DetailsWidgetText';
import Footer from '../Footer';
import messages from '../../constants/messages';

const { social } = messages;

const Details = ({
  events,
  match: {
    params: { id }
  }
}) => {
  useEffect(() => {
    getData();
    gmapInit();
    generalJs();
  });

  const eventName = id.slice(1).replace(/_/g, ' ');
  const eventId = events.reduce((index, e, i) => {
    if (e[0] === eventName) {
      // eslint-disable-next-line no-param-reassign
      index = i;
    }
    return index;
  }, -1);

  return (
    <div>
      <DetailsBanner event={!events[0] ? [['']] : events[eventId]} />

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
                  <a href={social.fb} className="fa fa-facebook js-wave" />
                </li>
                <li>
                  <a href={social.tw} className="fa fa-twitter js-wave" />
                </li>
                <li>
                  <a href={social.ig} className="fa fa-instagram js-wave" />
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
