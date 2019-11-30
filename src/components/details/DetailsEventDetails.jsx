import React from 'react';
import DetailsGallery from './DetailsGallery';
import DetailsInfoBox from './DetailsInfoBox';
import DetailsContent from './DetailsContent';

/* TODO: replace social media links after accounts are created */
const DetailsEventDetails = () => (
  <article
    className="fly-article-details"
    itemScope
    itemType="http://schema.org/DonateAction"
    itemRef="projectTitle1"
  >
    <DetailsGallery />
    <DetailsInfoBox />
    <DetailsContent />
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

export default DetailsEventDetails;
