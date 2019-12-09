import React from 'react';
import Testimonial from './Testimonial';
import messages from '../constants/messages';

const { home } = messages;

const SectionTestimonials = () => (
  <section
    className="section gray section-testimonials"
    style={{
      backgroundImage: `url(${home.TestiBgImg})`
    }}
  >
    <div className="section-heading">
      <div className="container">
        <div className="section-subtitle">COMMUNITY TESTIMONIALS</div>
        <h2 className="section-title">What others say about us</h2>
      </div>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
          <div className="fly-card">
            <div className="boxed">
              <div className="testimonials-slider">
                <Testimonial />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default SectionTestimonials;
