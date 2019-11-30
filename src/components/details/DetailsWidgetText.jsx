import React from 'react';
import messages from '../../constants/messages';

const { eventdetails } = messages;

const DetailsWidgetText = () => (
  <div className="widget-sidebar widget_text">
    <h4 className="widget-title">About Our Events</h4>
    <div className="textwidget">
      <p>{eventdetails.AboutMsg}</p>
    </div>
  </div>
);

export default DetailsWidgetText;
