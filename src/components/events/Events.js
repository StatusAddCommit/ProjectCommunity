import React from 'react';
import EventsBanner from './EventsBanner';
import EventsSection from './EventsSection';
import Footer from '../Footer';

class Events extends React.Component {
  render() {
    return (
      <div>
        <EventsBanner />
        <EventsSection />
        <Footer />
      </div>
    );
  }
}

export default Events;
