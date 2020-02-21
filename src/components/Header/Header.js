import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import Hamburger from '../atoms/Hamburger/Hamburger';
import Paragraph from '../Paragraph/Paragraph';

const StyledHeader = styled.header`
  width: 100%;
  height: 64px;
  background: transparent;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  padding: 0 2rem;
`;

const Header = ({ colorTheme }) => {
  return (
    <StyledHeader>
      <Hamburger isOpen={false} colorTheme={colorTheme} />
      <Paragraph small='true'>michalboruch</Paragraph>
    </StyledHeader>
  );
};

Header.propTypes = {
  colorTheme: PropTypes.oneOf(['light', 'dark'])
};

export default Header;
