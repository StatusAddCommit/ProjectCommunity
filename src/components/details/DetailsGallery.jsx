import React from 'react';
import PropTypes from 'prop-types';

/* TODO: replace image links with live API data */
const DetailsGallery = ({ eImgs }) => {
  console.log('=i=>', eImgs);
  return (
    <div className="post-media">
      <div className="owl-carousel post-slider">
        {eImgs.map((img, i) => (
          <a className="swipebox" href={img} key={i}>
            <img src={img} alt="" itemProp="image" />
          </a>
        ))}
      </div>
    </div>
  );
};

DetailsGallery.propTypes = {
  eImgs: PropTypes.arrayOf(PropTypes.any).isRequired
};

export default DetailsGallery;

/*
  <div className="post-media">
    <div className="owl-carousel post-slider">
        <a className="swipebox" data-rel="gallery1" href={eImgs[1] && eImgs[1]}>
          <img src={eImgs[1] && eImgs[1]} alt="" itemProp="image" />
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
*/

/*
(
    <div className="post-media">
      <div className="owl-carousel post-slider">
        {eImgs.map((img, i) => (
          <a
            className="swipebox"
            data-rel="gallery1"
            href={img}
            title=""
            key={i}
          >
            <img src={img} alt="" itemProp="image" />
          </a>
        ))}
        <img src="images/temp/post-7.jpg" alt="" itemProp="image" />
      </div>
    </div>
  );
*/
