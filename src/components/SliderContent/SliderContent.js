import React, { useContext, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';
import BackgroundImage from 'gatsby-background-image';
import { Keyframes } from 'react-spring/renderprops-universal';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { animated, useSpring } from 'react-spring';
import { CurrentSlideContext } from '../../providers/CurrentSlideContext';
import { easeExpOut } from 'd3-ease';
import Paragraph from '../Paragraph/Paragraph';
import { sliderContent } from '../../utils/content';
import TransitionProvider from '../../providers/TransitionProvider';

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
  color: #fff;
`;

const StyledLine = styled(animated.div)`
  width: 0;
  height: 1px;
  background: #fff;
  transform: translateY(-50%);
`;

const StrokedParagraph = styled(animated.p)`
  margin: 0;
  font-size: 70px;
  color: transparent;
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: white;

  ${({ theme }) => theme.mq.mobileL} {
    font-size: 90px;
  }
`;

const StyledCircle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  width: 160px;
  height: 160px;
  border-radius: 50%;
  background: none;
  border: #fff;
  margin-top: 2rem;
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

const SliderContent = ({ image, index, content }) => {
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
      <ContentParagraph style={props}>{content.subheading}</ContentParagraph>
      <StrokedParagraph style={mainText}>{content.heading}</StrokedParagraph>
      <StyledLine style={line} />
      <TransitionProvider to={`/${content.subheading}-design`} index={index}>
        <StyledCircle>ENTER</StyledCircle>
      </TransitionProvider>
    </StyledBackground>
  );
};

SliderContent.propTypes = {
  index: PropTypes.number.isRequired
};

export default SliderContent;
