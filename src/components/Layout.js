import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import { ThemeProvider } from 'styled-components';

import { theme } from '../styles/theme';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import GlobalStyle from '../styles/GlobalStyle';
import './layout.css';
import TransitionProvider from '../providers/TransitionProvider';

const Layout = ({ children, color }) => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Header color={color} />
        {children}
        <Footer color={color} />
      </ThemeProvider>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string
};

export default Layout;
