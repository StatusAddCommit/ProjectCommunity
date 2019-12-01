import React from 'react';
import Event from './Event';

const SectionEvents = () => (
  <section className="section padding-bottom-50" id="events">
    <div className="section-heading">
      <div className="container">
        <div className="section-subtitle">UPCOMING EVENTS</div>
        <h2 className="section-title">Events at Umma Charities</h2>
      </div>
    </div>
    <div className="container">
      <div className="fly-events flex-container">
        <div className="column">
          {}
          <article
            className="fly-card fly-event fly-flip-effect"
            itemScope
            itemType="http://schema.org/Event"
          >
            <Event />
            <div className="boxed flip-back">
              <div className="card-map" data-placeholder="waiting for map">
                <div
                  className="google-map"
                  data-map-zoom={14}
                  data-map-type="roadmap"
                  data-map-style="UmmaCharity"
                  data-map-address="Los Angeles, CA 90033"
                  data-map-marker="images/marker.png"
                  data-map-marker-size="[31,46]"
                  data-map-marker-anchor="[16,46]"
                >
                  {}
                </div>
              </div>
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
                <li>
                  <a href="#" className="fa fa-google js-wave" />
                </li>
              </ul>
            </div>
          </article>
          {}
        </div>
        <div className="column">
          {}
          <article
            className="fly-card fly-event fly-flip-effect"
            itemScope
            itemType="http://schema.org/Event"
          >
            <div className="boxed flip-front">
              <a
                className="event-media js-wave"
                href="event-details.html"
                itemProp="url"
              >
                <img src="images/temp/event-2.jpg" alt="" itemProp="image" />
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
                    dateTime="2016-12-12T20:14:00"
                    itemProp="startDate"
                  >
                    <i className="material-icons">query_builder</i>
                    12 Dec 2016, 2:00 PM
                  </time>
                </div>
                <div className="event-description" itemProp="description">
                  <p>
                    At vero eos et accusam et justo duo dolores et ea rebum.
                    Stet clita kasd gubergren, no sea takimata sanctus est Lorem
                    ipsum dolor sit amet. Lorem ipsum dolor sit ame. At vero eos
                    et accusam et justo duo dolores et ea rebum. Stet clita kasd
                    gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
                    amet.
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
                  data-map-zoom={14}
                  data-map-type="roadmap"
                  data-map-style="UmmaCharity"
                  data-map-addresdata-map-address="1998 Hulman Blvd, Speedway, IN, 46222"
                  data-map-marker="images/marker.png"
                  data-map-marker-size="[31,46]"
                  data-map-marker-anchor="[16,46]"
                >
                  {}
                </div>
              </div>
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
                <li>
                  <a href="#" className="fa fa-google js-wave" />
                </li>
              </ul>
            </div>
          </article>
          {}
        </div>
      </div>
    </div>
  </section>
);

export default SectionEvents;
