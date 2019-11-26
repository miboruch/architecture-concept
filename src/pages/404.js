import React, { useState } from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import { animated } from 'react-spring';
import SEO from '../components/SEO';
import TransitionProvider from '../providers/TransitionProvider';
import Paragraph from '../components/Paragraph/Paragraph';
import { useSpring } from 'react-spring';
import { easeExpOut } from 'd3-ease';

const StyledWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background: ${({ theme }) => theme.color.background};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const TextWrapper = styled.div`
  width: 300px;
  height: 300px;
  border: 1px solid #fff;
  border-radius: 50%;
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
`;

const StyledHeading = styled(animated.h1)`
  color: #fff;
  letter-spacing: 2px;
  text-align: center;
`;

const NumberHeading = styled(animated(StyledHeading))`
  font-size: 50px;
  font-weight: lighter;
  letter-spacing: 5px;
`;

const StyledParagraph = styled(animated(Paragraph))`
  text-decoration: none;
  color: #fff;
  letter-spacing: 2px;
  margin: 0;
  padding: 2rem;
`;

const createFadeIn = delay => {
  return useSpring({
    config: { duration: 800, easing: easeExpOut },
    from: {
      opacity: 0,
      transform: 'translateX(-30px)'
    },
    to: {
      transform: 'translateX(0)',
      opacity: 1
    },
    delay: delay
  });
};

const NotFoundPage = () => {
  const firstFadeIn = createFadeIn(300);
  const secondFadeIn = createFadeIn(700);
  const thirdFadeIn = createFadeIn(1100);

  return (
    <Layout>
      <SEO title='Not found' />
      <StyledWrapper>
        <TextWrapper>
          <NumberHeading style={secondFadeIn}>404</NumberHeading>
          <StyledHeading style={firstFadeIn}>NOT FOUND</StyledHeading>
          <TransitionProvider to='/'>
            <StyledParagraph small='true' style={thirdFadeIn}>go back to main page</StyledParagraph>
          </TransitionProvider>
        </TextWrapper>
      </StyledWrapper>
    </Layout>
  );
};

export default NotFoundPage;
