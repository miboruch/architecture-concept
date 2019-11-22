import { Link } from 'gatsby';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import React from 'react';

const StyledHeader = styled.header`
  width: 100%;
  height: 50px;
  background: transparent;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1000;
`;

const StyledLogo = styled.p`
  letter-spacing: 2px;
`;

const Header = () => {
  return (
    <StyledHeader>
      <StyledLogo>michalboruch</StyledLogo>
    </StyledHeader>
  );
};

export default Header;
