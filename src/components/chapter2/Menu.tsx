import React from 'react';
import '../default.css';
import './menu.css';

const Menu = () => {
  return (
    <ul className="menu">
      <li className="menu-item">
        <a href="#" className="menu-link">
          Home
        </a>
      </li>
      <li className="menu-item">
        <a href="#" className="menu-link">
          About
        </a>
      </li>
      <li className="menu-item">
        <a href="#" className="menu-link">
          Product
        </a>
      </li>
      <li className="menu-item">
        <a href="#" className="menu-link">
          Contact
        </a>
      </li>
    </ul>
  );
};

export default Menu;
