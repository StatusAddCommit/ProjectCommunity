import React from 'react';
import AboutTimelineItem from './AboutTimelineItem';

const AboutMissionTimeline = () => (
  <section className="section padding-top-70" id="history">
    <div className="section-heading">
      <div className="container">
        <div className="section-subtitle">OUR HISTORY</div>
        <h2 className="section-title">Timeline of Our Organization</h2>
      </div>
    </div>
    <div className="container">
      <div className="fly-timeline">
        <AboutTimelineItem />
      </div>
    </div>
  </section>
);

export default AboutMissionTimeline;
