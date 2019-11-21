import React from "react";

class DetailsComments extends React.Component {
  render() {
    return (
      <section id="comments" className="comments">
        <h4 className="title-styled">User Comments (4)</h4>
        {}
        <ol className="comment-list">
          <li
            className="comment parent"
            itemScope
            itemType="http://schema.org/Comment"
            itemProp="comment"
          >
            <article className="comment-body">
              <div className="comment-avatar">
                <img src="images/temp/avatar-3.jpg" alt />
              </div>
              <div className="comment-meta">
                <a className="comment-author" href="#" itemProp="creator">
                  Jonh Doe
                </a>
                <span className="comment-date" itemProp="datePublished">
                  Jan 11, 2017 at 11:45am
                </span>
              </div>
              <div className="comment-content" itemProp="text">
                <p>
                  At vero eos et accusam et justo duo dolores et ea rebum. Stet
                  clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
                  dolor sit amet. Lorem ipsum dolor sit amet, consetetur
                  sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                  labore et dolore magna aliquyam erat, sed diam voluptua.
                </p>
              </div>
              <a href="#commentform" className="comment-reply anchor">
                Reply
              </a>
            </article>
            {}
            <ol className="children">
              <li className="comment parent" itemProp="comment">
                <article className="comment-body">
                  <div className="comment-avatar">
                    <img src="images/temp/avatar-4.jpg" alt />
                  </div>
                  <div className="comment-meta">
                    <a className="comment-author" href="#" itemProp="creator">
                      Mark Hopkins
                    </a>
                    <span className="comment-date" itemProp="datePublished">
                      Jan 11, 2017 at 11:45am
                    </span>
                  </div>
                  <div className="comment-content" itemProp="text">
                    <p>
                      Lobortis habitant, diam quisque cursus odio ipsum aenean,
                      conubia nunc placerat ac auctor etiam blandit sociosqu
                      nulla maecenas quisque praesent tellus euismod justo curae
                      donec torquent.
                    </p>
                  </div>
                  <a href="#commentform" className="comment-reply anchor">
                    Reply
                  </a>
                </article>
                {}
                <ol className="children">
                  <li className="comment parent" itemProp="comment">
                    <article className="comment-body">
                      <div className="comment-avatar">
                        <img src="images/temp/avatar-6.jpg" alt />
                      </div>
                      <div className="comment-meta">
                        <a
                          className="comment-author"
                          href="#"
                          itemProp="creator"
                        >
                          Anthony Johnson
                        </a>
                        <span className="comment-date" itemProp="datePublished">
                          Jan 11, 2017 at 11:45am
                        </span>
                      </div>
                      <div className="comment-content" itemProp="text">
                        <p>
                          Lobortis habitant, diam quisque cursus odio ipsum
                          aenean, conubia nunc placerat ac auctor etiam blandit
                          sociosqu nulla maecenas quisque praesent tellus
                          euismod justo curae donec torquent.
                        </p>
                      </div>
                      <a href="#commentform" className="comment-reply anchor">
                        Reply
                      </a>
                    </article>
                    {}
                    <ol className="children">
                      <li
                        className="comment parent bypostauthor"
                        itemProp="comment"
                      >
                        <article className="comment-body">
                          <div className="comment-avatar">
                            <img src="images/temp/avatar-5.jpg" alt />
                          </div>
                          <div className="comment-meta">
                            <a
                              className="comment-author"
                              href="#"
                              itemProp="creator"
                            >
                              Joanne Doe
                            </a>
                            <span
                              className="comment-date"
                              itemProp="datePublished"
                            >
                              Jan 11, 2017 at 11:45am
                            </span>
                          </div>
                          <div className="comment-content" itemProp="text">
                            <p>
                              Lobortis habitant, diam quisque cursus odio ipsum
                              aenean, conubia nunc placerat ac auctor etiam
                              blandit sociosqu nulla maecenas quisque praesent
                              tellus euismod justo curae donec torquent.
                            </p>
                          </div>
                          <a
                            href="#commentform"
                            className="comment-reply anchor"
                          >
                            Reply
                          </a>
                        </article>
                        {}
                        <ol className="children">
                          <li
                            className="comment bypostauthor"
                            itemProp="comment"
                          >
                            <article className="comment-body">
                              <div className="comment-avatar">
                                <img src="images/avatar-dummy.jpg" alt />
                              </div>
                              <div className="comment-meta">
                                <a
                                  className="comment-author"
                                  href="#"
                                  itemProp="creator"
                                >
                                  Todd Simmons
                                </a>
                                <span
                                  className="comment-date"
                                  itemProp="datePublished"
                                >
                                  Jan 11, 2017 at 11:45am
                                </span>
                              </div>
                              <div className="comment-content" itemProp="text">
                                <p>
                                  Lobortis habitant, diam quisque cursus odio
                                  ipsum aenean, conubia nunc placerat ac auctor
                                  etiam blandit sociosqu nulla maecenas quisque
                                  praesent tellus euismod justo curae donec
                                  torquent.
                                </p>
                              </div>
                              <a
                                href="#commentform"
                                className="comment-reply anchor"
                              >
                                Reply
                              </a>
                            </article>
                          </li>
                        </ol>
                      </li>
                    </ol>
                  </li>
                </ol>
              </li>
            </ol>
          </li>
          <li className="comment" itemProp="comment">
            <article className="comment-body">
              <div className="comment-avatar">
                <img src="images/temp/avatar-5.jpg" alt />
              </div>
              <div className="comment-meta">
                <a className="comment-author" href="#" itemProp="creator">
                  Lize Gilbert
                </a>
                <span className="comment-date" itemProp="datePublished">
                  Jan 11, 2017 at 11:45am
                </span>
              </div>
              <div className="comment-content" itemProp="text">
                <p>
                  Lobortis habitant, diam quisque cursus odio ipsum aenean,
                  conubia nunc placerat ac auctor etiam blandit sociosqu nulla
                  maecenas quisque praesent tellus euismod justo curae donec
                  torquent.
                </p>
              </div>
              <a href="#commentform" className="comment-reply anchor">
                Reply
              </a>
            </article>
          </li>
        </ol>
        {}
        {}
        <form
          action="#"
          method="post"
          id="commentform"
          className="comment-form"
        >
          <h4 className="title-styled">Leave a Comment</h4>
          <div className="row">
            <div className="col-sm-4">
              <div className="form-group required">
                <label htmlFor="respondName">NAME</label>
                <input
                  className="form-control"
                  type="text"
                  id="respondName"
                  name="respondName"
                  required
                />
              </div>
            </div>
            <div className="col-sm-4">
              <div className="form-group required">
                <label htmlFor="respondEmail">email</label>
                <input
                  className="form-control"
                  type="email"
                  id="respondEmail"
                  name="respondEmail"
                  required
                />
              </div>
            </div>
            <div className="col-sm-4">
              <div className="form-group">
                <label htmlFor="respondWebsite">WEBSITE</label>
                <input
                  className="form-control"
                  type="url"
                  id="respondWebsite"
                  name="respondWebsite"
                />
              </div>
            </div>
          </div>
          <div className="form-group required">
            <label htmlFor="respondMessage">message</label>
            <textarea
              className="form-control"
              id="respondMessage"
              name="respondMessage"
              required
              defaultValue={""}
            />
          </div>
          <p className="form-submit">
            <input
              name="submit"
              type="submit"
              id="submit"
              className="submit"
              defaultValue="post comment"
            />
            <input
              type="hidden"
              name="comment_post_ID"
              defaultValue={241}
              id="comment_post_ID"
            />
            <input
              type="hidden"
              name="comment_parent"
              id="comment_parent"
              defaultValue={0}
            />
          </p>
        </form>
        {}
      </section>
    );
  }
}

export default DetailsComments;
