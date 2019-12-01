import React from 'react';

/* TODO: replace image links with live API data */
const DetailsGallery = () => (
  <div className="post-media">
    <div className="owl-carousel post-slider">
      <a
        className="swipebox"
        data-rel="gallery1"
        href="images/temp/post-8.jpg"
        title="This is the First Image Description"
      >
        <img src="images/temp/post-8.jpg" alt="" itemProp="image" />
      </a>
      <a
        className="swipebox"
        data-rel="gallery1"
        href="images/temp/post-9.jpg"
        title="This is the Third Image Description"
      >
        <img src="images/temp/post-9.jpg" alt="" itemProp="image" />
      </a>
      <a
        className="swipebox"
        data-rel="gallery1"
        href="images/temp/post-10.jpg"
        title="This is the Fourth Image Description"
      >
        <img src="images/temp/post-10.jpg" alt="" itemProp="image" />
      </a>
      <img src="images/temp/post-7.jpg" alt="" itemProp="image" />
    </div>
  </div>
);

export default DetailsGallery;
