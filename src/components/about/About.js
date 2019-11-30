import React from 'react';
import AboutSectionTeam from './AboutSectionTeam';
import AboutMissionTimeline from './AboutMissionTimeline';
import Footer from '../Footer';
import messages from '../../constants/messages';

const { about } = messages;

const About = () => (
  <div>
    <section
      className="fly-header parallax overlay"
      style={{
        backgroundImage: `url(${about.BannerImg})`
      }}
    >
      <div className="fly-header-content">
        <h1 className="page-title">{about.BannerTitle}</h1>
        <br />
        <div className="page-subtitle">{about.BannerSub}</div>
      </div>
    </section>
    <AboutSectionTeam />
    <AboutMissionTimeline />
    <Footer />
  </div>
);

export default About;
