import React, { useContext } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import BackgroundImage from 'gatsby-background-image';
import { animated, useSpring } from 'react-spring';
import { CurrentSlideContext } from '../../../providers/CurrentSlideContext';
import { easeExpOut } from 'd3-ease';
import Paragraph from '../../atoms/Paragraph/Paragraph';

const StyledBackground = styled(BackgroundImage)`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: flex-end;
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

const ContentWrapper = styled.div`
  margin-bottom: 80px;
  display: flex;
  flex-direction: column;
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
      <ContentWrapper>
        <ContentParagraph style={props}>{content.subheading}</ContentParagraph>
        <StrokedParagraph style={mainText}>{content.heading}</StrokedParagraph>
      </ContentWrapper>
    </StyledBackground>
  );
};

SliderContent.propTypes = {
  index: PropTypes.number.isRequired
};

export default SliderContent;
