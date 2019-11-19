import React from "react";
import PageLoader from "./components/PageLoader";
import Header from "./components/Header";
import FlySliderBanner from "./components/FlySliderBanner";
import FlyServices from "./components/FlyServices";
import CurrentProjects from "./components/CurrentProjects";
import SectionCta from "./components/SectionCta";
import EventsSection from "./components/EventsSection";
import SectionTestimonials from "./components/SectionTestimonials";
import SectionStats from "./components/SectionStats";
import SectionRecentPosts from "./components/SectionRecentPosts";
import SectionContactUs from "./components/SectionContactUs";
import Footer from "./components/Footer";

class AppBody extends React.Component {
  render() {
    return (
      <div className="app-body">
        {}
        <PageLoader></PageLoader>
        {}
        {}
        <Header></Header>
        {}
        {}
        <FlySliderBanner></FlySliderBanner>
        {}
        {}
        <FlyServices></FlyServices>
        {}
        {}
        <CurrentProjects></CurrentProjects>
        {}
        {}
        <SectionCta></SectionCta>
        {}
        {}
        <EventsSection></EventsSection>
        {}
        {}
        <SectionTestimonials></SectionTestimonials>
        {}
        {}
        <SectionStats></SectionStats>
        {}
        {}
        <SectionRecentPosts></SectionRecentPosts>
        {}
        {}
        <SectionContactUs></SectionContactUs>
        {}
        {}
        <Footer></Footer>
        {}
        {}
      </div>
    );
  }
}

export default AppBody;
