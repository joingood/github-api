import React from 'react';
import './App.css';
import Header from './partial/Header';

// import index from './views/home/Index';
// import ContributorsByPostId from './views/post/ContributorsByPostId';

// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Router';

function App() {
  return (
    <Router>
      <div className="App ">
        {/* loading header */}
        <Header />

        <div className="container" id="container-main">

          {/* loading the views in this section */}
          <Routes />

        </div>
          
      </div>
    </Router>
  );
}

export default App;
