import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';
import Header from './molecules/Header/Header';
import Footer from './molecules/Footer/Footer';
import GlobalStyle from '../styles/GlobalStyle';
import MenuContextProvider from '../providers/MenuContext';
import './layout.css';
import Menu from './molecules/Menu/Menu';

const Layout = ({ children, colorTheme }) => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <MenuContextProvider>
          <Header colorTheme={colorTheme} />
          <Menu colorTheme={colorTheme} />
          {children}
          <Footer />
        </MenuContextProvider>
      </ThemeProvider>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  colorTheme: PropTypes.oneOf(['light', 'dark'])
};

export default Layout;
