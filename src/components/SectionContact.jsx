/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

/* TODO: add eslint required control for labels */

const SectionContact = () => (
  <section className="section gray" id="contact">
    <div className="section-heading">
      <div className="container">
        <div className="section-subtitle">CONTACT US</div>
        <h2 className="section-title">Get in touch with us</h2>
      </div>
    </div>
    <div className="container">
      {}
      <form
        action="#"
        method="post"
        className="wpcf7-form"
        noValidate="novalidate"
      >
        <div className="row">
          <div className="col-sm-4">
            <div className="form-group required">
              <label htmlFor="your-name">NAME</label>
              <br />
              <span className="wpcf7-form-control-wrap your-name">
                <input
                  type="text"
                  name="your-name"
                  defaultValue=""
                  className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                  id="your-name"
                  placeholder="Name"
                />
              </span>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="form-group required">
              <label htmlFor="your-email">Email address</label>
              <br />
              <span className="wpcf7-form-control-wrap your-email">
                <input
                  type="email"
                  name="your-email"
                  defaultValue=""
                  className="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email"
                  id="your-email"
                  placeholder="Email Address"
                />
              </span>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="form-group required">
              <label htmlFor="your-subject">subject</label>
              <br />
              <span className="wpcf7-form-control-wrap your-subject">
                <input
                  type="text"
                  name="your-subject"
                  defaultValue=""
                  className="wpcf7-form-control wpcf7-text"
                  id="your-subject"
                  placeholder="Subject"
                />
              </span>
            </div>
          </div>
          <div className="col-sm-12">
            <div className="form-group required">
              <label htmlFor="your-message">message</label>
              <br />
              <span className="wpcf7-form-control-wrap your-message">
                <textarea
                  name="your-message"
                  className="wpcf7-form-control wpcf7-textarea"
                  id="your-message"
                  placeholder="Type in your message"
                  defaultValue=""
                />
              </span>
            </div>
            <div className="text-right">
              <input
                type="submit"
                defaultValue="Send Message"
                className="wpcf7-form-control wpcf7-submit"
              />
            </div>
          </div>
        </div>
      </form>
      {}
    </div>
  </section>
);

export default SectionContact;
