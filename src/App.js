import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import eventsUpdate from './actions/events-update';

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

class App extends React.Component {
  constructor(props) {
    super(props);
    this.onEventsUpdate = this.onEventsUpdate.bind(this);
  }

  componentDidMount() {
    axios
      .get('/umma-server/getData')
      .then(res => this.onEventsUpdate(res.data.events))
      .catch(err => console.error(err));
  }
  // console.log(res.data.events)

  // DO NOT CHANGE TO ARROW FN B/C HOISTING
  onEventsUpdate(events) {
    // const { props } = this;
    // this.props.onEventsUpdate(events);
    console.log('==>', this);
    console.log('=xxx=>', events);
  }

  render() {
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
  }
}

const mapStateToProps = state => ({
  projects: state.projects,
  events: state.events
});

const mapActionsToProps = {
  onEventsUpdate: eventsUpdate
};

export default connect(mapStateToProps, mapActionsToProps)(App);
