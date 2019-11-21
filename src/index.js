import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
// import history from './history';
import './index.css';
import * as serviceWorker from './serviceWorker';

import App from './App';
import About from './components/about/About';
import NotFound from './components/404/NotFound';
// static navigation menu
import Header from './components/Header';

const routing = (
  <Router>
    <Header />
    <Switch>
      <Route path="/" exact component={App} />
      <Route path="/about" component={About} />
      {/* <Route path="/events" component={Events} /> */}
      {/* <Route path="/events/:id" component={EventDetails} /> */}
      <Route component={NotFound} />
    </Switch>
  </Router>
);

ReactDOM.render(routing, document.getElementById('root'));

// ReactDOM.render(
//   <Router history={history}>
//     <AppBody />
//   </Router>,
//   document.getElementById('root')
// );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
