import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ForSale from './components/forSale/forSale';

import Landing from "./components/landing/landing";

const Main = () => {
  return (
    <Switch>
      <Route exact path='/' component={Landing}></Route>
      <Route exact path ='/forsale' component={ForSale}></Route>
    </Switch>
  );
}

export default Main;