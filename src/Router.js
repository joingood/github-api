//react complements
import React from 'react';
import { Switch } from 'react-router-dom';

//loading the controllers
import PostController from './controllers/PostController';
import HomeController from './controllers/HomeController';

function Router() {
  return (
    <Switch>
        {/* all controllers views are loaded here: Home  */}
        <HomeController/>
        {/* all controllers views are loaded here: Post  */}
        <PostController/>
    </Switch>
  );
}

export default Router;
