import React from 'react';
import { Link } from 'react-router-dom';


const navMenu = [
  { href: 'home', text: 'HOME' },
  { href: 'movies', text: 'MOVIES' },
];

const AppBar = () => {
  return (
    <div>
      <div>
        {navMenu.map(({ href, text }) => (
          <Link to={href} key={href}>
            {text}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AppBar;
