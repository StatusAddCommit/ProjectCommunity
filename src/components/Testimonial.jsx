import React from 'react';
import messages from '../constants/messages';

const {
  home: { Testimonials }
} = messages;

const Testimonial = () =>
  Testimonials.map(t => (
    <article className="testimonial" key={t.TestiName + t.TestiJob}>
      <blockquote className="testimonial-quote">{t.TestiQuote}</blockquote>
      <div className="testimonial-author">
        <div className="avatar">
          <img src={t.TestiAvatar} alt="" />
        </div>
        <div className="name">{t.TestiName}</div>
        <div className="job">{t.TestiJob}</div>
      </div>
    </article>
  ));

export default Testimonial;
