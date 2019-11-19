import React from "react";

class FlySliderBanner extends React.Component {
  render() {
    return (
      <div
        className="fly-slider invisible"
        data-rotation-interval={10000}
        data-rotation-duration={1000}
      >
        <div className="cube">
          <section
            className="slide"
            style={{
              backgroundImage: "url(images/temp/slide-1.jpg)"
            }}
          >
            <div className="slide-content">
              <h1 className="page-title">Helping Hands for Everyone</h1>
              <div className="page-subtitle">
                Choose the way to help people in need
              </div>
              <div className="volunteer-cta">
                <a href="#" className="btn btn-large btn-icon js-wave">
                  <i className="material-icons">arrow_forward</i>BECOME A
                  VOLUNTEER TODAY
                </a>
                <div className="note">
                  no credit card needed / secure payments
                </div>
              </div>
            </div>
          </section>
          <section
            className="slide"
            style={{
              backgroundImage: "url(images/temp/slide-2.jpg)"
            }}
          >
            <div className="slide-content">
              <h2 className="page-title">Helping Hands for Everyone</h2>
              <div className="page-subtitle">
                Choose the way to help people in need
              </div>
              <div className="volunteer-cta">
                <a href="#" className="btn btn-large btn-icon js-wave">
                  <i className="material-icons">arrow_forward</i>BECOME A
                  VOLUNTEER TODAY
                </a>
                <div className="note">
                  no credit card needed / secure payments
                </div>
              </div>
            </div>
          </section>
          <section
            className="slide"
            style={{
              backgroundImage: "url(images/temp/slide-3.jpg)"
            }}
          >
            <div className="slide-content">
              <h2 className="page-title">Helping Hands for Everyone</h2>
              <div className="page-subtitle">
                Choose the way to help people in need
              </div>
              <div className="volunteer-cta">
                <a href="#" className="btn btn-large btn-icon js-wave">
                  <i className="material-icons">arrow_forward</i>BECOME A
                  VOLUNTEER TODAY
                </a>
                <div className="note">
                  no credit card needed / secure payments
                </div>
              </div>
            </div>
          </section>
          <section
            className="slide"
            style={{
              backgroundImage: "url(images/temp/slide-4.jpg)"
            }}
          >
            <div className="slide-content">
              <h2 className="page-title">Helping Hands for Everyone</h2>
              <div className="page-subtitle">
                Choose the way to help people in need
              </div>
              <div className="volunteer-cta">
                <a href="#" className="btn btn-large btn-icon js-wave">
                  <i className="material-icons">arrow_forward</i>BECOME A
                  VOLUNTEER TODAY
                </a>
                <div className="note">
                  no credit card needed / secure payments
                </div>
              </div>
            </div>
          </section>
        </div>
        <a className="slider-control prev js-wave" href="#">
          <i className="material-icons">keyboard_arrow_left</i>
        </a>
        <a className="slider-control next js-wave" href="#">
          <i className="material-icons">keyboard_arrow_right</i>
        </a>
      </div>
    );
  }
}

export default FlySliderBanner;
