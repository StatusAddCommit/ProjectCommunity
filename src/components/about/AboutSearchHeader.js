import React from 'react';

class AboutSearchHeader extends React.Component {
  render() {
    return (
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
    );
  }
}

export default AboutSearchHeader;
