import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

/* TODO: replace all remaining static data with live API data */
/*

TEST on this page: http://localhost:3000/event:1
(use event: 0-4, representing index of individual event item; will be replaced later with actual event titles)

things I've tried:
- every life cycle method that's not deprecated/unsafe; both regular versions and hooks versions
- calling getData action w/ componentDidMount on this component directly
- use conditionals to render google maps div sections when data become available (map element will be stuck on 'waiting for map' message indefinitely)
*/

const DetailsInfoBox = ({ event }) => {
  const eUrl = event[1];
  const eLoc = event[3]; // event location
  const eDate = event[4];
  const eDescShort = event[5];

  // useState is identical to using this.state + setState
  const [mapLoc, updateLoc] = useState('USA');

  // useEffect is the hooks version of componentDidMount; I've also tried useLayoutEffect, which is similar to componentWillMount
  useEffect(() => {
    // event[3] === event location
    if (event[3] !== undefined) {
      updateLoc(event[3]);
    }
    // should log 'USA' then actual event location after
    console.log('=zzzzzzzz=>', mapLoc);
  });

  return (
    <article
      className="fly-card fly-event fly-flip-effect vertical"
      itemScope
      itemType="http://schema.org/Event"
    >
      <div className="boxed flip-front">
        <div className="event-content">
          <h3 className="event-title" itemProp="name">
            <a href={eUrl && eUrl}>Event Info at a Glance</a>
          </h3>
          <ul className="event-location">
            <li>
              <div className="label">Location:</div>
              <a href="#" className="flip-button" itemProp="location">
                <i className="material-icons">location_on</i>
                {eLoc}
              </a>
            </li>
            <li>
              <div className="label">Date:</div>
              <time
                className="event-date"
                dateTime={!eDate ? null : eDate}
                itemProp="startDate"
              >
                <i className="material-icons">query_builder</i>
                {!eDate ? 'TBD' : eDate}
              </time>
            </li>
          </ul>
          <div className="event-description" itemProp="description">
            <p>
              {!eDescShort
                ? 'Description coming soon. Thank you for your patience!'
                : eDescShort}
            </p>
          </div>
        </div>
      </div>
      {/* TODO: fix: map loads with initial placeholder data only, does not change on state change */}
      <div className="boxed flip-back">
        <div className="card-map" data-placeholder="waiting for map">
          <div
            className="google-map"
            // zoom can be ignored for now
            data-map-zoom={!eLoc ? 1 : 8}
            data-map-type="roadmap"
            data-map-style="UmmaCharity"
            // main problem is here
            data-map-address={mapLoc}
            data-map-marker="images/marker.png"
            data-map-marker-size="[31,46]"
            data-map-marker-anchor="[16,46]"
          />
        </div>
      </div>
    </article>
  );
};

DetailsInfoBox.propTypes = {
  event: PropTypes.arrayOf(PropTypes.any).isRequired
};

export default DetailsInfoBox;
