import React from 'react';
import messages from '../constants/messages';

const {
  home: { Banners }
} = messages;

const SliderBanner = () => (
  <div
    className="fly-slider invisible"
    data-rotation-interval={10000}
    data-rotation-duration={1000}
  >
    <div className="cube">
      {Banners.map(b => (
        <section
          className="slide"
          style={{
            backgroundImage: `url(${b.BannerImg})`
          }}
          key={b.BannerImg}
        >
          <div className="slide-content">
            <h1 className="page-title">{b.BannerTitle}</h1>
            <div className="page-subtitle">{b.BannerSub}</div>
            <div className="volunteer-cta">
              <button type="button" className="btn btn-large btn-icon js-wave">
                <i className="material-icons">arrow_forward</i>
                {b.BannerBtn}
              </button>
              <div className="note">{b.BannerBtnSub}</div>
            </div>
          </div>
        </section>
      ))}
    </div>
    <button className="slider-control prev js-wave" type="button">
      <i className="material-icons">keyboard_arrow_left</i>
    </button>
    <button className="slider-control next js-wave" type="button">
      <i className="material-icons">keyboard_arrow_right</i>
    </button>
  </div>
);

export default SliderBanner;
