import React, { useState } from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';
import { navItems } from '../constants/data';
import { authLink } from '../constants/data';
import ModuleCtrl from './ModuleCtrl';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [mobileMenuOpen, setmobileMenuOpen] = useState(false);
  return (
    <nav className="backdrop-blur-lg">
      <div className="container relative">
        <div className="nav_wrapper">
          <div className="logo">
            <div className="logo_symbol">
              <span className="logo_dot"> </span>
            </div>
            <span className="logo__title lg:text-xl md:text-lg">AceDot.Dev</span>
          </div>
          <ul className="navi hidden lg:flex">
            {/* component/data.jsx 경로에 export const navItems 부분과 매칭 됨 */}
            {navItems.map((item, idx) => (
              <li key={idx}>
                <Link to={item.to}>{item.label}</Link>
              </li>
            ))}
          </ul>
          <div className="sub_link_wrapper flex ">
            <div className="sub_links hidden lg:flex">
              {authLink.map((item, idx) => (
                <Link
                  to={item.to}
                  key={idx}
                  className={`${idx === 1 && 'bg-gradient-to-r from-indigo-500 to-indigo-700 text-white'}`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <div className="menu_icon lg:hidden">
              <button onClick={() => setmobileMenuOpen(!mobileMenuOpen)}>{mobileMenuOpen ? <X /> : <Menu />}</button>
            </div>
            <ModuleCtrl />
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="sub_nav_mobile absolute bg-white w-full top-full left-0 dark:bg-neutral-900 mt-[1px] lg:hidden">
            <ul className="navi">
              {/* component/data.jsx 경로에 export const navItems 부분과 매칭 됨 */}
              {navItems.map((item, idx) => (
                <li key={idx} className="py-4 border-b border-neutral-600 w-full text-center">
                  <Link to={item.to} className="block w-full h-full">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="sub_links flex py-4 gap-2 justify-center border-b border-neutral-600">
              {authLink.map((item, idx) => (
                <Link
                  to={item.to}
                  key={idx}
                  className={`${idx === 1 && 'bg-gradient-to-r from-indigo-500 to-indigo-700 text-white'}`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
