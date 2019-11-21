import React from "react";
import DetailsLoader from "./DetailsLoader";
import DetailsHeader from "./DetailsHeader";
import DetailsBanner from "./DetailsBanner";
import DetailsEventDetails from "./DetailsEventDetails";
import DetailsComments from "./DetailsComments";
import DetailsSearch from "./DetailsSearch";
import DetailsWidgetCategories from "./DetailsWidgetCategories";
import DetailsWidgetPosts from "./DetailsWidgetPosts";
import DetailsWidgetTags from "./DetailsWidgetTags";
import DetailsWidgetSubscribe from "./DetailsWidgetSubscribe";
import DetailsWidgetLogin from "./DetailsWidgetLogin";
import DetailsWidgetCalendar from "./DetailsWidgetCalendar";
import DetailsWidgetGallery from "./DetailsWidgetGallery";
import DetailsWidgetTwitter from "./DetailsWidgetTwitter";
import DetailsWidgetFB from "./DetailsWidgetFB";
import DetailsWidgetText from "./DetailsWidgetText";
import DetailsFooter from "./DetailsFooter";

class Details extends React.Component {
  render() {
    return (
      <div>
        {}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WPWGNL"
            height="0"
            width="0"
            style="display:none;visibility:hidden"
          ></iframe>
        </noscript>
        {}
        {}
        <DetailsLoader></DetailsLoader>
        {}
        {}
        <DetailsHeader></DetailsHeader>
        {}
        {}
        <DetailsBanner></DetailsBanner>
        {}
        {}
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
                {}
                <DetailsEventDetails></DetailsEventDetails>
                {}
                {}
                <DetailsComments></DetailsComments>
                {}
              </main>
              {}
              {}
              <aside
                className="sidebar sidebar-sticky"
                itemScope
                itemType="http://schema.org/WPSideBar"
              >
                {}
                <DetailsSearch></DetailsSearch>
                {}
                {}
                <DetailsWidgetCategories></DetailsWidgetCategories>
                {}
                {}
                <DetailsWidgetPosts></DetailsWidgetPosts>
                {}
                {}
                <DetailsWidgetTags></DetailsWidgetTags>
                {}
                {}
                <DetailsWidgetSubscribe></DetailsWidgetSubscribe>
                {}
                {}
                <DetailsWidgetLogin></DetailsWidgetLogin>
                {}
                {}
                <DetailsWidgetCalendar></DetailsWidgetCalendar>
                {}
                {}
                <DetailsWidgetGallery></DetailsWidgetGallery>
                {}
                {}
                <DetailsWidgetTwitter></DetailsWidgetTwitter>
                {}
                {}
                <DetailsWidgetFB></DetailsWidgetFB>
                {}
                {}
                <DetailsWidgetText></DetailsWidgetText>
                {}
              </aside>
              {}
            </div>
          </div>
        </div>
        {}
        {}
        <DetailsFooter></DetailsFooter>
        {}
      </div>
    );
  }
}

export default Details;
