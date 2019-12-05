import React from 'react';
import PropTypes from 'prop-types';

import DetailsGallery from './DetailsGallery';
import DetailsInfoBox from './DetailsInfoBox';
import DetailsContent from './DetailsContent';

/* TODO: replace social media links after accounts are created */
const DetailsEventDetails = ({ event }) => (
  <article
    className="fly-article-details"
    itemScope
    itemType="http://schema.org/DonateAction"
    itemRef="projectTitle1"
  >
    <DetailsGallery eImgs={!event[2] ? [['']] : event[2].split(',')} />
    <br />
    <br />
    <DetailsInfoBox event={event} />
    <DetailsContent event={event} />
  </article>
);

DetailsEventDetails.propTypes = {
  event: PropTypes.arrayOf(PropTypes.any).isRequired
};

export default DetailsEventDetails;
