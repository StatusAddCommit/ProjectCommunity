import React from 'react';
import NavMenu from './NavMenu';
import SearchHeader from './SearchHeader';

class Header extends React.Component {
  render() {
    return (
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
                <a href="index-2.html">
                  Ummah
                  <span>Charities</span>
                </a>
              </div>
              {}
              {}
              <NavMenu />
              {}
              {}
              <SearchHeader />
              {}
            </div>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;
