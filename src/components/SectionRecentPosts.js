import React from 'react';
import Post from './Post';

class SectionRecentPosts extends React.Component {
  render() {
    return (
      <section className="section padding-bottom-50">
        <div className="section-heading">
          <div className="container">
            <div className="section-subtitle">RECENT BLOGPOSTS</div>
            <h2 className="section-title">Latest from our Blog</h2>
          </div>
        </div>
        <div className="container">
          <div className="fly-articles columns3 flex-container">
            <div className="column">
              {}
              <Post></Post>
              {}
            </div>
            <div className="column">
              {}
              <article
                className="fly-card fly-article boxed"
                itemScope
                itemType="http://schema.org/Article"
              >
                <div className="boxed">
                  <a
                    className="post-media js-wave"
                    href="blog-details.html"
                    itemProp="url"
                  >
                    <img src="images/temp/post-2.jpg" alt itemProp="image" />
                  </a>
                  <div className="post-content">
                    <h3 className="post-title" itemProp="name">
                      <a href="blog-details.html">Here goes the Post Title</a>
                    </h3>
                    <div className="post-meta">
                      <time
                        className="post-date"
                        dateTime="2016-12-12T20:04:09"
                        itemProp="dateCreated"
                      >
                        12 Dec 2016
                      </time>
                      <a href="#" className="post-comments">
                        <span itemProp="commentCount">26</span> comments
                      </a>
                      <span className="post-category" itemProp="keywords">
                        tagged in <a href="#">volunteer</a>
                      </span>
                      {}
                    </div>
                    <div className="post-description" itemProp="articleBody">
                      <p>
                        At vero eos et accusam et justo duo dolores et ea rebum.
                        Stet clita kasd gubergren, no sea takimata sanctus est
                        Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
                      </p>
                    </div>
                    <div className="post-footer">
                      <div className="post-buttons">
                        <a
                          href="blog-details.html"
                          className="btn btn-transparent js-wave"
                          itemProp="url"
                        >
                          Read More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
              {}
            </div>
            <div className="column">
              {}
              <article
                className="fly-card fly-article boxed"
                itemScope
                itemType="http://schema.org/Article"
              >
                <div className="boxed">
                  <a
                    className="post-media js-wave"
                    href="blog-details.html"
                    itemProp="url"
                  >
                    <img src="images/temp/post-3.jpg" alt itemProp="image" />
                  </a>
                  <div className="post-content">
                    <h3 className="post-title" itemProp="name">
                      <a href="blog-details.html">Here goes the Post Title</a>
                    </h3>
                    <div className="post-meta">
                      <time
                        className="post-date"
                        dateTime="2016-12-12T20:04:09"
                        itemProp="dateCreated"
                      >
                        12 Dec 2016
                      </time>
                      <a href="#" className="post-comments">
                        <span itemProp="commentCount">26</span> comments
                      </a>
                      <span className="post-category" itemProp="keywords">
                        tagged in <a href="#">volunteer</a>
                      </span>
                      {}
                    </div>
                    <div className="post-description" itemProp="articleBody">
                      <p>
                        At vero eos et accusam et justo duo dolores et ea rebum.
                        Stet clita kasd gubergren, no sea takimata sanctus est
                        Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
                      </p>
                    </div>
                    <div className="post-footer">
                      <div className="post-buttons">
                        <a
                          href="blog-details.html"
                          className="btn btn-transparent js-wave"
                          itemProp="url"
                        >
                          Read More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
              {}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default SectionRecentPosts;
