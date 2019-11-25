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

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      {/*<TransitionProvider/>*/}
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        {children}
        <Footer />
      </ThemeProvider>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
