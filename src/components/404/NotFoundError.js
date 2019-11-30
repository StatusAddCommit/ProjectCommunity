import React from 'react';

const NotFoundError = () => (
  <section
    className="fly-header parallax overlay"
    style={{
      backgroundImage: 'url(images/temp/slide-7.jpg)'
    }}
  >
    <div className="fly-header-content">
      <div className="page-subtitle">
        Sorry, we cannot find the page You are looking for.
      </div>
      <h1 className="page-title">404 - PAGE NOT FOUND</h1>
    </div>
  </section>
);

export default NotFoundError;
