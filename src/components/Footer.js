import React from "react";
import WidgetPosts from "./WidgetPosts";
import WidgetTwitter from "./WidgetTwitter";
import WidgetGallery from "./WidgetGallery";

class Footer extends React.Component {
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
                <WidgetPosts></WidgetPosts>
                {}
              </div>
              <div className="col-md-3 col-sm-6">
                {}
                <WidgetTwitter></WidgetTwitter>
                {}
              </div>
              <div className="col-md-3 col-sm-6">
                {}
                <WidgetGallery></WidgetGallery>
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

export default Footer;
