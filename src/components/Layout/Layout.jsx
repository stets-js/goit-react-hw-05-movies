import React from 'react';
import AppBar from '../AppBar/AppBar';
import css from '../Layout/Layout.module.css'
import PropTypes from 'prop-types'

const Layout = ({children}) => {
  return (
    <div className={css.layout}>
          <AppBar />
        {children}
    </div>
  );
};
export default Layout;

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}