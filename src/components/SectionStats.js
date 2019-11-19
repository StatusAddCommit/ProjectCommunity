import React from "react";

class SectionStats extends React.Component {
  render() {
    return (
      <section
        className="section section-stats parallax"
        style={{
          backgroundImage: "url(images/temp/slide-6.jpg)"
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-xs-6 col-sm-3">
              <div className="stats-item">
                <div
                  className="counter js-counter"
                  data-duration={2}
                  data-step=".1"
                >
                  31524
                </div>
                <div className="description">DONATIONS MADE</div>
              </div>
            </div>
            <div className="col-xs-6 col-sm-3">
              <div className="stats-item">
                <div
                  className="counter js-counter"
                  data-duration={2}
                  data-step=".1"
                >
                  247441
                </div>
                <div className="description">LITERS OF WATER SPENT</div>
              </div>
            </div>
            <div className="col-xs-6 col-sm-3">
              <div className="stats-item">
                <div
                  className="counter js-counter"
                  data-duration={2}
                  data-step=".1"
                >
                  41304
                </div>
                <div className="description">EDUCATION FOR PEOPLE</div>
              </div>
            </div>
            <div className="col-xs-6 col-sm-3">
              <div className="stats-item">
                <div
                  className="counter js-counter"
                  data-duration={2}
                  data-step=".1"
                >
                  2311
                </div>
                <div className="description">HOMES SERVED</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default SectionStats;
