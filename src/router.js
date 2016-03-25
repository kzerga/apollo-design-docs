/**
 * ROUTER. JS
 * @AUTHOR: Ian Sayre
*/

import React from 'react';
import { Router } from 'react-routing';
import AppLayout from './components/AppLayout.js';
import Started from './components/GettingStarted.js';
import Overview from './components/Overview.js';
import ButtonsPage from './components/ButtonsPage.js';
import ColorPage from './components/ColorPage.js';


const router = new Router(on => {
   // Layouts
  on('*', async (state, next) => {
    const component = await next();
    if (component === undefined) {
      return undefined;
    }
    return <div>{component}</div>;
  });

  on('/', async (state, next) => {
    return <AppLayout><Started /></AppLayout>;
  });

  on('/Overview', async (state, next) => {
    return <AppLayout><Overview /></AppLayout>
  });

  on('/Buttons', async (state, next) => {
    return <AppLayout><ButtonsPage /></AppLayout>
  });

  on('/Color', async (state, next) => {
    return <AppLayout><ColorPage /></AppLayout>
  });
})

export default router;
