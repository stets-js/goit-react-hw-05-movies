import React from 'react';
import { Link } from 'react-router-dom';
import css from './AppBar.module.css'


const navMenu = [
  { href: 'home', text: 'HOME' },
  { href: 'movies', text: 'MOVIES' },
];

const AppBar = () => {
  return (
    <div className={css.header}>
      <div className={css.navList}>
        {navMenu.map(({ href, text }) => (
          <Link className={css.navLink} to={href} key={href}>
            {text}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AppBar;
