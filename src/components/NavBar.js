import React from 'react';
import NavMenu from './NavMenu';
import SearchHeader from './SearchHeader';

class NavBar extends React.Component {
  render() {
    return (
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
              <a href="index-2.html">
                {}
                Ummah<span>Charity</span>
              </a>
            </div>
            {}
            {}
            <NavMenu></NavMenu>
            {}
            {}
            <SearchHeader></SearchHeader>
            {}
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
