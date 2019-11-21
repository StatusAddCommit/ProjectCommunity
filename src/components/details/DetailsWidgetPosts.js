import React from "react";

class DetailsWidgetPosts extends React.Component {
  render() {
    return (
      <div className="widget-sidebar widget-posts">
        <h4 className="widget-title">Recent posts</h4>
        {}
        <article
          className="fly-article clearfix"
          itemScope
          itemType="http://schema.org/Article"
        >
          <a className="post-media js-wave" href="blog-details.html">
            <img src="images/temp/post-4.jpg" alt itemProp="image" />
          </a>
          <div className="post-content" itemProp="articleBody">
            <h3 className="post-title">
              <a href="#" itemProp="name">
                Ut wisi enim ad minim venia quis nostrud exerci tation lorem
                ipsum dolor...
              </a>
            </h3>
            <div className="post-meta">
              <time
                className="post-date"
                dateTime="2016-03-31T20:04:09"
                itemProp="dateCreated"
              >
                Dec 31, 2016
              </time>
            </div>
          </div>
        </article>
        {}
        {}
        <article
          className="fly-article clearfix"
          itemScope
          itemType="http://schema.org/Article"
        >
          <a className="post-media js-wave" href="blog-details.html">
            <img src="images/temp/post-5.jpg" alt itemProp="image" />
          </a>
          <div className="post-content" itemProp="articleBody">
            <h3 className="post-title">
              <a href="#" itemProp="name">
                Ut wisi enim ad minim venia quis nostrud exerci tation lorem
                ipsum dolor...
              </a>
            </h3>
            <div className="post-meta">
              <time
                className="post-date"
                dateTime="2016-03-31T20:04:09"
                itemProp="dateCreated"
              >
                Dec 31, 2016
              </time>
            </div>
          </div>
        </article>
        {}
        {}
        <article
          className="fly-article clearfix"
          itemScope
          itemType="http://schema.org/Article"
        >
          <a className="post-media js-wave" href="blog-details.html">
            <img src="images/temp/post-6.jpg" alt itemProp="image" />
          </a>
          <div className="post-content" itemProp="articleBody">
            <h3 className="post-title">
              <a href="#" itemProp="name">
                Ut wisi enim ad minim venia quis nostrud exerci tation lorem
                ipsum dolor...
              </a>
            </h3>
            <div className="post-meta">
              <time
                className="post-date"
                dateTime="2016-03-31T20:04:09"
                itemProp="dateCreated"
              >
                Dec 31, 2016
              </time>
            </div>
          </div>
        </article>
        {}
      </div>
    );
  }
}

export default DetailsWidgetPosts;
