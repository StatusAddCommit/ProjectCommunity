import React from "react";

class WidgetTwitter extends React.Component {
  render() {
    return (
      <div className="widget-footer widget-twitter">
        <h4 className="widget-title">twitter feed</h4>
        <article className="tweet">
          <a href="#" className="tweet-link">
            @UmmahCharity consetetur sadipscing elitr, sed diam nonumy...
          </a>
          <time className="tweet-date" dateTime="2016-12-11T20:08:44">
            # 2 hours ago
          </time>
        </article>
        <article className="tweet">
          <a href="#" className="tweet-link">
            Duis autem vel eum iriure @UmmahCharity dolor in hendrerit in
            vulputate...
          </a>
          <time className="tweet-date" dateTime="2016-12-11T20:08:44">
            # 4 hours ago
          </time>
        </article>
      </div>
    );
  }
}

export default WidgetTwitter;
