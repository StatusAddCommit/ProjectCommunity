import React from "react";

class EventsFooter extends React.Component {
  render() {
    return (
      <footer
        className="footer"
        itemScope
        itemType="http://schema.org/WPFooter"
      >
        <div className="container">
          <div className="footer-top">
            {}
            <a className="back-to-top anchor js-wave" href="#header">
              <i className="material-icons">keyboard_arrow_up</i>
            </a>
            {}
            <div className="row">
              <div className="col-md-3 col-sm-6">
                <div className="widget-footer">
                  {}
                  <div className="logo">
                    <a href="index-2.html">
                      {}
                      Ummah<span>Charity</span>
                    </a>
                  </div>
                  {}
                  <div className="site-description" itemProp="about">
                    <p>
                      Duis autem vel eum iriure dolor in hendrerit in vulputate
                      velit esse molestie consequat, vel illum dolore eu feugiat
                      nulla facilisis at vero eros et accumsan et iusto.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                {}
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
                          Lorem ipsum dolor sit amet, consetetur sadipscing
                          elitr
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
                {}
              </div>
              <div className="col-md-3 col-sm-6">
                {}
                <div className="widget-footer widget-twitter">
                  <h4 className="widget-title">twitter feed</h4>
                  <article className="tweet">
                    <a href="#" className="tweet-link">
                      @UmmahCharity consetetur sadipscing elitr, sed diam
                      nonumy...
                    </a>
                    <time className="tweet-date" dateTime="2016-12-11T20:08:44">
                      # 2 hours ago
                    </time>
                  </article>
                  <article className="tweet">
                    <a href="#" className="tweet-link">
                      Duis autem vel eum iriure @UmmahCharity dolor in hendrerit
                      in vulputate...
                    </a>
                    <time className="tweet-date" dateTime="2016-12-11T20:08:44">
                      # 4 hours ago
                    </time>
                  </article>
                </div>
                {}
              </div>
              <div className="col-md-3 col-sm-6">
                {}
                <div className="widget-footer widget-gallery">
                  <h4 className="widget-title">gallery widget</h4>
                  <ul>
                    <li>
                      <a href="#" className="js-wave">
                        <img src="images/temp/gallery-1.jpg" alt />
                      </a>
                    </li>
                    <li>
                      <a href="#" className="js-wave">
                        <img src="images/temp/gallery-2.jpg" alt />
                      </a>
                    </li>
                    <li>
                      <a href="#" className="js-wave">
                        <img src="images/temp/gallery-3.jpg" alt />
                      </a>
                    </li>
                    <li>
                      <a href="#" className="js-wave">
                        <img src="images/temp/gallery-4.jpg" alt />
                      </a>
                    </li>
                    <li>
                      <a href="#" className="js-wave">
                        <img src="images/temp/gallery-5.jpg" alt />
                      </a>
                    </li>
                    <li>
                      <a href="#" className="js-wave">
                        <img src="images/temp/gallery-6.jpg" alt />
                      </a>
                    </li>
                  </ul>
                </div>
                {}
              </div>
            </div>
          </div>
          <div className="footer-bottom flex-container">
            {}
            <ul className="footer-social clearfix">
              <li>
                <a href="#" className="fa fa-facebook js-wave" />
              </li>
              <li>
                <a href="#" className="fa fa-twitter js-wave" />
              </li>
              <li>
                <a href="#" className="fa fa-instagram js-wave" />
              </li>
              <li>
                <a href="#" className="fa fa-google js-wave" />
              </li>
              <li>
                <a href="#" className="fa fa-dribbble js-wave" />
              </li>
              <li>
                <a href="#" className="fa fa-vimeo js-wave" />
              </li>
              <li>
                <a href="#" className="fa fa-pinterest-p js-wave" />
              </li>
              <li>
                <a href="#" className="fa fa-linkedin js-wave" />
              </li>
            </ul>
            {}
            {}
            <div className="footer-copyright">
              © <span itemProp="copyrightYear">2019</span> by{" "}
              <a href="#" itemProp="copyrightHolder">
                Ummah Charity
              </a>
            </div>
            {}
          </div>
        </div>
      </footer>
    );
  }
}

export default EventsFooter;
