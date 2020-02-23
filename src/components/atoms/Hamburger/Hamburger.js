import React, { useContext } from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { MenuContext } from '../../../providers/MenuContext';

const StyledHamburger = styled.button`
  cursor: pointer;
  width: 70px;
  height: 60px;
  background: transparent;
  border: none;
  z-index: 901;
  position: absolute;
  top: 50%;
  right: 2rem;
  transform: translateY(-50%);
  margin-left: 1rem;

  :focus {
    outline: none;
  }
`;

const InnerHamburger = styled.div`
  position: relative;
  ${({ isOpen }) =>
    isOpen &&
    css`
      background: transparent;
    `}
  &::before,
  &::after {
    content: '';
    height: 1px;
    background: ${({ colorTheme }) =>
      colorTheme === 'light' ? '#000' : '#fff'};
    position: absolute;
    right: 0;
    transition: all 0.5s ease;
  }
  ::before {
    top: ${({ isOpen }) => (isOpen ? '0' : '-2px')};
    width: 32px;
    transform: rotate(${({ isOpen }) => (isOpen ? '40deg' : '0deg')});
  }
  ::after {
    top: ${({ isOpen }) => (isOpen ? '0' : '2px')};
    width: ${({ isOpen }) => (isOpen ? '32px' : '26px')};
    transform: rotate(${({ isOpen }) => (isOpen ? '-40deg' : '0deg')});
  }
  ${StyledHamburger}:hover & {
    background: transparent;
    &::before {
      top: 0;
    }
    &::after {
      top: 0;
    }
  }
`;

const Hamburger = ({ colorTheme }) => {
  const { isOpen, toggleMenu } = useContext(MenuContext);
  return (
    <StyledHamburger onClick={toggleMenu}>
      <InnerHamburger isOpen={isOpen} colorTheme={colorTheme} />
    </StyledHamburger>
  );
};

Hamburger.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  colorTheme: PropTypes.oneOf(['dark', 'light'])
};

export default Hamburger;
