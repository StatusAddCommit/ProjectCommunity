import React from 'react';
// import PageLoader from '../PageLoader';
// import AboutHeader from './AboutHeader';
import AboutSectionTeam from './AboutSectionTeam';
import AboutMissionTimeline from './AboutMissionTimeline';
import Footer from '../Footer';

class About extends React.Component {
  render() {
    return (
      <div>
        {/* <PageLoader /> */}
        {/* <AboutHeader /> */}
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
        <AboutSectionTeam />
        {}
        {}
        <AboutMissionTimeline />
        {}
        {}
        <Footer />
        {}
      </div>
    );
  }
}

export default About;
