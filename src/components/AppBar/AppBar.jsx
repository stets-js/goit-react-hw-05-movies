import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './AppBar.module.css'
import styled from 'styled-components';


const navMenu = [
  { href: '/', text: 'HOME' },
  { href: 'movies', text: 'MOVIES' },
];

const ItemMenu = styled(NavLink)`
&.active{
  background: linear-gradient(45deg, transparent 5%, #00FFD1 5%);
}
`

const AppBar = () => {
  return (
    <div className={css.header}>
      <div className={css.navList}>
        {navMenu.map(({ href, text }) => (
          <ItemMenu className={css.navLink} to={href} key={href} end>
            {text}
          </ItemMenu>
        ))}
      </div>
    </div>
  );
};

export default AppBar;
