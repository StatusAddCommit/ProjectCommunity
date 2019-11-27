import React from 'react';
import PageLoader from './components/PageLoader';
import SliderBanner from './components/SliderBanner';
import SectionServices from './components/SectionServices';
import SectionProjects from './components/SectionProjects';
import SectionCta from './components/SectionCta';
import SectionEvents from './components/SectionEvents';
import SectionTestimonials from './components/SectionTestimonials';
import SectionStats from './components/SectionStats';
import SectionContact from './components/SectionContact';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="app-body">
      <PageLoader />
      <SliderBanner />
      <SectionServices />
      <SectionProjects />
      <SectionCta />
      <SectionEvents />
      <SectionTestimonials />
      <SectionStats />
      <SectionContact />
      <Footer />
    </div>
  );
};

export default App;
