import React, { Component } from 'react';
import { Link } from 'react-router-dom';

/* TODO: replace local state with state hook */

class NavMenu extends Component {
  constructor(props) {
    super(props);
    const { location: { pathname = '' } = {} } = window;
    this.state = {
      currentPage: pathname.split('/')[1] || 'home'
    };
  }

  setCurrentPage = page => {
    this.setState(() => ({
      currentPage: page
    }));
  };

  render() {
    const { currentPage } = this.state;
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
              this.setCurrentPage('about');
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
                  this.setCurrentPage('about');
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
                  this.setCurrentPage('about');
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
                  this.setCurrentPage('about');
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
              this.setCurrentPage('events');
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
                  this.setCurrentPage('home');
                }}
              >
                Upcoming Events
              </a>
            </li>
            <li>
              <Link
                to="/events"
                onClick={() => {
                  this.setCurrentPage('events');
                }}
              >
                All Events
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <a href="#">How you can help</a>
          <ul>
            <li>
              <a
                href="/#projects"
                onClick={() => {
                  this.setCurrentPage('home');
                }}
              >
                Current Projects
              </a>
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
          <a
            className="anchor"
            href="/#contact"
            onClick={() => {
              this.setCurrentPage('home');
            }}
          >
            Contact Us
          </a>
        </li>
      </ul>
    );
  }
}

export default NavMenu;
