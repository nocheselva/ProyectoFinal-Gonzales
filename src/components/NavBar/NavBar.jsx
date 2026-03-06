import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';
import logo from '../../assets/logo.png'; 
import './NavBar.css';


const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          <img src={logo} alt="Buscadog" className="logo-img" />
        </Link>
      </div>

      <ul className="navbar-links">
        <li>
          <NavLink 
            to="/category/Accesorios" 
            className={({ isActive }) => isActive ? 'active-link' : 'link'}
          >
            Accesorios
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/category/Alimentos" 
            className={({ isActive }) => isActive ? 'active-link' : 'link'}
          >
            Alimentos
          </NavLink>
        </li>
      </ul>

      {}
      <CartWidget />
    </nav>
  );
};

export default NavBar;