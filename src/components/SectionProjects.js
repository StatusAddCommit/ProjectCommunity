import React from 'react';
import Project from './Project';

class SectionProjects extends React.Component {
  render() {
    return (
      <section className="section padding-bottom-70" id="projects">
        <div className="section-heading">
          <div className="container">
            <div className="section-subtitle">WHAT WE ARE UP TO</div>
            <h2 className="section-title">Current Projects</h2>
          </div>
        </div>
        <div className="container">
          <div className="fly-projects alternate-layout">
            {}
            <article
              className="fly-card fly-project fly-flip-effect vertical"
              itemScope
              itemType="http://schema.org/DonateAction"
            >
              <Project />
              <div className="boxed flip-back">
                <div className="card-map" data-placeholder="waiting for map">
                  <div
                    className="google-map"
                    data-map-zoom={14}
                    data-map-type="roadmap"
                    data-map-style="UmmaCharity"
                    data-map-address="1998 Hulman Blvd, Speedway, IN, 46222"
                    data-map-marker="images/marker.png"
                    data-map-marker-size="[31,46]"
                    data-map-marker-anchor="[16,46]"
                  >
                    {}
                  </div>
                </div>
                <ul className="card-social">
                  <li>
                    <a href="#" className="fa fa-facebook js-wave" />
                  </li>
                  <li>
                    <a href="#" className="fa fa-twitter js-wave" />
                  </li>
                  <li>
                    <a href="#" className="fa fa-instagram js-wave" />
                  </li>
                  <li>
                    <a href="#" className="fa fa-google js-wave" />
                  </li>
                </ul>
              </div>
            </article>
            {}
            {}
            <article
              className="fly-card fly-project fly-flip-effect vertical"
              itemScope
              itemType="http://schema.org/DonateAction"
            >
              <div className="boxed flip-front">
                <a
                  className="project-media js-wave"
                  href="project-details.html"
                  itemProp="url"
                >
                  <img src="images/temp/project-8.jpg" alt itemProp="image" />
                  <span className="progress">
                    <span className="progress-label">0%</span>
                    <span className="progress-bar" />
                  </span>
                </a>
                <div className="project-content">
                  <h3 className="project-title" itemProp="name">
                    <a href="project-details.html">Here goes the Cause Title</a>
                  </h3>
                  <div className="project-location">
                    <a href="#" className="flip-button" itemProp="location">
                      <i className="material-icons">location_on</i>Mombasa,
                      Kenya
                    </a>
                  </div>
                  <div className="project-description" itemProp="description">
                    <p>
                      Nam liber tempor cum soluta nobis eleifend option congue
                      nihil imperdiet doming id quod mazim placerat facer possim
                      assum. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
                      amet, consectissim posuere cubilia Curae Suspendisse at
                      consectetur massa.
                    </p>
                  </div>
                  <div className="project-footer">
                    <ul className="project-stats">
                      <li>
                        <div className="label">raised</div>
                        <div className="value" data-raised={26456}>
                          <sup>$</sup>
                          26,456
                        </div>
                      </li>
                      <li>
                        <div className="label">goal</div>
                        <div
                          className="value"
                          data-goal={25000}
                          itemProp="target"
                        >
                          <sup>$</sup>
                          25,000
                        </div>
                      </li>
                    </ul>
                    <div className="project-buttons">
                      <a
                        href="project-details.html#donateForm"
                        className="btn btn-yellow js-wave"
                        itemProp="potentialAction"
                      >
                        Donate
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="boxed flip-back">
                <div className="card-map" data-placeholder="waiting for map">
                  <div
                    className="google-map"
                    data-map-zoom={14}
                    data-map-type="roadmap"
                    data-map-style="UmmaCharity"
                    data-map-address="1998 Hulman Blvd, Speedway, IN, 46222"
                    data-map-marker="images/marker.png"
                    data-map-marker-size="[31,46]"
                    data-map-marker-anchor="[16,46]"
                  >
                    {}
                  </div>
                </div>
                <ul className="card-social">
                  <li>
                    <a href="#" className="fa fa-facebook js-wave" />
                  </li>
                  <li>
                    <a href="#" className="fa fa-twitter js-wave" />
                  </li>
                  <li>
                    <a href="#" className="fa fa-instagram js-wave" />
                  </li>
                  <li>
                    <a href="#" className="fa fa-google js-wave" />
                  </li>
                </ul>
              </div>
            </article>
            {}
            {}
            <article
              className="fly-card fly-project fly-flip-effect vertical"
              itemScope
              itemType="http://schema.org/DonateAction"
            >
              <div className="boxed flip-front">
                <a
                  className="project-media js-wave"
                  href="project-details.html"
                  itemProp="url"
                >
                  <img src="images/temp/project-9.jpg" alt itemProp="image" />
                  <span className="progress">
                    <span className="progress-label">0%</span>
                    <span className="progress-bar" />
                  </span>
                </a>
                <div className="project-content">
                  <h3 className="project-title" itemProp="name">
                    <a href="project-details.html">Here goes the Cause Title</a>
                  </h3>
                  <div className="project-location">
                    <a href="#" className="flip-button" itemProp="location">
                      <i className="material-icons">location_on</i>
                      Mombasa, Kenya
                    </a>
                  </div>
                  <div className="project-description" itemProp="description">
                    <p>
                      Nam liber tempor cum soluta nobis eleifend option congue
                      nihil imperdiet doming id quod mazim placerat facer possim
                      assum. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
                      amet, consectissim posuere cubilia Curae Suspendisse at
                      consectetur massa.
                    </p>
                  </div>
                  <div className="project-footer">
                    <ul className="project-stats">
                      <li>
                        <div className="label">raised</div>
                        <div className="value" data-raised={8345}>
                          <sup>$</sup>
                          8,345
                        </div>
                      </li>
                      <li>
                        <div className="label">goal</div>
                        <div
                          className="value"
                          data-goal={24500}
                          itemProp="target"
                        >
                          <sup>$</sup>
                          24,500
                        </div>
                      </li>
                    </ul>
                    <div className="project-buttons">
                      <a
                        href="project-details.html#donateForm"
                        className="btn btn-yellow js-wave"
                        itemProp="potentialAction"
                      >
                        Donate
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="boxed flip-back">
                <div className="card-map" data-placeholder="waiting for map">
                  <div
                    className="google-map"
                    data-map-zoom={14}
                    data-map-type="roadmap"
                    data-map-style="UmmaCharity"
                    data-map-address="1998 Hulman Blvd, Speedway, IN, 46222"
                    data-map-marker="images/marker.png"
                    data-map-marker-size="[31,46]"
                    data-map-marker-anchor="[16,46]"
                  >
                    {}
                  </div>
                </div>
                <ul className="card-social">
                  <li>
                    <a href="#" className="fa fa-facebook js-wave" />
                  </li>
                  <li>
                    <a href="#" className="fa fa-twitter js-wave" />
                  </li>
                  <li>
                    <a href="#" className="fa fa-instagram js-wave" />
                  </li>
                  <li>
                    <a href="#" className="fa fa-google js-wave" />
                  </li>
                </ul>
              </div>
            </article>
            {}
          </div>
        </div>
      </section>
    );
  }
}

export default SectionProjects;
