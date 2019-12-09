import React from 'react';
import messages from '../../constants/messages';

const { notFoundImg } = messages;

const NotFoundError = () => (
  <section
    className="fly-header parallax overlay"
    style={{
      backgroundImage: `url(${notFoundImg})`
    }}
  >
    <div className="fly-header-content">
      <div className="page-subtitle">
        Sorry, we cannot find the page You are looking for
      </div>
      <h1 className="page-title">404 - PAGE NOT FOUND</h1>
    </div>
  </section>
);

export default NotFoundError;
