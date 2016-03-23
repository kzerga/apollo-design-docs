import 'babel-polyfill';
import 'normalize.css';
require('!style!css!sass!../styles/App.scss');

import React from 'react';
import ReactDOM from 'react-dom';
import router from '../router.js';
import Location from './location.js';


// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'font-awesome/css/font-awesome.min.css';
import './loadPlugins.js';

const appContainer = document.getElementById('app');

const context = {
  onSetTitle: value => document.title = value,
  onSetMeta: (name, content) => {
    // Remove and create a new <meta /> tag in order to make it work
    // with bookmarks in Safari
    const elements = document.getElementsByTagName('meta');
    [].slice.call(elements).forEach((element) => {
      if (element.getAttribute('name') === name) {
        element.parentNode.removeChild(element);
      }
    });
    const meta = document.createElement('meta');
    meta.setAttribute('name', name);
    meta.setAttribute('content', content);
    document.getElementsByTagName('head')[0].appendChild(meta);
  }
};

function render(state) {
  router.dispatch(state, (newState, component) => {
    ReactDOM.render(component, appContainer);
  });
}

// Re-render the app when window.location changes
function run() {
  let currentLocation = null;
  let currentState = null;

  const unlisten = Location.listen(location => {
    currentLocation = location;
    currentState = Object.assign({}, location.state, {
      path: location.pathname,
      query: location.query,
      state: location.state,
      context
    });
    render(currentState);
  });
}

// Run the application when both DOM is ready and page content is loaded
if (['complete', 'loaded', 'interactive'].includes(document.readyState) && document.body) {
  run();
} else {
  document.addEventListener('DOMContentLoaded', run, false);
}
