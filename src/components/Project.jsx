import React from 'react';

const Project = ({ projects }) =>
  /* TODO:
    1) replace static data with live API data from prop.projects;
    2) fix donate progress bar & flip map */
  projects.map(project => (
    <article
      className="fly-card fly-project fly-flip-effect vertical"
      itemScope
      itemType="http://schema.org/DonateAction"
      key={project[0]}
    >
      <div className="boxed flip-front">
        <a
          className="project-media js-wave"
          href="project-details.html"
          itemProp="url"
        >
          <img src="images/temp/project-7.jpg" alt="" itemProp="image" />
          <span className="progress">
            <span className="progress-label">0%</span>
            <span className="progress-bar" />
          </span>
        </a>
        <div className="project-content">
          <h3 className="project-title" itemProp="name">
            <a href="project-details.html">{project[0]}</a>
          </h3>

          <div className="project-location">
            <a href="#" className="flip-button" itemProp="location">
              <i className="material-icons">location_on</i>
              Mombasa, Kenya
            </a>
          </div>

          <div className="project-description" itemProp="description">
            <p>
              Nam liber tempor cum soluta nobis eleifend option congue nihil
              imperdiet doming id quod mazim placerat facer possim assum. Lorem
              ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectissim
              posuere cubilia Curae Suspendisse at consectetur massa.
            </p>
          </div>
          <div className="project-footer">
            <ul className="project-stats">
              <li>
                <div className="label">raised</div>
                <div className="value" data-raised={12731} key={project[0]}>
                  <sup>$</sup>
                  12,731
                </div>
              </li>
              <li>
                <div className="label">goal</div>
                <div className="value" data-goal={22500} itemProp="target">
                  <sup>$</sup>
                  22,500
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
  ));

export default Project;
