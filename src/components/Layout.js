import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';
import Header from './molecules/Header/Header';
import Footer from './molecules/Footer/Footer';
import GlobalStyle from '../styles/GlobalStyle';
import './layout.css';

const Layout = ({ children, colorTheme }) => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Header colorTheme={colorTheme} />
        {children}
        {/*<Footer colorTheme={colorTheme} />*/}
      </ThemeProvider>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  colorTheme: PropTypes.oneOf(['light', 'dark'])
};

export default Layout;
