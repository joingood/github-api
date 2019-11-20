import React from 'react';

import { Link } from "react-router-dom"; //load link for redirect

function Header() {
  return (
    <nav className="Header green accent-3">
        <div className="nav-wrapper container">
        <Link to={`/`} className="brand-logo">GITHUB API</Link>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><a href="https://viva.com.do/">VIVA</a></li>
        </ul>
        </div>
    </nav>
  );
}

export default Header;
