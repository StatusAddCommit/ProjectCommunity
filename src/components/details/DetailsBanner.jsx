import React from 'react';

/* TODO: replace remaining static data with live API data */

const DetailsBanner = () => (
  <section
    className="fly-header parallax overlay"
    style={{
      backgroundImage: 'url(images/temp/slide-16.jpg)'
    }}
  >
    <div className="fly-header-content">
      <div className="page-subtitle">Event Details</div>
      <h1 id="projectTitle1" className="page-title" itemProp="title">
        Here Goes the Event Title
      </h1>
    </div>
  </section>
);

export default DetailsBanner;
