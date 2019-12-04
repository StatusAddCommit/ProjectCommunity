import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import getData from '../actions/get-data';

import NavMenu from './NavMenu';

class Header extends React.Component {
  componentDidMount() {
    const { props } = this;
    props.getData();
  }

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
              {/* DO NOT CHANGE # ANCHOR TO BUTTON (will break mobile nav menu) */}
              <a href="#" />
            </div>
            <div className="navigation-bar-flex">
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
  }
}

const mapStateToProps = state => ({
  projects: state.projects,
  events: state.events
});

const matchDispatchToProps = dispatch => {
  return bindActionCreators({ getData }, dispatch);
};

Header.propTypes = {
  getData: PropTypes.func.isRequired
};

export default connect(mapStateToProps, matchDispatchToProps)(Header);
