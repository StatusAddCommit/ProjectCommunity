import React from 'react';
import AboutTeamMember from './AboutTeamMember';

/* TODO: replace all remaining static data with data from constants/messages.js */
const AboutSectionTeam = () => (
  <section className="section no-padding-bottom" id="team">
    <div className="container">
      <div className="fly-team-members columns4 flex-container">
        <AboutTeamMember />
        <div className="column">
          {}
          <div
            className="fly-card fly-team-member fly-flip-effect"
            itemScope
            itemType="http://schema.org/Person"
          >
            <div className="boxed flip-front">
              <div className="member-media">
                <img src="images/temp/team-2.jpg" alt="" itemProp="image" />
              </div>
              <div className="member-content">
                <div className="member-name" itemProp="name">
                  Mikel Willson
                </div>
                <div className="member-position" itemProp="jobTitle">
                  Director of Communications
                </div>
                <a href="#" className="member-link flip-button">
                  <i className="material-icons">arrow_forward</i>
                  see profile
                </a>
              </div>
            </div>
            <div className="boxed flip-back">
              <div className="member-name" itemProp="name">
                Jonathan Greg
              </div>
              <div className="member-description" itemProp="description">
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                  ipsum dolor sit amet, Lorem ipsum dolor sit amet, consetetur
                  sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                  labore et dolore magna aliquyam erat, sed diam voluptua. At
                  vero eos et accusam et justo duo dolores et ea rebum. Stet
                  clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
                  dolor sit amet. Lorem ipsum dolor sit amet.
                </p>
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
          </div>
          {}
        </div>
        <div className="column">
          {}
          <div
            className="fly-card fly-team-member fly-flip-effect"
            itemScope
            itemType="http://schema.org/Person"
          >
            <div className="boxed flip-front">
              <div className="member-media">
                <img src="images/temp/team-3.jpg" alt="" itemProp="image" />
              </div>
              <div className="member-content">
                <div className="member-name" itemProp="name">
                  Anna Kething
                </div>
                <div className="member-position" itemProp="jobTitle">
                  Project Coordinator
                </div>
                <a href="#" className="member-link flip-button">
                  <i className="material-icons">arrow_forward</i>
                  see profile
                </a>
              </div>
            </div>
            <div className="boxed flip-back">
              <div className="member-name" itemProp="name">
                Jonathan Greg
              </div>
              <div className="member-description" itemProp="description">
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                  ipsum dolor sit amet, Lorem ipsum dolor sit amet, consetetur
                  sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                  labore et dolore magna aliquyam erat, sed diam voluptua. At
                  vero eos et accusam et justo duo dolores et ea rebum. Stet
                  clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
                  dolor sit amet. Lorem ipsum dolor sit amet.
                </p>
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
          </div>
          {}
        </div>
        <div className="column">
          {}
          <div
            className="fly-card fly-team-member fly-flip-effect"
            itemScope
            itemType="http://schema.org/Person"
          >
            <div className="boxed flip-front">
              <div className="member-media">
                <img src="images/temp/team-1.jpg" alt="" itemProp="image" />
              </div>
              <div className="member-content">
                <div className="member-name" itemProp="name">
                  Joecy Manning
                </div>
                <div className="member-position" itemProp="jobTitle">
                  Executive Assistant
                </div>
                <a href="#" className="member-link flip-button">
                  <i className="material-icons">arrow_forward</i>
                  see profile
                </a>
              </div>
            </div>
            <div className="boxed flip-back">
              <div className="member-name" itemProp="name">
                Jonathan Greg
              </div>
              <div className="member-description" itemProp="description">
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                  ipsum dolor sit amet, Lorem ipsum dolor sit amet, consetetur
                  sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                  labore et dolore magna aliquyam erat, sed diam voluptua. At
                  vero eos et accusam et justo duo dolores et ea rebum. Stet
                  clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
                  dolor sit amet. Lorem ipsum dolor sit amet.
                </p>
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
          </div>
          {}
        </div>
      </div>
    </div>
  </section>
);

export default AboutSectionTeam;
