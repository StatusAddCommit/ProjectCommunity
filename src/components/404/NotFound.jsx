import React from 'react';
import PageLoader from '../PageLoader';
import NotFoundError from './NotFoundError';
import Footer from '../Footer';

const NotFound = () => (
  <div>
    <PageLoader />
    <NotFoundError />
    <Footer />
  </div>
);

export default NotFound;
