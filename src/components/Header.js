import React from 'react';
import NavBar from './NavBar';

class Header extends React.Component {
  render() {
    return (
      <header
        id="header"
        className="header"
        itemScope
        itemType="http://schema.org/WPHeader"
      >
        {}
        <NavBar />
        {}
      </header>
    );
  }
}

export default Header;
