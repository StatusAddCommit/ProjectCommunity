import React from 'react';
import PropTypes from 'prop-types';

import DetailsGallery from './DetailsGallery';
import DetailsInfoBox from './DetailsInfoBox';
import DetailsContent from './DetailsContent';

/* TODO: replace social media links after accounts are created */
const DetailsEventDetails = ({ events, id }) => (
  <article
    className="fly-article-details"
    itemScope
    itemType="http://schema.org/DonateAction"
    itemRef="projectTitle1"
  >
    <DetailsGallery event={events[id]} />
    <DetailsInfoBox event={events[id]} />
    <DetailsContent event={events[id]} />
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
  </article>
);

DetailsEventDetails.propTypes = {
  events: PropTypes.arrayOf(PropTypes.array).isRequired,
  id: PropTypes.string.isRequired
};

export default DetailsEventDetails;
