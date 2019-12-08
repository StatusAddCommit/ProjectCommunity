/* eslint-disable jsx-a11y/label-has-associated-control */
/* (ESLINT false positive) correct input controls exist for all labels, but are not in expected positions due to formatting requirements */

import React, { useState } from 'react';
import axios from 'axios';

const GOOGLE_FORM_NAME_ID = 'entry.171070047';
const GOOGLE_FORM_EMAIL_ID = 'entry.165833056';
const GOOGLE_FORM_SUBJECT_ID = 'entry.399798834';
const GOOGLE_FORM_MESSAGE_ID = 'entry.1707209968';
const CORS_PROXY = 'https://cors-anywhere.herokuapp.com/';
const GOOGLE_FORM_ACTION =
  'https://docs.google.com/forms/u/0/d/e/1FAIpQLSdE8GugHCOwJid8mi7dkXFDsvAAx4KzVn1F7yOy_KW0Qtguqw/formResponse';

const SectionContact = () => {
  const [senderName, setName] = useState('(No Name Provided)');
  const [senderEmail, setEmail] = useState('(No Email Provided)');
  const [senderSub, setSubject] = useState('(No Subject Provided)');
  const [senderMessage, setMessage] = useState('(No Message Content)');
  const [formSubmit, setFormSubmit] = useState(false);

  const sendMessage = () => {
    const formData = new FormData();
    formData.append(GOOGLE_FORM_NAME_ID, senderName);
    formData.append(GOOGLE_FORM_EMAIL_ID, senderEmail);
    formData.append(GOOGLE_FORM_SUBJECT_ID, senderSub);
    formData.append(GOOGLE_FORM_MESSAGE_ID, senderMessage);

    axios
      .post(CORS_PROXY + GOOGLE_FORM_ACTION, formData)
      .then(() => {
        setFormSubmit(true);
        setTimeout(() => {
          setFormSubmit(false);
        }, 6000);
      })
      .catch(err => {
        console.error(err);
      });
  };

  const handleSubmit = e => {
    e.preventDefault();
    sendMessage();
  };

  return formSubmit ? (
    <div className="section-heading">
      <div className="container">
        <br />
        <br />
        <br />
        <div className="section-subtitle">MESSAGE SENT!</div>
        <h3 className="section-title">
          Thank you for reaching out to us, we will get back to you as soon as
          possible!
        </h3>
      </div>
      <br />
    </div>
  ) : (
    <section className="section gray" id="contact">
      <div className="section-heading">
        <div className="container">
          <div className="section-subtitle">CONTACT US</div>
          <h2 className="section-title">Get in touch with us</h2>
        </div>
      </div>
      <div className="container">
        <form
          onSubmit={e => {
            handleSubmit(e);
          }}
          className="wpcf7-form"
          noValidate="novalidate"
        >
          <div className="row">
            <div className="col-sm-4">
              <div className="form-group required">
                <label htmlFor="your-name">Name</label>
                <br />
                <span className="wpcf7-form-control-wrap your-name">
                  <input
                    type="text"
                    name="your-name"
                    defaultValue=""
                    className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                    id="your-name"
                    placeholder="Name"
                    onChange={e => {
                      setName(e.target.value);
                    }}
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
                    onChange={e => {
                      setEmail(e.target.value);
                    }}
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
                    onChange={e => {
                      setSubject(e.target.value);
                    }}
                  />
                </span>
              </div>
            </div>
            <div className="col-sm-12">
              <div className="form-group required">
                <label htmlFor="your-message">Message</label>
                <br />
                <span className="wpcf7-form-control-wrap your-message">
                  <textarea
                    name="your-message"
                    className="wpcf7-form-control wpcf7-textarea"
                    id="your-message"
                    placeholder="Type in your message"
                    defaultValue=""
                    onChange={e => {
                      setMessage(e.target.value);
                    }}
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
      </div>
    </section>
  );
};

export default SectionContact;
