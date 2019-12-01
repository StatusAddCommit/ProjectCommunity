import React from 'react';
import messages from '../constants/messages';

const { home } = messages;

const SliderBanner = () => (
  <div
    className="fly-slider invisible"
    data-rotation-interval={10000}
    data-rotation-duration={1000}
  >
    <div className="cube">
      <section
        className="slide"
        style={{
          backgroundImage: `url(${home.BannerImg1})`
        }}
      >
        <div className="slide-content">
          <h1 className="page-title">{home.BannerTitle1}</h1>
          <div className="page-subtitle">{home.BannerSub1}</div>
          <div className="volunteer-cta">
            <a href="#" className="btn btn-large btn-icon js-wave">
              <i className="material-icons">arrow_forward</i>
              {home.BannerBtn1}
            </a>
            <div className="note">{home.BannerBtnSub1}</div>
          </div>
        </div>
      </section>
      <section
        className="slide"
        style={{
          backgroundImage: `url(${home.BannerImg2})`
        }}
      >
        <div className="slide-content">
          <h2 className="page-title">{home.BannerTitle2}</h2>
          <div className="page-subtitle">{home.BannerSub2}</div>
          <div className="volunteer-cta">
            <a href="#" className="btn btn-large btn-icon js-wave">
              <i className="material-icons">arrow_forward</i>
              {home.BannerBtn2}
            </a>
            <div className="note">{home.BannerBtnSub2}</div>
          </div>
        </div>
      </section>
      <section
        className="slide"
        style={{
          backgroundImage: `url(${home.BannerImg3})`
        }}
      >
        <div className="slide-content">
          <h2 className="page-title">{home.BannerTitle3}</h2>
          <div className="page-subtitle">{home.BannerSub3}</div>
          <div className="volunteer-cta">
            <a href="#" className="btn btn-large btn-icon js-wave">
              <i className="material-icons">arrow_forward</i>
              {home.BannerBtn3}
            </a>
            <div className="note">{home.BannerBtnSub3}</div>
          </div>
        </div>
      </section>
      <section
        className="slide"
        style={{
          backgroundImage: `url(${home.BannerImg4})`
        }}
      >
        <div className="slide-content">
          <h2 className="page-title">{home.BannerTitle4}</h2>
          <div className="page-subtitle">{home.BannerSub4}</div>
          <div className="volunteer-cta">
            <a href="#" className="btn btn-large btn-icon js-wave">
              <i className="material-icons">arrow_forward</i>
              {home.BannerBtn4}
            </a>
            <div className="note">{home.BannerBtnSub4}</div>
          </div>
        </div>
      </section>
    </div>
    <a className="slider-control prev js-wave" href="#">
      <i className="material-icons">keyboard_arrow_left</i>
    </a>
    <a className="slider-control next js-wave" href="#">
      <i className="material-icons">keyboard_arrow_right</i>
    </a>
  </div>
);

export default SliderBanner;
