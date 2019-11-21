import React from 'react';
import { Link } from 'react-router-dom';

const NavMenu = () => {
  return (
    <ul
      className="nav-menu clearfix"
      itemScope
      itemType="http://schema.org/SiteNavigationElement"
    >
      {/* TODO: FIX current menu item to display highlight dynamically */}
      <li className="current-menu-item">
        <a href="/">Home</a>
      </li>
      <li>
        <Link to="/about">About</Link>
        {/* <a href="/about">About</a> */}
        <ul>
          <li>
            <a className="anchor" href="/about#">
              Mission and Vision
            </a>
          </li>
          <li>
            <a className="anchor" href="/about#history">
              History
            </a>
          </li>
          {/* <li>
            <a href="#">Pillars</a>
          </li> */}
        </ul>
      </li>
      <li>
        <a className="anchor" href="#events">
          Events
        </a>
        <ul>
          <li>
            <a href="#events">Upcoming Events</a>
          </li>
          <li>
            <a href="#">All Events</a>
          </li>
        </ul>
      </li>
      <li>
        <a href="#">How you can help</a>
        <ul>
          <li>
            <a href="/#projects">Current Projects</a>
          </li>
          <li>
            <a href="#">Donate to Our Cause</a>
          </li>
          <li>
            <a href="#">Volunteer Sign-Up</a>
          </li>
        </ul>
      </li>
      <li>
        <a href="#">Alliance</a>
        {/* <ul>
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
        </ul> */}
      </li>
      <li>
        <a className="anchor" href="/#contact">
          Contact Us
        </a>
      </li>
    </ul>
  );
};

export default NavMenu;
