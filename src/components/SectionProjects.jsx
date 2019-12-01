import React from 'react';
import PropTypes from 'prop-types';
import Project from './Project';

const SectionProjects = ({ projects }) => (
  <section className="section padding-bottom-70" id="projects">
    <div className="section-heading">
      <div className="container">
        <div className="section-subtitle">WHAT WE ARE UP TO</div>
        <h2 className="section-title">Current Projects</h2>
      </div>
    </div>
    <div className="container">
      <div className="fly-projects alternate-layout">
        <Project projects={projects} />
      </div>
    </div>
  </section>
);

export default SectionProjects;

SectionProjects.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.array).isRequired
};
