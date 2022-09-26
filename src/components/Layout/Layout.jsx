import React from 'react';
import AppBar from '../AppBar/AppBar';
import css from '../Layout/Layout.module.css'

const Layout = ({children}) => {
  return (
    <div className={css.layout}>
          <AppBar />
        {children}
    </div>
  );
};
export default Layout;
