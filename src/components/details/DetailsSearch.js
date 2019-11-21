import React from "react";

class DetailsSearch extends React.Component {
  render() {
    return (
      <div className="widget-sidebar widget-search">
        <h4 className="widget-title">Search</h4>
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
    );
  }
}

export default DetailsSearch;
