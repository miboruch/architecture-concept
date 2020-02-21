import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ArrowIcon from '../../../assets/icons/arrow.svg';

const StyledArrow = styled(ArrowIcon)`
  width: 60px;
  height: 60px;
  border: ${({ colorTheme }) =>
    colorTheme === 'dark' ? '1px solid rgba(0,0,0,0.5)' : '1px solid #fff'};
  border-radius: 50%;
  fill: ${({ colorTheme }) => (colorTheme === 'dark' ? '#000' : '#fff')};
  margin: 0 1rem;
  padding: 0.5rem;
  cursor: pointer;
  transition: all 0.5s ease;
`;

const Arrow = ({ onClick, colorTheme }) => {
  return <StyledArrow onClick={onClick} colorTheme={colorTheme} />;
};

Arrow.propTypes = {
  onClick: PropTypes.func,
  colorTheme: PropTypes.oneOf(['light', 'dark'])
};

Arrow.defaultProps = {
  colorTheme: 'light'
};

export default Arrow;
