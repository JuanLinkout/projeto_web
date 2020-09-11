import React from 'react';
import { Switch, Route, Redirect } from 'react-router';

import Home from '../components/home/Home';
import UserCrud from '../components/crud/user/UserCrud';
import DisciplinaCrud from '../components/crud/disciplinas/DisicplinaCrud';

export default (props) => (
  <Switch>
    <Route exact path='/' component={Home} />
    <Route path='/users' component={UserCrud} />
    <Route path='/disciplinas' component={DisciplinaCrud} />
    <Redirect from='*' to='/' />
  </Switch>
);
