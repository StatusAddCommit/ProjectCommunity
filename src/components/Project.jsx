import React from 'react';
import messages from '../constants/messages';

const { social } = messages;

const Project = ({ projects }) =>
  projects.map(project => {
    const pName = project[0];
    const pUrl = project[1];
    const pImg = project[2];
    const pLoc = project[3] && project[3];
    const pDesc = project[4];
    const pDonateLink = project[5];
    const pDonateGoal = project[6];
    const pDonateRaised = project[7];
    const pDonateEnable = project[8];

    return (
      <article
        className="fly-card fly-project vertical fly-flip-effect"
        itemScope
        itemType="http://schema.org/DonateAction"
        key={pName}
      >
        <div className="boxed flip-front">
          <a
            className="project-media js-wave waves-effect"
            href={!pUrl ? null : pUrl}
            itemProp="url"
          >
            <img
              src={!pImg ? 'images/temp/project-7.jpg' : pImg}
              alt="Current project"
              itemProp="image"
            />
            {pDonateEnable && (
              <span className="progress">
                <span className="progress-label">0%</span>
                <span className="progress-bar" />
              </span>
            )}
          </a>
          <div className="project-content">
            <h3 className="project-title" itemProp="name">
              <a href={!pUrl ? null : pUrl}>{pName}</a>
            </h3>

            <div className="project-location">
              <a href="#" className="flip-button" itemProp="location">
                <i className="material-icons">location_on</i>
                {!pLoc ? 'Earth, Solar System' : pLoc}
              </a>
            </div>

            <div className="project-description" itemProp="description">
              <p>
                {!pDesc
                  ? 'Description coming soon. Thank you for your patience!'
                  : pDesc}
              </p>
            </div>
            <div className="project-footer">
              <ul className="project-stats">
                <li>
                  <div className="label">{!pDonateEnable ? '' : 'raised'}</div>
                  <div
                    className="value"
                    data-raised={
                      !pDonateRaised ? 0 : pDonateRaised.replace(',', '')
                    }
                  >
                    <sup>{!pDonateEnable ? '' : '$'}</sup>
                    {!pDonateRaised ? '' : pDonateRaised}
                  </div>
                </li>
                <li>
                  <div className="label">{!pDonateEnable ? '' : 'goal'}</div>
                  <div
                    className="value"
                    data-goal={!pDonateGoal ? 0 : pDonateGoal.replace(',', '')}
                    itemProp="target"
                  >
                    <sup>{!pDonateEnable ? '' : '$'}</sup>
                    {!pDonateGoal ? '' : pDonateGoal}
                  </div>
                </li>
              </ul>
              <div className="project-buttons">
                <a
                  href={!pDonateLink ? pUrl : pDonateLink}
                  className="btn btn-yellow js-wave"
                  itemProp="potentialAction"
                >
                  {!pDonateEnable ? 'Details' : 'Donate'}
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="boxed flip-back">
          <div className="card-map" data-placeholder="waiting for map">
            <div
              className="google-map"
              data-map-zoom={!pLoc ? 1 : 13}
              data-map-type="roadmap"
              data-map-style="UmmaCharity"
              data-map-address={!pLoc ? 'USA' : pLoc}
              data-map-marker={!pLoc ? '' : 'images/marker.png'}
              data-map-marker-size="[31,46]"
              data-map-marker-anchor="[16,46]"
            />
          </div>
          <ul className="card-social">
            <li>
              <a href={social.fb} className="fa fa-facebook js-wave" />
            </li>
            <li>
              <a href={social.tw} className="fa fa-twitter js-wave" />
            </li>
            <li>
              <a href={social.ig} className="fa fa-instagram js-wave" />
            </li>
          </ul>
        </div>
      </article>
    );
  });

export default Project;
