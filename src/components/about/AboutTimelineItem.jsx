/* eslint-disable */

import React from 'react';
import messages from '../../constants/messages';

const {
  about: { timelineContent }
} = messages;

const AboutTimelineItem = () =>
  timelineContent.map((e, i) => (
    <div className="timeline-item" key={e.Month + e.Year}>
      <div className="date">
        <span>{e.Month}</span>
        <strong>{e.Year}</strong>
      </div>
      <h2 className="title-styled">{e.Title}</h2>
      <div className="description">
        <p>{e.DescParagraph1}</p>
      </div>

      <div className="collapse" id={`about${i}`}>
        <div className="description">
          <p>{e.DescRest}</p>
        </div>
      </div>
      {e.DescRest && (
        <a
          className="collapsed description-toggle"
          data-toggle="collapse"
          href={`#about${i}`}
          data-hidden="Show More"
          data-shown="Show Less"
        />
      )}
    </div>
  ));
export default AboutTimelineItem;
