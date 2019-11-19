
//react complements
import React from 'react';
import { Route } from 'react-router-dom';

//importing the views
import index from '../views/home/Index';

function HomeController() {
  return (
    <div>
        <Route path="/" exact component={index} />
    </div>
  );
}

export default HomeController;
