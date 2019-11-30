import React from 'react';

const AboutTeamMember = () => (
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
            Jonathan Greg
          </div>
          <div className="member-position" itemProp="jobTitle">
            Founder & President
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
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, Lorem ipsum
            dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
            tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
            voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
            Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
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
);

export default AboutTeamMember;
