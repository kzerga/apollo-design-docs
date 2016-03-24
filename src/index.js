import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import Navigation from './components/Nav';
import App from './components/Main';
import linkState from './utils/linkState';

import './loadPlugins.js';
import '!style!css!sass!./styles/App.scss';

export default {
  Navigation,
  App,
  utils: {
    linkState
  }
}
