import React from 'react';

class AboutWidgetPosts extends React.Component {
  render() {
    return (
      <div className="widget-footer widget-posts">
        <h4 className="widget-title">latest news</h4>
        <article
          className="fly-article"
          itemScope
          itemType="http://schema.org/Article"
        >
          <div className="post-content" itemProp="articleBody">
            <h3 className="post-title">
              <a href="#" itemProp="name">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr
              </a>
            </h3>
            <div className="post-meta">
              <time
                className="post-date"
                dateTime="2016-12-11T20:10:22"
                itemProp="dateCreated"
              >
                11th Dec. 2016 - 10:22 AM
              </time>
            </div>
          </div>
        </article>
        <article
          className="fly-article"
          itemScope
          itemType="http://schema.org/Article"
        >
          <div className="post-content" itemProp="articleBody">
            <h3 className="post-title">
              <a href="#" itemProp="name">
                Duis autem vel eum iriure dolor in hendrerit
              </a>
            </h3>
            <div className="post-meta">
              <time
                className="post-date"
                dateTime="2016-12-11T20:08:44"
                itemProp="dateCreated"
              >
                11th Dec. 2016 - 08:44 AM
              </time>
            </div>
          </div>
        </article>
      </div>
    );
  }
}

export default AboutWidgetPosts;
