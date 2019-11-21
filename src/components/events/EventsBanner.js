import React from "react";

class EventsBanner extends React.Component {
  render() {
    return (
      <section
        className="fly-header parallax overlay"
        style={{
          backgroundImage: "url(images/temp/slide-13.jpg)"
        }}
      >
        <div className="fly-header-content">
          <div className="page-subtitle">Upcoming</div>
          <h1 className="page-title">Events in 2 Columns</h1>
        </div>
      </section>
    );
  }
}

export default EventsBanner;
