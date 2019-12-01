import React from 'react';
import NavMenu from './NavMenu';

const Header = () => (
  <header
    id="header"
    className="header"
    itemScope
    itemType="http://schema.org/WPHeader"
  >
    <nav
      className="navigation-bar"
      data-become-sticky={100}
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
              Umma
              <span>Charities</span>
            </a>
          </div>
          <NavMenu />
        </div>
      </div>
    </nav>
  </header>
);

export default Header;
