import React from 'react';
import messages from '../../constants/messages';

const {
  about: { team }
} = messages;

const AboutTeamMember = () =>
  team.map(member => (
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
              {member.TeamMemberName}
            </div>
            <div className="member-position" itemProp="jobTitle">
              {member.TeamMemberTitle}
            </div>
            <a href="#" className="member-link flip-button">
              <i className="material-icons">arrow_forward</i>
              see profile
            </a>
          </div>
        </div>
        <div className="boxed flip-back">
          <div className="member-name" itemProp="name">
            {member.TeamMemberName}
          </div>
          <div className="member-description" itemProp="description">
            <p>{member.TeamMemberDesc}</p>
          </div>
          <ul className="card-social">
            <li>
              <a
                href={member.TeamMemberFb}
                className="fa fa-facebook js-wave"
              />
            </li>
            <li>
              <a href={member.TeamMemberTw} className="fa fa-twitter js-wave" />
            </li>
            <li>
              <a
                href={member.TeamMemberIg}
                className="fa fa-instagram js-wave"
              />
            </li>
          </ul>
        </div>
      </div>
      {}
    </div>
  ));

export default AboutTeamMember;
