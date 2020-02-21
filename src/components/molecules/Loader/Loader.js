import React from 'react';
import styled from 'styled-components';
import { animated } from 'react-spring';
import Paragraph from '../../atoms/Paragraph/Paragraph';
import { useSpring } from 'react-spring';
import { easeExpOut } from 'd3-ease';

const StyledUpperWrapper = styled.div`
  width: 100%;
  height: 50vh;
  position: fixed;
  top: 0;
  left: 0;
  background: ${({ theme }) => theme.color.background};
  z-index: 2000;
  transform: translateY(${({ isLoading }) => (isLoading ? '0' : '-100%')});
  transition: transform 1s cubic-bezier(0.84, 0, 0.08, 0.74);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const StyledLowerWrapper = styled(StyledUpperWrapper)`
  top: 50%;
  transform: translateY(${({ isLoading }) => (isLoading ? '0' : '100%')});
`;

const StyledParagraph = styled(animated(Paragraph))`
  color: #ccc;
`;

const Loader = ({ isLoading }) => {
  const textEffect = useSpring({
    config: { duration: 1500, easing: easeExpOut },
    from: {
      transform: 'rotate(10deg)',
      transformOrigin: 'top left',
      opacity: 0
    },
    to: {
      transform: 'rotate(0deg)',
      transformOrigin: 'center',
      opacity: 1
    },
    delay: 300
  });

  return (
    <>
      <StyledUpperWrapper isLoading={isLoading}>
        <StyledParagraph small='true' style={textEffect}>
          michalboruch
        </StyledParagraph>
      </StyledUpperWrapper>
      <StyledLowerWrapper isLoading={isLoading}>
        <StyledParagraph small='true'>architecture & design</StyledParagraph>
      </StyledLowerWrapper>
    </>
  );
};

export default Loader;
