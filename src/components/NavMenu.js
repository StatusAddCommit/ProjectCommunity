import React from 'react';
import { Link } from 'react-router-dom';
// import { Hashlink as Link } from 'react-router-hash-link';

const NavMenu = () => {
  return (
    <ul
      className="nav-menu clearfix"
      itemScope
      itemType="http://schema.org/SiteNavigationElement"
    >
      {/* TODO: FIX current menu item to display dynamically */}
      <li className="current-menu-item">
        <a href="/">Home</a>
      </li>
      <li>
        <Link to="/about">About</Link>
        {/* <a href="/about">About</a> */}
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
        <a className="anchor" href="#events">Events</a>
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
        <a className="anchor" href="#contact">Contact Us</a>
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
};

export default NavMenu;
