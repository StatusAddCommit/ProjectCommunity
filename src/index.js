import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import history from './history';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';

import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

import allReducer from './reducers';

const composedEnhancers = compose(
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(reduxThunk)
);

const store = createStore(allReducer, composedEnhancers);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
// import App from './App';
import AppBody from './AppBody';
import App from './App';
import About from './components/about/About';
import NotFound from './components/404/NotFound';
import Events from './components/events/Events';
import Details from './components/details/Details';

// static navigation menu
import Header from './components/Header';

const routing = (
  <Router>
    <Header />
    <Switch>
      <Route path="/" exact component={App} />
      <Route path="/about" component={About} />
      <Route path="/events" component={Events} />
      <Route path="/event:id" component={Details} />
      <Route component={NotFound} />
    </Switch>
  </Router>
);

ReactDOM.render(routing, document.getElementById('root'));

serviceWorker.unregister();
