import React from "react";
import DetailsGallery from "./DetailsGallery";
import DetailsInfoBox from "./DetailsInfoBox";
import DetailsContent from "./DetailsContent";

class DetailsEventDetails extends React.Component {
  render() {
    return (
      <article
        className="fly-article-details"
        itemScope
        itemType="http://schema.org/DonateAction"
        itemRef="projectTitle1"
      >
        <DetailsGallery></DetailsGallery>
        {}
        <DetailsInfoBox></DetailsInfoBox>
        {}
        {}
        <DetailsContent></DetailsContent>
        {}
        {}
        <ul className="post-social clearfix">
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
        </ul>
        {}
      </article>
    );
  }
}

export default DetailsEventDetails;
