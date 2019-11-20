import React from 'react';

class Project extends React.Component {
  render() {
    return (
      <div className="boxed flip-front">
        <a
          className="project-media js-wave"
          href="project-details.html"
          itemProp="url"
        >
          <img src="images/temp/project-7.jpg" alt itemProp="image" />
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
              <i className="material-icons">location_on</i>Mombasa, Kenya
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
                <div className="value" data-raised={12731}>
                  <sup>$</sup>12,731
                </div>
              </li>
              <li>
                <div className="label">goal</div>
                <div className="value" data-goal={22500} itemProp="target">
                  <sup>$</sup>22,500
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
    );
  }
}

export default Project;
