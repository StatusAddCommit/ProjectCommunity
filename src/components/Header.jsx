import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import eventsUpdate from '../actions/events-update';
import projectsUpdate from '../actions/projects-update';

import NavMenu from './NavMenu';

class Header extends React.Component {
  /* TODO: change async call to use redux thunk */
  componentDidMount() {
    const { props } = this;
    axios
      .get('/umma-server/getData')
      .then(res => {
        // res.setHeader("Secure;SameSite=None");
        props.projectsUpdate(res.data.projects);
        props.eventsUpdate(res.data.events);
      })
      .catch(err => console.error(err));
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
  return bindActionCreators({ projectsUpdate, eventsUpdate }, dispatch);
};

Header.propTypes = {
  eventsUpdate: PropTypes.func.isRequired,
  projectsUpdate: PropTypes.func.isRequired
};

export default connect(mapStateToProps, matchDispatchToProps)(Header);
