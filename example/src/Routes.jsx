import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import FAQPage from './pages/FAQPage';
import NotFoundPage from './pages/NotFoundPage';

const ROUTES = {
  LANDING: '/',
  FAQ: '/faq'
}

const Routes = () => {
  return (
    <Switch>
      <Route exact path={ROUTES.LANDING} component={LandingPage} />
      <Route exact path={ROUTES.FAQ} component={FAQPage} />
      <Route component={NotFoundPage} />
    </Switch>
  );
}

export default Routes;
