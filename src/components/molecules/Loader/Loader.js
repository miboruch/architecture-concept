import React from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';
import { easeExpOut } from 'd3-ease';
import Paragraph from '../../atoms/Paragraph/Paragraph';

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

const OverFlowBox = styled.div`
  overflow: hidden;
`;

const Loader = ({ isLoading }) => {
  const textEffect = useSpring({
    config: { duration: 1000, easing: easeExpOut },
    from: {
      transform: 'matrix(0.99, 0.89, 0, 1, 0, 100)',
      opacity: 0
    },
    to: {
      opacity: 1,
      transform: 'matrix(1,0,0,1,0,0)'
    },
    delay: 500
  });

  return (
    <>
      <StyledUpperWrapper isLoading={isLoading}>
        <OverFlowBox>
          <StyledParagraph medium='true' style={textEffect}>
            michalboruch
          </StyledParagraph>
        </OverFlowBox>
      </StyledUpperWrapper>
      <StyledLowerWrapper isLoading={isLoading}>
        <StyledParagraph small='true'>architecture & design</StyledParagraph>
      </StyledLowerWrapper>
    </>
  );
};

export default Loader;
