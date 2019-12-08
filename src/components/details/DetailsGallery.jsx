import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const DetailsGallery = ({ eImgs }) => {
  const settings = {
    dots: true,
    dotClass: 'slick-thumb',
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2500,
    focusOnHover: true,
    adaptiveHeight: false,
    fade: true
  };
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Slider {...settings}>
      {eImgs.map(img => (
        <div key={img}>
          <a className="swipebox" href={img}>
            <div>
              <img src={img} alt="" itemProp="image" />
            </div>
          </a>
        </div>
      ))}
    </Slider>
  );
};

DetailsGallery.propTypes = {
  eImgs: PropTypes.arrayOf(PropTypes.any).isRequired
};

export default DetailsGallery;
