import React from 'react';
import { Switch } from 'react-router-dom';

import MyRoute from './MyRoute';
import Home from '../view/Home';
import Details from '../view/Details';
import Page404 from '../view/Page404';

export default function Routes() {
  return (
    <Switch>
      <MyRoute exact path="/" component={Home} />
      <MyRoute exact path="/:id" component={Details} />
      <MyRoute path="*" component={Page404} />
    </Switch>
  );
}
