import React from 'react';
import PageLoader from '../PageLoader';
import NotFoundError from './NotFoundError';
import Footer from '../Footer';

const NotFound = () => {
  return (
    <div>
      <PageLoader />
      <NotFoundError />
      <Footer />
    </div>
  );
}

export default NotFound;
