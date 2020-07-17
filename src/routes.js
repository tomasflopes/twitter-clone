import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Profile from './pages/Profile';
import Messages from './pages/Messages';
import Notifications from './pages/Notifications';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/profile' component={Profile} />
        <Route path='/notifications' component={Notifications} />
        <Route path='/messages' component={Messages} />
      </Switch>
    </BrowserRouter>
  );
}
