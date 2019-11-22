import React from 'react';
import AboutNavMenu from './AboutNavMenu';
import AboutSearchHeader from './AboutSearchHeader';

const AboutHeader = () => {
  return (
    <header
      id="header"
      className="header"
      itemScope
      itemType="http://schema.org/WPHeader"
    >
      <nav
        className="navigation-bar"
        data-become-sticky={600}
        data-no-placeholder
      >
        <div className="container">
          <div className="hamburger">
            <a href="#" />
          </div>
          <div className="navigation-bar-flex">
            {}
            <div className="logo">
              <a href="/">
                {}
                Umma
                <span>Charity</span>
              </a>
            </div>
            {}
            {}
            <AboutNavMenu />
            {}
            {}
            <AboutSearchHeader />
            {}
            {}
          </div>
        </div>
      </nav>
      {}
    </header>
  );
};

export default AboutHeader;
