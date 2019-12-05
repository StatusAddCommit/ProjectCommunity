import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

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

const App = ({ projects, events }) => (
  <div className="app-body">
    <PageLoader />
    <SliderBanner />
    <SectionServices />
    <SectionProjects projects={projects} />
    <SectionCta />
    <SectionEvents events={events} />
    <SectionTestimonials />
    <SectionStats />
    <SectionContact />
    <Footer />
  </div>
);

const mapStateToProps = state => ({
  projects: state.projects,
  events: state.events
});

App.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.array).isRequired,
  events: PropTypes.arrayOf(PropTypes.array).isRequired
};

export default connect(mapStateToProps)(App);
