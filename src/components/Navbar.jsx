import React from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';
import { navItems } from '../constants/data';
import { authLink } from '../constants/data';
import ModuleCtrl from './ModuleCtrl';

const Navbar = () => {
  return (
    <nav>
      <div className="container">
        <div className="nav_wrapper">
          <div className="logo">
            <div className="logo_symbol">
              <span className="logo_dot"> </span>
            </div>
            <span className="logo__title">AceDot.Dev</span>
          </div>
          <ul className="navi">
            {/* component/data.jsx 경로에 export const navItems 부분과 매칭 됨 */}
            {navItems.map((item, idx) => (
              <li key={idx}>
                <Link to={item.to}>{item.label}</Link>
              </li>
            ))}
          </ul>
          <div className="sub_links">
            {authLink.map((item, idx) => (
              <Link
                to={item.to}
                key={idx}
                className={`${idx === 1 && 'bg-gradient-to-r from-indigo-500 to-indigo-700'}`}
              >
                {item.label}
              </Link>
            ))}
            <ModuleCtrl />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
