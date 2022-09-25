import React from 'react';
import AppBar from './AppBar/AppBar';
import css from './Layout.module.css'

const Layout = () => {
  return (
    <div className={css.layout}>
          <AppBar />
        
    </div>
  );
};
export default Layout;
