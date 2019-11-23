import React from 'react';
import messages from '../../constants/messages';

const { eventdetails } = messages;

class DetailsWidgetText extends React.Component {
  render() {
    return (
      <div className="widget-sidebar widget_text">
        <h4 className="widget-title">About Our Events</h4>
        <div className="textwidget">
          <p>{eventdetails.AboutMsg}</p>
        </div>
      </div>
    );
  }
}

export default DetailsWidgetText;
