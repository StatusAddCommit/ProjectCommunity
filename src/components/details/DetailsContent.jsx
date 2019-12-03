/* eslint-disable react/no-array-index-key */
/* NOTE: mapping event full decription to new lines use index as key to prevent adding unnecessary time complexity */

import React from 'react';
import PropTypes from 'prop-types';

const DetailsContent = ({ event }) => {
  const eUrl = event[1];
  const eImgFooter = event[2] && event[2].split(',')[2];
  const eDescFull = event[6] && event[6];
  return (
    <div className="post-content">
      <div className="first-letter">
        {!eDescFull
          ? 'Description coming soon. Thank you for your patience!'
          : eDescFull.split('\n').map((p, i) => <p key={i}>{p}</p>)}
      </div>
      <img src={eImgFooter && eImgFooter} alt="" />
      <h5>
        {!eUrl ? null : 'For participate, please visit our event page at: '}
      </h5>
      <a href={eUrl && eUrl}>
        <b>{eUrl && eUrl}</b>
      </a>
    </div>
  );
};

DetailsContent.propTypes = {
  event: PropTypes.arrayOf(PropTypes.any).isRequired
};

export default DetailsContent;
