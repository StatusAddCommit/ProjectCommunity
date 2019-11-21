import React from 'react';

class NotFoundError extends React.Component {
  render() {
    return (
      <section
        className="fly-header parallax overlay"
        style={{
          backgroundImage: 'url(images/temp/slide-7.jpg)'
        }}
      >
        <div className="fly-header-content">
          <div className="page-subtitle">404</div>
          <h1 className="page-title">PAGE NOT FOUND</h1>
        </div>
      </section>
    );
  }
}

export default NotFoundError;
