import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import eventsUpdate from './actions/events-update';
import projectsUpdate from './actions/projects-update';

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

class App extends Component {
  /* TODO: change async call to use redux thunk */
  componentDidMount() {
    const { props } = this;
    axios
      .get('/umma-server/getData')
      .then(res => {
        props.projectsUpdate(res.data.projects);
        props.eventsUpdate(res.data.events);
      })
      .catch(err => console.error(err));
  }

  render() {
    const {
      props: { projects, events }
    } = this;
    return (
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
  }
}

const mapStateToProps = state => ({
  projects: state.projects,
  events: state.events
});

const matchDispatchToProps = dispatch => {
  return bindActionCreators({ projectsUpdate, eventsUpdate }, dispatch);
};

App.propTypes = {
  eventsUpdate: PropTypes.func.isRequired,
  projectsUpdate: PropTypes.func.isRequired,
  projects: PropTypes.arrayOf(PropTypes.array).isRequired,
  events: PropTypes.arrayOf(PropTypes.array).isRequired
};

export default connect(mapStateToProps, matchDispatchToProps)(App);
