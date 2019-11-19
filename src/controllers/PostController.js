
//react complements
import React from 'react';
import { Route } from 'react-router-dom';

//importing the views
import ContributorsByPostId from '../views/post/ContributorsByPostId';

function PostController() {
  return (
    <div>
        <Route path="/Post/ContributorsByPostId" exact component={ContributorsByPostId} />
    </div>
  );
}

export default PostController;
