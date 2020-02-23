import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import Hamburger from '../../atoms/Hamburger/Hamburger';
import Paragraph from '../../atoms/Paragraph/Paragraph';
import { useScrollPosition } from '../../../utils/customHooks';

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
  transition: all 1s 0.5s ease;

  ${({ isOnTop }) =>
    !isOnTop &&
    css`
      transition: all 1s 0.5s ease;
      background-color: ${({ colorTheme }) =>
        colorTheme === 'dark' ? '#2d2d2d' : '#fff'};
    `}
`;

const StyledParagraph = styled(Paragraph)`
  color: ${({ colorTheme }) => (colorTheme === 'dark' ? '#fff' : '#000')};
`;

const Header = ({ colorTheme }) => {
  const isOnTop = useScrollPosition();
  return (
    <StyledHeader colorTheme={colorTheme} isOnTop={isOnTop}>
      <Hamburger isOpen={false} colorTheme={colorTheme} />
      <Link to={'/'}>
        <StyledParagraph colorTheme={colorTheme}>michalboruch</StyledParagraph>
      </Link>
    </StyledHeader>
  );
};

Header.propTypes = {
  colorTheme: PropTypes.oneOf(['light', 'dark'])
};

export default Header;
