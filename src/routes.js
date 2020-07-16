import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Profile from './pages/Profile';
import Messages from './pages/Messages';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' component={Profile} exact />
        <Route path='/messages' component={Messages} />
      </Switch>
    </BrowserRouter>
  );
}
