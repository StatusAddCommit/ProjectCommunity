import React from "react";

class EventsHeader extends React.Component {
  render() {
    return (
      <header
        id="header"
        className="header"
        itemScope
        itemType="http://schema.org/WPHeader"
      >
        {}
        <nav
          className="navigation-bar"
          data-become-sticky={600}
          data-no-placeholder
        >
          <div className="container">
            <div className="hamburger">
              <a href="#" />
            </div>
            <div className="navigation-bar-flex">
              {}
              <div className="logo">
                <a href="index-2.html">
                  {}
                  Ummah<span>Charity</span>
                </a>
              </div>
              {}
              {}
              <ul
                className="nav-menu clearfix"
                itemScope
                itemType="http://schema.org/SiteNavigationElement"
              >
                <li>
                  <a href="#">Home</a>
                  <ul>
                    <li>
                      <a href="index-2.html">Home Fly Slider</a>
                    </li>
                    <li>
                      <a href="index-slider2.html">Home Classic Slider</a>
                    </li>
                    <li>
                      <a href="index-image.html">Home Single Image</a>
                    </li>
                    <li>
                      <a href="video-slider.html">Home Video Slider</a>
                    </li>
                    <li>
                      <a href="video-local.html">Home Self Hosted Video</a>
                    </li>
                    <li>
                      <a href="video-youtube.html">Home Youtube Video</a>
                    </li>
                    <li>
                      <a href="video-vimeo.html">Home Vimeo Video</a>
                    </li>
                    <li>
                      <a href="404.html">404 Page</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">Projects</a>
                  <ul>
                    <li>
                      <a href="projects.html">Projects Listed Style</a>
                    </li>
                    <li>
                      <a href="projects-2cols.html">Projects 2 Columns</a>
                    </li>
                    <li>
                      <a href="projects-3cols.html">Projects 3 Columns</a>
                    </li>
                    <li>
                      <a href="projects-4cols.html">Projects 4 Columns</a>
                    </li>
                    <li>
                      <a href="project-details.html">Project Details</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">Events</a>
                  <ul>
                    <li className="current-menu-item">
                      <a href="events-2cols.html">Events 2 Columns</a>
                    </li>
                    <li>
                      <a href="events-3cols.html">Events 3 Columns</a>
                    </li>
                    <li>
                      <a href="events-4cols.html">Events 4 Columns</a>
                    </li>
                    <li>
                      <a href="event-details.html">Event Details</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">Blog</a>
                  <ul>
                    <li>
                      <a href="blog.html">Without Sidebar</a>
                    </li>
                    <li>
                      <a href="blog-wide.html">Wide Version</a>
                    </li>
                    <li>
                      <a href="blog-sidebar.html">Right Sidebar</a>
                    </li>
                    <li>
                      <a href="blog-sidebar-left.html">Left Sidebar</a>
                    </li>
                    <li>
                      <a href="blog-2cols.html">2 Columns</a>
                    </li>
                    <li>
                      <a href="blog-3cols.html">3 Columns</a>
                    </li>
                    <li>
                      <a href="blog-4cols.html">4 Columns</a>
                    </li>
                    <li>
                      <a href="blog-details.html">Blog Details</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="about.html">About</a>
                </li>
                <li>
                  <a href="contact.html">Contact</a>
                </li>
                {}
              </ul>
              {}
              {}
              <form action="#" className="form-search-header">
                <input
                  type="search"
                  name="site-search"
                  className="form-control"
                  placeholder="search for something"
                  required
                />
                <button
                  type="submit"
                  name="site-search-submit"
                  className="form-submit material-icons"
                >
                  search
                </button>
              </form>
              {}
              {}
            </div>
          </div>
        </nav>
        {}
      </header>
    );
  }
}

export default EventsHeader;
