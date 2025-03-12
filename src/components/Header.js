import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <Link to="/" className="header-title">
        <h1>Project Template</h1>
      </Link>
    </header>
  );
}

export default Header;
