import React from 'react';

/* TODO: replace all remaining static data with live API data */

const DetailsInfoBox = () => (
  <article
    className="fly-card fly-event fly-flip-effect vertical"
    itemScope
    itemType="http://schema.org/Event"
  >
    <div className="boxed flip-front">
      <div className="event-content">
        <h3 className="event-title" itemProp="name">
          <a href="event-details.html">Event Info</a>
        </h3>
        <ul className="event-location">
          <li>
            <div className="label">Location:</div>
            <a href="#" className="flip-button" itemProp="location">
              <i className="material-icons">location_on</i>
              Mombasa, Kenya
            </a>
          </li>
          <li>
            <div className="label">Date:</div>
            <time
              className="event-date"
              dateTime="2016-12-12T20:11:00"
              itemProp="startDate"
            >
              <i className="material-icons">query_builder</i>
              12 Dec 2016, 11:00 AM
            </time>
          </li>
        </ul>
        <div className="event-description" itemProp="description">
          <p>
            At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
            kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
            amet. Lorem ipsum dolor sit ame. At vero eos et accusam et justo duo
            dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
            sanctus est Lorem ipsum dolor sit amet.
          </p>
        </div>
      </div>
    </div>
    <div className="boxed flip-back">
      <div className="card-map" data-placeholder="waiting for map">
        <div
          className="google-map"
          data-map-zoom={14}
          data-map-type="roadmap"
          data-map-style="UmmaCharity"
          data-map-address="1998 Hulman Blvd, Speedway, IN, 46222"
          data-map-marker="images/marker.png"
          data-map-marker-size="[31,46]"
          data-map-marker-anchor="[16,46]"
        >
          {}
        </div>
      </div>
    </div>
  </article>
);

export default DetailsInfoBox;
