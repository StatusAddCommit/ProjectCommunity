import React from "react";
import EventsPageLoader from "./EventsPageLoader";
import EventsHeader from "./EventsHeader";
import EventsBanner from "./EventsBanner";
import EventsSection from "./EventsSection";
import EventsFooter from "./EventsFooter";

class Events extends React.Component {
  render() {
    return (
      <div>
        {}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WPWGNL"
            height="0"
            width="0"
            style="display:none;visibility:hidden"
          ></iframe>
        </noscript>
        {}
        {}
        <EventsPageLoader></EventsPageLoader>
        {}
        {}
        <EventsHeader></EventsHeader>
        {}
        {}
        <EventsBanner></EventsBanner>
        {}
        {}
        <EventsSection></EventsSection>
        {}
        {}
        <EventsFooter></EventsFooter>
        {}
      </div>
    );
  }
}

export default Events;
