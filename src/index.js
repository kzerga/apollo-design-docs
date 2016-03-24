import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import Navigation from './components/Nav';
import Typography from './components/Typography';
import linkState from './utils/linkState';

import './loadPlugins.js';
import '!style!css!sass!./styles/App.scss';

export default {
  Navigation,
  Typography,
  utils: {
    linkState
  }
}
