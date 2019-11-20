import React from 'react';
import './App.css';
import Header from './partial/Header';

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
