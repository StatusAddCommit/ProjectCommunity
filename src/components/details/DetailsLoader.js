import React from "react";

class DetailsLoader extends React.Component {
  render() {
    return (
      <div className="page-loader">
        <div className="preloader-wheel active">
          <div className="spinner-layer">
            <div className="circle-clipper left">
              <div className="circle" />
            </div>
            {}
            <div className="gap-patch">
              <div className="circle" />
            </div>
            {}
            <div className="circle-clipper right">
              <div className="circle" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DetailsLoader;
