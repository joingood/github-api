/*
  This function is responsible for managing the routes, having centralized routing
 */

//react complements
import React from 'react';
import { Switch, Route } from 'react-router-dom';

//loading the views to show
import ContributorsByPostId from './views/post/ContributorsByPostId';
import index from './views/home/Index';

function Router() {
  return (
    <Switch>

        <Route path="/" exact component={index} />

        <Route path="/Post/ContributorsByPostId/:owner/:repo" exact component={ContributorsByPostId} />

    </Switch>
  );
}

export default Router;
