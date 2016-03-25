import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import Navigation from './components/Nav.js';
import AppLayout from './components/AppLayout.js';
import Started from './components/GettingStarted.js';
import Overview from './components/Overview.js';
import ButtonsPage from './components/ButtonsPage.js';
import ColorPage from './components/ColorPage.js';
import linkState from './utils/linkState.js';

import './loadPlugins.js';
import '!style!css!sass!./styles/App.scss';

export default {
  Navigation,
  AppLayout,
  Started,
  Overview,
  ButtonsPage,
  ColorPage,
  utils: {
    linkState
  }
}
