/**
 * ROUTER. JS
 * @AUTHOR: Ian Sayre
*/

import React from 'react';
import { Router } from 'react-routing';


const router = new Router(on => {
   // Layouts
  on('*', async (state, next) => {
    const component = await next();
    if (component === undefined) {
      return undefined;
    }
    return <div>{component}</div>;
  });
})

export default router;
