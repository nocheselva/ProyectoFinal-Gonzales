import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';
import logo from '../../assets/logo.png'; 
import './NavBar.css';

// 1. YA NO recibimos props (cartCount), lo quitamos de los paréntesis
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

      {/* 2. El CartWidget ya no necesita recibir nada por aquí */}
      <CartWidget />
    </nav>
  );
};

export default NavBar;