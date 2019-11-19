import React from "react";
import NavigationBar from "./NavigationBar";

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
        <NavigationBar></NavigationBar>
        {}
      </header>
    );
  }
}

export default Header;
