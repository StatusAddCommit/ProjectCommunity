import React from 'react';

/* TODO: replace remaining static placeholders with live API data */

const Event = ({ events }) =>
  events.map(event => {
    const eName = event[0];
    const eUrl = event[1];
    const eImgMain = event[2].split(',')[0];
    const eImgs = event[2];
    const eLoc = event[3];
    const eDate = event[4];
    const eDescShort = event[5];
    const eDescFull = event[6];

    return (
      <div className="column">
        <article
          className="fly-card fly-event fly-flip-effect"
          itemScope
          itemType="http://schema.org/Event"
          key={eName}
        >
          <div className="boxed flip-front">
            <a
              className="event-media js-wave"
              /* TODO: change event details URL to be dynamic after details page setup */
              href="event-details.html"
              itemProp="url"
            >
              <img
                src={!eImgMain ? 'images/temp/event-1.jpg' : eImgMain}
                alt="Upcoming event"
                itemProp="image"
              />
            </a>
            <div className="event-content">
              <h3 className="event-title" itemProp="name">
                <a href="event-details.html">{eName}</a>
              </h3>
              <div className="event-location">
                <a href="#" className="flip-button" itemProp="location">
                  <i className="material-icons">location_on</i>
                  {!eLoc ? 'Earth, Solar System' : eLoc}
                </a>
                <time
                  className="event-date"
                  dateTime={!eDate ? null : eDate}
                  itemProp="startDate"
                >
                  <i className="material-icons">query_builder</i>
                  {!eDate ? 'TBD' : eDate}
                </time>
              </div>
              <div className="event-description" itemProp="description">
                <p>
                  {!eDescShort
                    ? 'Description coming soon. Thank you for your patience!'
                    : eDescShort}
                </p>
              </div>
              <div className="event-footer">
                <div className="event-buttons">
                  <a
                    href="event-details.html"
                    className="btn btn-transparent btn-icon-left js-wave"
                    itemProp="url"
                  >
                    <i className="material-icons">arrow_forward</i>
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="boxed flip-back">
            <div className="card-map" data-placeholder="waiting for map">
              <div
                className="google-map"
                data-map-zoom={10}
                data-map-type="roadmap"
                data-map-style="UmmaCharity"
                data-map-address={!eLoc ? 'USA' : eLoc}
                data-map-marker="images/marker.png"
                data-map-marker-size="[31,46]"
                data-map-marker-anchor="[16,46]"
              />
            </div>
            {/* TODO: add conditional for map/social after flip map fix; add real social links */}
            <ul className="card-social">
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
          </div>
        </article>
      </div>
    );
  });

export default Event;
