import React from 'react';
import messages from '../constants/messages';

const { home } = messages;

const SectionStats = () => (
  <section
    className="section section-stats parallax"
    style={{
      backgroundImage: `url(${home.StatsImg})`
    }}
  >
    <div className="container">
      <div className="row">
        <div className="col-xs-6 col-sm-3">
          <div className="stats-item">
            <div
              className="counter js-counter"
              data-duration={2}
              data-step=".1"
            >
              {home.StatsNumber1}
            </div>
            <div className="description">{home.StatsTitle1}</div>
          </div>
        </div>
        <div className="col-xs-6 col-sm-3">
          <div className="stats-item">
            <div
              className="counter js-counter"
              data-duration={2}
              data-step=".1"
            >
              {home.StatsNumber2}
            </div>
            <div className="description">{home.StatsTitle2}</div>
          </div>
        </div>
        <div className="col-xs-6 col-sm-3">
          <div className="stats-item">
            <div
              className="counter js-counter"
              data-duration={2}
              data-step=".1"
            >
              {home.StatsNumber3}
            </div>
            <div className="description">{home.StatsTitle3}</div>
          </div>
        </div>
        <div className="col-xs-6 col-sm-3">
          <div className="stats-item">
            <div
              className="counter js-counter"
              data-duration={2}
              data-step=".1"
            >
              {home.StatsNumber4}
            </div>
            <div className="description">{home.StatsTitle4}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default SectionStats;
