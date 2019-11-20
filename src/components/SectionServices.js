import React from 'react';

class SectionServices extends React.Component {
  render() {
    return (
      <section className="flex-container fly-services">
        <div className="fly-service">
          <div className="service-content">
            <i className="material-icons">language</i>
            <h3 className="title">Spread The Word</h3>
            <div className="description">
              Ut wisi enim ad minim veniam, quis nostrud exerci tation
              ullamcorper
            </div>
          </div>
          <div className="service-buttons">
            <a href="#" className="btn btn-medium js-wave">
              READ MORE
            </a>
          </div>
        </div>
        <div className="fly-service">
          <div className="service-content">
            <i className="material-icons">face</i>
            <h3 className="title">Make Donations</h3>
            <div className="description">
              Ut wisi enim ad minim veniam, quis nostrud exerci tation
              ullamcorper
            </div>
          </div>
          <div className="service-buttons">
            <a href="#" className="btn btn-medium js-wave">
              READ MORE
            </a>
          </div>
        </div>
        <div className="fly-service">
          <div className="service-content">
            <i className="material-icons">favorite_border</i>
            <h3 className="title">Make People Happy</h3>
            <div className="description">
              Ut wisi enim ad minim veniam, quis nostrud exerci tation
              ullamcorper
            </div>
          </div>
          <div className="service-buttons">
            <a href="#" className="btn btn-medium js-wave">
              READ MORE
            </a>
          </div>
        </div>
        <div className="fly-service">
          <div className="service-content">
            <i className="material-icons">supervisor_account</i>
            <h3 className="title">Volunteer Now</h3>
            <div className="description">
              Ut wisi enim ad minim veniam, quis nostrud exerci tation
              ullamcorper
            </div>
          </div>
          <div className="service-buttons">
            <a href="#" className="btn btn-medium js-wave">
              READ MORE
            </a>
          </div>
        </div>
      </section>
    );
  }
}

export default SectionServices;
