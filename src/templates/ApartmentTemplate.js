import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { useSpring, animated } from 'react-spring';
import { easeExpOut } from 'd3-ease';
import { Link } from 'gatsby';
import Paragraph from '../components/atoms/Paragraph/Paragraph';
import Layout from '../components/Layout';

const StyledWrapper = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.color.secondBackground};
  padding-top: 5rem;
  padding-bottom: 7rem;
  position: relative;
`;

const StyledInnerWrapper = styled.div`
  width: 90%;
  margin: auto;
`;

const StyledImage = styled(animated(Img))`
  width: 100%;
`;

const StyledHeading = styled(animated.h1)`
  letter-spacing: 3px;
  padding: 2rem 0;
  font-family: ${({ theme }) => theme.font.family.avanti};
  transition: all 0.3s ease;
  color: #2d2d2d;
`;

const StrokedParagraph = styled(animated.p)`
  position: relative;
  font-size: 40px;
  margin: 0;
  color: transparent;
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: #000;

  ${({ theme }) => theme.mq.mobileL} {
    font-size: 50px;
  }

  ::after {
    position: absolute;
    content: 'project id';
    font-family: ${({ theme }) => theme.font.family.futura};
    font-weight: lighter;
    font-size: 12px;
    bottom: 0.2rem;
    padding-left: 1rem;
    transform: translateY(-50%);
    -webkit-text-stroke-color: ${({ theme }) => theme.color.secondFont};
    letter-spacing: 2px;
  }
`;

const StyledParagraph = styled(animated(Paragraph))`
  color: ${({ theme }) => theme.color.secondFont};
  padding: 2rem 0;
  letter-spacing: 1px;
  text-decoration: none;
  font-size: 14px;
`;

const StyledParagraphNoPadding = styled(StyledParagraph)`
  padding: 0.3rem 0;
  color: #000;
`;

const StyledBackBox = styled(animated.div)`
  width: 130px;
  height: 40px;
  background: #fff;
  position: absolute;
  right: 0;
  top: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;

  ${({ theme }) => theme.mq.standard} {
    width: 360px;
  }
`;

const StyledDescriptionBox = styled.div`
  width: 100%;

  ${({ theme }) => theme.mq.standard} {
    width: 50%;
  }
`;

const createFadeIn = (duration, delay) => {
  return useSpring({
    config: { duration: duration, easing: easeExpOut },
    from: {
      opacity: 0
    },
    to: {
      opacity: 1
    },
    delay: delay
  });
};

const boxSlide = (duration, delay) => {
  return useSpring({
    config: { duration: duration, easing: easeExpOut },
    from: {
      right: '-100px',
      opacity: 0
    },
    to: {
      right: '0',
      opacity: 1
    },
    delay: delay
  });
};

const ApartmentTemplate = ({ image, content }) => {
  const fadeIn = createFadeIn(1500, 1500);
  const boxSlider = boxSlide(1500, 1500);

  return (
    <Layout colorTheme='light'>
      <StyledWrapper>
        <StyledInnerWrapper>
          <StyledBackBox style={boxSlider}>
            <Link to={'/'}>
              <StyledParagraph small='true'>GO BACK</StyledParagraph>
            </Link>
          </StyledBackBox>
          <StyledHeading style={fadeIn}>
            Inspiring solutions in each design
          </StyledHeading>
          <StrokedParagraph style={fadeIn}>
            {content.projectId}
          </StrokedParagraph>
          <StyledHeading style={fadeIn}>{content.heading}</StyledHeading>
          <StyledParagraphNoPadding small='true' style={fadeIn}>
            size: {content.size} sq.m
          </StyledParagraphNoPadding>
          <StyledParagraphNoPadding small='true' style={fadeIn}>
            location: {content.location}
          </StyledParagraphNoPadding>
          <StyledDescriptionBox>
            <StyledParagraph style={fadeIn}>
              {content.description}
            </StyledParagraph>
          </StyledDescriptionBox>
          <StyledImage
            fluid={image.image1.childImageSharp.fluid}
            style={fadeIn}
          />
        </StyledInnerWrapper>
      </StyledWrapper>
    </Layout>
  );
};

export default ApartmentTemplate;
