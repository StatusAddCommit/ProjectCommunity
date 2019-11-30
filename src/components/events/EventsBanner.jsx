import React from 'react';
import messages from '../../constants/messages';

const { events } = messages;

const EventsBanner = () => (
  <section
    className="fly-header parallax overlay"
    style={{
      backgroundImage: `url(${events.BannerImg})`
    }}
  >
    <div className="fly-header-content">
      <div className="page-subtitle">{events.BannerSub}</div>
      <h1 className="page-title">{events.BannerTitle}</h1>
    </div>
  </section>
);

export default EventsBanner;
