import React from "react";

class NotFoundSideBar extends React.Component {
  render() {
    return (
      <div className="page-wrapper page-sidebar">
        {}
        <div className="container">
          <div className="row">
            {}
            <main
              itemProp="mainContentOfPage"
              itemScope
              itemType="http://schema.org/WebPageElement"
              className="content"
            >
              <h2>Page Not Found</h2>
              <p>
                Sorry, we can't find the page You are looking for. Please, try a
                search or go to <a href="index-2.html">homepage</a>.
              </p>
              {}
              <div className="widget-search">
                {}
                <form action="#" className="form-search">
                  <input
                    type="search"
                    name="site-search2"
                    className="form-control"
                    placeholder="search for something"
                    required
                  />
                  <button
                    type="submit"
                    name="site-search-submit2"
                    className="form-submit material-icons"
                  >
                    arrow_forward
                  </button>
                </form>
              </div>
              {}
            </main>
            {}
            {}
            <aside className="sidebar">
              {}
              <div className="widget-sidebar widget_categories">
                <h4 className="widget-title">Categories</h4>
                <ul>
                  <li>
                    <a href="#">
                      Inspiration <span>04</span>
                    </a>
                  </li>
                  <li className="current-cat">
                    <a href="#">
                      Travel <span>15</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      Fashion <span>38</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      Sports <span>21</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      Lifestyle <span>08</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      Health <span>12</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      Food <span>13</span>
                    </a>
                  </li>
                </ul>
              </div>
              {}
            </aside>
            {}
          </div>
        </div>
      </div>
    );
  }
}

export default NotFoundSideBar;
