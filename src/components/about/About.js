import React from 'react';
import AboutPageLoader from './AboutPageLoader';
import AboutHeader from './AboutHeader';
import AboutSectionTeam from './AboutSectionTeam';
import AboutMissionTimeline from './AboutMissionTimeline';
import AboutFooter from './AboutFooter';

class About extends React.Component {
  render() {
    return (
      <div>
        {/* <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WPWGNL"
            height="0"
            width="0"
            style="display:none;visibility:hidden"
          ></iframe>
        </noscript> */}
        {}
        {}
        <AboutPageLoader></AboutPageLoader>
        {}
        {}
        <AboutHeader></AboutHeader>
        {}
        {}
        <section
          className="fly-header parallax overlay"
          style={{
            backgroundImage: 'url(images/temp/slide-25.jpg)'
          }}
        >
          <div className="fly-header-content">
            <div className="page-subtitle">ABOUT OUR COMPANY</div>
            <h1 className="page-title">Our Mission</h1>
          </div>
        </section>
        {}
        {}
        <AboutSectionTeam></AboutSectionTeam>
        {}
        {}
        <AboutMissionTimeline></AboutMissionTimeline>
        {}
        {}
        <AboutFooter></AboutFooter>
        {}
      </div>
    );
  }
}

export default About;
