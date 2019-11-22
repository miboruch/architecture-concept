import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import BackgroundImage from 'gatsby-background-image';
import { Keyframes } from 'react-spring/renderprops-universal';
import { animated, useSpring } from 'react-spring';
import { CurrentSlideContext } from '../../providers/CurrentSlideContext';
import { easeExpOut } from 'd3-ease';

const StyledBackground = styled(BackgroundImage)`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const StylesParagraph = styled.p`
  color: #fff;
  font-size: 40px;
`;

const StyledLine = styled.div`
  width: 100%;
  height: 1px;
  background: #fff;
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
`;

const Paragraph = styled(animated.p)`
  color: #ccc;
  font-size: 40px;
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
  border: 1px solid #fff;

  &:hover ${StyledBackground} {
    transform: scale(1.5);
    transition: transform 1s ease;
    cursor: pointer;
  }
`;

const Container = Keyframes.Spring({
  in: async next => {
    await next({
      opacity: 1
    });
  },
  out: async next => {
    await next({
      opacity: 0
    });
  }
});

const SliderContent = ({ image, index }) => {
  const { currentSlide } = useContext(CurrentSlideContext);
  const isCurrentSlide = currentSlide === index;

  const props = useSpring({
    config: { duration: 2000, easing: easeExpOut },
    to: {
      opacity: isCurrentSlide ? 1 : 0,
      transform: isCurrentSlide ? `translateX(0)` : `translateX(-50%)`
    },
    delay: 500
  });

  const line = useSpring({
    config: { duration: 2000, easing: easeExpOut },
    to: {
      x: isCurrentSlide ? '200px' : '0'
    },
    delay: 500
  });

  return (
    <StyledBackground fluid={image.childImageSharp.fluid}>
      <Paragraph style={props}>friend</Paragraph>
      <Container
        config={{ duration: 1000 }}
        state={currentSlide === index ? 'in' : 'out'}
      >
        {props => <StylesParagraph style={props}>hello</StylesParagraph>}
      </Container>
      <StyledCircle>ENTER</StyledCircle>
    </StyledBackground>
  );
};

export default SliderContent;
