import React from 'react';
import messages from '../constants/messages';

const { home } = messages;

const SectionCta = () => (
  <section
    className="section section-cta parallax"
    style={{
      backgroundImage: `url(${home.CtaImg})`
    }}
  >
    <div className="container">
      <h2 className="section-title">{home.CtaTitle}</h2>
      <div className="section-subtitle">{home.CtaSub}</div>
      <a href="#" className="btn btn-medium btn-yellow js-wave">
        {home.CtaBtn}
      </a>
    </div>
  </section>
);

export default SectionCta;
