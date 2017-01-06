import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import AppContainer from './AppContainer';
import AppStore from './redux/store/index';
import createRoutes from './routes/index';

const history = syncHistoryWithStore(hashHistory, AppStore);

const renderApp = (id) => {
  const ROOT_DOM = document.getElementById(id);
  ReactDOM.render(
    <AppContainer
      store={AppStore}
      history={history}
      routes={createRoutes(AppStore)}
    />,
    ROOT_DOM
  )
};

export default renderApp;
