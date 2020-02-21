import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import Hamburger from '../../atoms/Hamburger/Hamburger';
import Paragraph from '../../atoms/Paragraph/Paragraph';

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

const StyledParagraph = styled(Paragraph)`
  color: ${({colorTheme}) => colorTheme==='dark' ? '#fff' : '#000'}
`;

const Header = ({ colorTheme }) => {
  return (
    <StyledHeader>
      <Hamburger isOpen={false} colorTheme={colorTheme} />
      <StyledParagraph colorTheme={colorTheme}>michalboruch</StyledParagraph>
    </StyledHeader>
  );
};

Header.propTypes = {
  colorTheme: PropTypes.oneOf(['light', 'dark'])
};

export default Header;
