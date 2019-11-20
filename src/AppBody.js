import React from 'react';
import PageLoader from './components/PageLoader';
import Header from './components/Header';
import SliderBanner from './components/SliderBanner';
import SectionServices from './components/SectionServices';
import SectionProjects from './components/SectionProjects';
import SectionCta from './components/SectionCta';
import SectionEvents from './components/SectionEvents';
import SectionTestimonials from './components/SectionTestimonials';
import SectionStats from './components/SectionStats';
import SectionRecentPosts from './components/SectionRecentPosts';
import SectionContact from './components/SectionContact';
import Footer from './components/Footer';

class AppBody extends React.Component {
  render() {
    return (
      <div className="app-body">
        {}
        <PageLoader />
        {}
        {}
        <Header />
        {}
        {}
        <SliderBanner></SliderBanner>
        {}
        {}
        <SectionServices></SectionServices>
        {}
        {}
        <SectionProjects></SectionProjects>
        {}
        {}
        <SectionCta></SectionCta>
        {}
        {}
        <SectionEvents></SectionEvents>
        {}
        {}
        <SectionTestimonials></SectionTestimonials>
        {}
        {}
        <SectionStats></SectionStats>
        {}
        {}
        <SectionRecentPosts></SectionRecentPosts>
        {}
        {}
        <SectionContact></SectionContact>
        {}
        {}
        <Footer></Footer>
        {}
        {}
      </div>
    );
  }
}

export default AppBody;
