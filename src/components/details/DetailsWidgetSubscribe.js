import React from 'react';

class DetailsWidgetSubscribe extends React.Component {
  render() {
    return (
      <div className="widget-sidebar widget_mc4wp_form_widget">
        <h4 className="widget-title">Subscribe</h4>
        <p>
          Subscribe our newsletter for new posts, right from your inbox. Let’s
          stay updated!
        </p>
        <form className="mc4wp-form mc4wp-form-17" method="post">
          <div className="mc4wp-form-fields">
            <input
              type="text"
              name="subscribe-name"
              className="form-control"
              placeholder="enter your name"
              required
            />
            <input
              type="email"
              name="subscribe-email"
              className="form-control"
              placeholder="enter your email address"
              required
            />
            <button type="submit" className="btn js-wave">
              subscribe now
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default DetailsWidgetSubscribe;
