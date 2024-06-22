import React from 'react';
import './Header.css';

const Header = () => {
  
  return (
    <header className="header">
      <img src='./foxone.jpeg' alt="Michi" className="logo" />
      <span className="header-name">$FOX</span>
    </header>
  );
};

export default Header;