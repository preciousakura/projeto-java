import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';
import { Home } from '../pages'
import { ProviderUtil } from '../utils/context'


const Router = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch >
        <ProviderUtil>
          <Route path="/" component={ Home } />
        </ProviderUtil>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
