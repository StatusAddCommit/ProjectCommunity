import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import messages from '../constants/messages';

const { misc } = messages;

const NavMenu = () => {
  const { location: { pathname = '' } = {} } = window;
  const [currentPage, setCurrentPage] = useState(
    pathname.split('/')[1] || 'home'
  );

  return (
    <ul
      className="nav-menu clearfix"
      itemScope
      itemType="http://schema.org/SiteNavigationElement"
    >
      <li className={currentPage === 'home' ? 'current-menu-item' : ''}>
        <a href="/">Home</a>
      </li>
      <li className={currentPage === 'about' ? 'current-menu-item' : ''}>
        <Link
          to="/about"
          onClick={() => {
            setCurrentPage('about');
          }}
        >
          About
        </Link>
        <ul>
          <li>
            <a
              className="anchor"
              href="/about#"
              onClick={() => {
                setCurrentPage('about');
              }}
            >
              Mission and Vision
            </a>
          </li>
          <li>
            <a
              className="anchor"
              href="/about#team"
              onClick={() => {
                setCurrentPage('about');
              }}
            >
              Team Members
            </a>
          </li>
          <li>
            <a
              className="anchor"
              href="/about#history"
              onClick={() => {
                setCurrentPage('about');
              }}
            >
              Our History
            </a>
          </li>
        </ul>
      </li>
      <li className={currentPage === 'events' ? 'current-menu-item' : ''}>
        <Link
          to="/events"
          onClick={() => {
            setCurrentPage('events');
          }}
        >
          Events
        </Link>
        <ul>
          <li>
            <a
              className="anchor"
              href="/#events"
              onClick={() => {
                setCurrentPage('home');
              }}
            >
              Upcoming Events
            </a>
          </li>
          <li>
            <Link
              to="/events"
              onClick={() => {
                setCurrentPage('events');
              }}
            >
              All Events
            </Link>
          </li>
        </ul>
      </li>
      <li>
        <a href="/#services">How you can help</a>
        <ul>
          <li>
            <a
              href="/#projects"
              onClick={() => {
                setCurrentPage('home');
              }}
            >
              Current Projects
            </a>
          </li>
          <li>
            <a href={misc.DonateLink}>Donate to Our Cause</a>
          </li>
          <li>
            <a href={misc.VolunteerLink}>Volunteer Sign-Up</a>
          </li>
        </ul>
      </li>
      <li>
        <a
          className="anchor"
          href="/#contact"
          onClick={() => {
            setCurrentPage('home');
          }}
        >
          Contact Us
        </a>
      </li>
    </ul>
  );
};

export default NavMenu;
