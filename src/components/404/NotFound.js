import React from 'react';
import PageLoader from '../PageLoader';
import NotFoundError from './NotFoundError';
import Footer from '../Footer';

class NotFound extends React.Component {
  render() {
    return (
      <div>
        <PageLoader />
        <NotFoundError />
        <Footer />
      </div>
    );
  }
}

export default NotFound;
