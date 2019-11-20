//react complements
import React from 'react';
import { Switch, Route } from 'react-router-dom';

//loading the controllers
//import PostController from './controllers/PostController';
//import HomeController from './controllers/HomeController';

import ContributorsByPostId from './views/post/ContributorsByPostId';
import index from './views/home/Index';

function Router() {
  return (
    <Switch>
        {/* <HomeController />
        <PostController/> */}

        <Route path="/" exact component={index} />

        <Route path="/Post/ContributorsByPostId/:owner/:repo" exact component={ContributorsByPostId} />

    </Switch>
  );
}

export default Router;
