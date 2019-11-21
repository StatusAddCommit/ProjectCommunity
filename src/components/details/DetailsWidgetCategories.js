import React from "react";

class DetailsWidgetCategories extends React.Component {
  render() {
    return (
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
    );
  }
}

export default DetailsWidgetCategories;
