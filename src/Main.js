import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Landing from "./components/landing/landing.js";
import ForSale from "./components/forSale/forSale.js"

const Main = () => {
  return (
    <Switch>
      <Route exact path='/' component={Landing}></Route>
      <Route exact path ='/for-sale' component={ForSale}></Route>
    </Switch>
  );
}

export default Main;