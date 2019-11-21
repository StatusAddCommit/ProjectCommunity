import React from "react";

class DetailsWidgetLogin extends React.Component {
  render() {
    return (
      <div className="widget-sidebar widget-login">
        <h4 className="widget-title">Login</h4>
        <form method="post">
          <input
            type="text"
            name="username"
            className="form-control"
            placeholder="username"
            required
          />
          <input
            type="password"
            name="password"
            className="form-control"
            placeholder="password"
            required
          />
          <div className="checkbox">
            <input
              name="rememberme"
              type="checkbox"
              id="rememberme"
              defaultValue="forever"
              defaultChecked
            />
            <label htmlFor="rememberme" className="checked">
              Remember Me
            </label>
          </div>
          <button type="submit" className="btn js-wave">
            Log In
          </button>
          <a href="#" className="forgot">
            Forgot password?
          </a>
        </form>
      </div>
    );
  }
}

export default DetailsWidgetLogin;
