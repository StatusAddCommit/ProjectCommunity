import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';

// bootstrap import
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => <div>Home</div>;
const About = () => <div>About</div>;

const MainMenu = () => {
  return (
    <div>
      <Link to="/">
        <button type="button">home</button>
      </Link>
      <Link to="/about">
        <button type="button">About</button>
      </Link>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <MainMenu />
        </header>
        <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
        </div>
      </div>
    </Router>
  );
};

export default App;
