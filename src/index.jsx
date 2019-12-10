import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import allReducers from './reducers';

import * as serviceWorker from './serviceWorker';

import App from './App';
import About from './components/about/About';
import NotFound from './components/404/NotFound';
import Events from './components/events/Events';
import Details from './components/details/Details';
import Header from './components/Header';

const store = createStore(allReducers, applyMiddleware(thunk));

const routing = (
  <Provider store={store}>
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
  </Provider>
);

ReactDOM.render(routing, document.getElementById('root'));

serviceWorker.unregister();
