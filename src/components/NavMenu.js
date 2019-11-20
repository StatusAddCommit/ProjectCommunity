import React from 'react';

class NavMenu extends React.Component {
  render() {
    return (
      <ul
        className="nav-menu clearfix"
        itemScope
        itemType="http://schema.org/SiteNavigationElement"
      >
        <li className="current-menu-item">
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
          <ul>
            <li>
              <a href="#">Mission and Vision</a>
            </li>
            <li>
              <a href="#">History</a>
            </li>
            <li>
              <a href="#">Pillars</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#">Events</a>
        </li>
        <li>
          <a href="#">How you can help</a>
          <ul>
            <li>
              <a href="#">Campaigns</a>
            </li>
            <li>
              <a href="#">How to Donate</a>
            </li>
            <li>
              <a href="#">Volunteering</a>
            </li>
            <li>
              <a href="#">Online Form</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#">Alliance</a>
          <ul>
            <li>
              <a href="#">Campaigns</a>
            </li>
            <li>
              <a href="#">How to Donate</a>
            </li>
            <li>
              <a href="#">Volunteering</a>
            </li>
            <li>
              <a href="#">Online Form</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#">Contact Us</a>
          <ul>
            <li>
              <a href="#">Campaigns</a>
            </li>
            <li>
              <a href="#">How to Donate</a>
            </li>
            <li>
              <a href="#">Volunteering</a>
            </li>
            <li>
              <a href="#">Online Form</a>
            </li>
          </ul>
        </li>
      </ul>
    );
  }
}

export default NavMenu;
