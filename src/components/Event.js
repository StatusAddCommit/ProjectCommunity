import React from 'react';

/* TODO: replace remaining static placeholders with live API data */

const Event = () => (
  <div className="boxed flip-front">
    <a className="event-media js-wave" href="event-details.html" itemProp="url">
      <img src="images/temp/event-1.jpg" alt="" itemProp="image" />
    </a>
    <div className="event-content">
      <h3 className="event-title" itemProp="name">
        <a href="event-details.html">Here goes the Event Title</a>
      </h3>
      <div className="event-location">
        <a href="#" className="flip-button" itemProp="location">
          <i className="material-icons">location_on</i>
          Mombasa, Kenya
        </a>
        <time
          className="event-date"
          dateTime="2016-12-12T20:11:00"
          itemProp="startDate"
        >
          <i className="material-icons">query_builder</i>
          12 Dec 2016, 11:00 AM
        </time>
      </div>
      <div className="event-description" itemProp="description">
        <p>
          At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
          kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
          amet. Lorem ipsum dolor sit ame. At vero eos et accusam et justo duo
          dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
          sanctus est Lorem ipsum dolor sit amet.
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
);

export default Event;
