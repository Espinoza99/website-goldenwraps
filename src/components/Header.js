// components/Header.js

import React from 'react';
import '../styles.css'

const Header = () => {
  return (
    <header>
      <h1>Golden Wraps</h1>
      <nav>
        <ul>
          <li><a href="#appointment">ABOUT</a></li>
          <li><a href="#payment">BOOKING</a></li>
          <li><a href="#products">PRODUCTS</a></li>
          <li><a href="#services">SERVICES</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
