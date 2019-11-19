import React from "react";

class SectionCta extends React.Component {
  render() {
    return (
      <section
        className="section section-cta parallax"
        style={{
          backgroundImage: "url(images/temp/slide-5.jpg)"
        }}
      >
        <div className="container">
          <h2 className="section-title">We help people in need</h2>
          <div className="section-subtitle">
            Become a volunteer and help others
          </div>
          <a href="#" className="btn btn-medium btn-yellow js-wave">
            SIGN UP TODAY
          </a>
        </div>
      </section>
    );
  }
}

export default SectionCta;
