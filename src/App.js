import React from 'react';
import PageLoader from './components/PageLoader';
// import Header from './components/Header';  // moved to index.js
import SliderBanner from './components/SliderBanner';
import SectionServices from './components/SectionServices';
import SectionProjects from './components/SectionProjects';
import SectionCta from './components/SectionCta';
import SectionEvents from './components/SectionEvents';
import SectionTestimonials from './components/SectionTestimonials';
import SectionStats from './components/SectionStats';
// import SectionRecentPosts from './components/SectionRecentPosts';
import SectionContact from './components/SectionContact';
import Footer from './components/Footer';

class App extends React.Component {
  render() {
    return (
      <div className="app-body">
        {}
        <PageLoader />
        {}
        {}
        {/* <Header /> */}
        {}
        {}
        <SliderBanner />
        {}
        {}
        <SectionServices />
        {}
        {}
        <SectionProjects />
        {}
        {}
        <SectionCta />
        {}
        {}
        <SectionEvents />
        {}
        {}
        <SectionTestimonials />
        {}
        {}
        <SectionStats />
        {}
        {}
        {/* <SectionRecentPosts /> */}
        {}
        {}
        <SectionContact />
        {/* <a href="/" id="contact">
          {' '}
        </a> */}
        {}
        {}
        <Footer />
        {}
        {}
      </div>
    );
  }
}

export default App;
