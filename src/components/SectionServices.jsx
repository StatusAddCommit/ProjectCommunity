import React from 'react';
import messages from '../constants/messages';

const { home } = messages;

const SectionServices = () => (
  <section className="flex-container fly-services">
    <div className="fly-service">
      <div className="service-content">
        <i className="material-icons">{home.ServicesIcon1}</i>
        <h3 className="title">{home.ServicesTitle1}</h3>
        <div className="description">{home.ServicesDesc1}</div>
      </div>
      <div className="service-buttons">
        <a href="#" className="btn btn-medium js-wave">
          {home.ServicesBtn1}
        </a>
      </div>
    </div>
    <div className="fly-service">
      <div className="service-content">
        <i className="material-icons">{home.ServicesIcon2}</i>
        <h3 className="title">{home.ServicesTitle2}</h3>
        <div className="description">{home.ServicesDesc2}</div>
      </div>
      <div className="service-buttons">
        <a href="#" className="btn btn-medium js-wave">
          {home.ServicesBtn2}
        </a>
      </div>
    </div>
    <div className="fly-service">
      <div className="service-content">
        <i className="material-icons">{home.ServicesIcon3}</i>
        <h3 className="title">{home.ServicesTitle3}</h3>
        <div className="description">{home.ServicesDesc3}</div>
      </div>
      <div className="service-buttons">
        <a href="#" className="btn btn-medium js-wave">
          {home.ServicesBtn3}
        </a>
      </div>
    </div>
    <div className="fly-service">
      <div className="service-content">
        <i className="material-icons">{home.ServicesIcon4}</i>
        <h3 className="title">{home.ServicesTitle4}</h3>
        <div className="description">{home.ServicesDesc4}</div>
      </div>
      <div className="service-buttons">
        <a href="#" className="btn btn-medium js-wave">
          {home.ServicesBtn4}
        </a>
      </div>
    </div>
  </section>
);

export default SectionServices;
