import React from "react";

class DetailsWidgetGallery extends React.Component {
  render() {
    return (
      <div className="widget-sidebar widget-gallery">
        <h4 className="widget-title">Gallery</h4>
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
    );
  }
}

export default DetailsWidgetGallery;
