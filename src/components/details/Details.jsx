import React from 'react';
import DetailsBanner from './DetailsBanner';
import DetailsEventDetails from './DetailsEventDetails';
import DetailsWidgetText from './DetailsWidgetText';
import Footer from '../Footer';

const Details = () => (
  <div>
    <DetailsBanner />

    <div className="page-wrapper page-sidebar">
      <div className="container">
        <div className="row">
          <main
            itemProp="mainContentOfPage"
            itemScope
            itemType="http://schema.org/WebPageElement"
            className="content"
          >
            <DetailsEventDetails />
          </main>

          <aside
            className="sidebar sidebar-sticky"
            itemScope
            itemType="http://schema.org/WPSideBar"
          >
            <DetailsWidgetText />
          </aside>
        </div>
      </div>
    </div>

    <Footer />
  </div>
);

export default Details;
