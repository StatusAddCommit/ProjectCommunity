import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import history from './history';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';

import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
// import history from './history';
import './index.css';
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
import About from './components/about/About';

const routing = (
  <Router>
    <Switch>
      <Route exact path="/" component={AppBody} />
      <Route path="/about" component={About} />
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
