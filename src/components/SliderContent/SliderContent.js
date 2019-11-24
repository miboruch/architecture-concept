import React, { useContext, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import BackgroundImage from 'gatsby-background-image';
import { Keyframes } from 'react-spring/renderprops-universal';
import { animated, useSpring } from 'react-spring';
import { CurrentSlideContext } from '../../providers/CurrentSlideContext';
import { easeExpOut } from 'd3-ease';
import Paragraph from '../Paragraph/Paragraph';
import { content } from '../../utils/content';
import TransitionLink from 'gatsby-plugin-transition-link';
import asd from '../../pages/page-2';
import PageTransitionProvider from '../../providers/TransitionProvider';

const StyledBackground = styled(BackgroundImage)`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
`;

const ContentParagraph = styled(Paragraph)`
  color: ${({ index }) => (index === 1 ? '#000' : '#fff')};
`;

const StyledLine = styled(animated.div)`
  width: 0;
  height: 1px;
  background: #fff;
  position: absolute;
  top: 30%;
  left: 0;
  transform: translateY(-50%);
`;

const StrokedParagraph = styled(animated.p)`
  margin: 0;
  font-size: 90px;
  color: transparent;
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: white;

  ${({ index }) =>
    `-webkit-text-stroke-color: ${index === 1 ? '#000' : '#fff'}`}
`;

const StyledCircle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ index }) => (index === 1 ? '#000' : '#fff')};
  width: 160px;
  height: 160px;
  border-radius: 50%;
  background: none;
  border: 1px solid ${({ index }) => (index === 1 ? '#000' : '#fff')};
  transition: transform 1s ease;
  position: relative;

  &::before,
  &::after {
    content: '';
    position: absolute;
    background: transparent;
    top: 0;
    left: 0;
    width: 160px;
    height: 160px;
    border: 1px solid #fff;
    border-radius: 50%;
  }

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
    transition: transform 1s ease;
  }

  &:hover ${StyledBackground} {
    transform: scale(1.03);
  }
`;

const SliderContent = ({ image, index }) => {
  const { currentSlide } = useContext(CurrentSlideContext);
  const isCurrentSlide = currentSlide === index;

  const props = useSpring({
    config: { duration: 2000, easing: easeExpOut },
    to: {
      opacity: isCurrentSlide ? 1 : 0,
      transform: isCurrentSlide ? `translateX(0)` : `translateX(-50%)`
    },
    reverse: !isCurrentSlide,
    delay: 500
  });

  const line = useSpring({
    config: { duration: 2000, easing: easeExpOut },
    to: {
      width: isCurrentSlide ? '300px' : '0px'
    },
    reverse: !isCurrentSlide,
    delay: 500
  });

  const mainText = useSpring({
    config: { duration: 2000, easing: easeExpOut },
    to: {
      transform: isCurrentSlide ? 'translateX(0)' : 'translateX(100px)',
      opacity: isCurrentSlide ? 1 : 0
    },
    delay: 500
  });

  return (
    <StyledBackground fluid={image.childImageSharp.fluid}>
      <ContentParagraph style={props} index={index}>
        {content[index].subtitle}
      </ContentParagraph>
      <StrokedParagraph style={mainText} index={index}>
        {content[index].title}
      </StrokedParagraph>
      <StyledLine style={line} />
      <StyledCircle index={index}>ENTER</StyledCircle>
      <TransitionLink to={'/page-2'}>
        click me
      </TransitionLink>
    </StyledBackground>
  );
};

export default SliderContent;
