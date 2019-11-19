import React from 'react';
import './App.css';
import Header from './partial/Header';

import index from './views/home/Index';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App ">
        <Header />

        <div className="container">
          <Route path="/" component={index} />
        </div>
          
          

      </div>
    </Router>
  );
}

export default App;
