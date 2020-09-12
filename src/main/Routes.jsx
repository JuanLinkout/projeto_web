import React from 'react';
import { Switch, Route, Redirect } from 'react-router';

import Home from '../components/home/Home';
import UserCrud from '../components/crud/professores/ProfessoresCrud';
import DisciplinaCrud from '../components/crud/disciplinas/DisciplinaCrud';
import ProfDiscCrud from '../components/crud/profdisc/ProfDiscCrud';

export default (props) => (
  <Switch>
    <Route exact path='/' component={Home} />
    <Route path='/users' component={UserCrud} />
    <Route path='/disciplinas' component={DisciplinaCrud} />
    <Route path='/profdisc' component={ProfDiscCrud} />
    <Redirect from='*' to='/' />
  </Switch>
);
