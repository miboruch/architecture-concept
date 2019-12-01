import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import Paragraph from '../components/Paragraph/Paragraph';
import Layout from '../components/Layout';
import TransitionProvider from '../providers/TransitionProvider';

const StyledWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background: ${({ theme }) => theme.color.secondBackground};
  padding-top: 5rem;
  padding-bottom: 7rem;
  position: relative;
`;

const StyledInnerWrapper = styled.div`
  width: 90%;
  margin: auto;
`;

const StyledImage = styled(Img)`
  width: 100%;
`;

const StyledHeading = styled.h1`
  letter-spacing: 3px;
  padding: 2rem 0;
`;

const StrokedParagraph = styled.p`
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
    font-size: 12px;
    bottom: 0.2rem;
    padding-left: 1rem;
    transform: translateY(-50%);
    -webkit-text-stroke-color: ${({ theme }) => theme.color.secondFont};
    letter-spacing: 2px;
  }
`;

const StyledParagraph = styled(Paragraph)`
  color: ${({ theme }) => theme.color.secondFont};
  padding: 2rem 0;
  letter-spacing: 3px;
`;

const StyledParagraphNoPadding = styled(StyledParagraph)`
  padding: 0.3rem 0;
  color: #000;
`;

const StyledBackBox = styled.div`
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

const ProductTemplate = ({ image, content }) => {
  return (
    <Layout color='dark'>
      <StyledWrapper>
        <StyledInnerWrapper>
          <StyledBackBox>
            <TransitionProvider to='/'>
              <StyledParagraph small='true'>GO BACK</StyledParagraph>
            </TransitionProvider>
          </StyledBackBox>
          <StyledHeading>Inspiring solutions in each design</StyledHeading>
          <StrokedParagraph>{content.projectId}</StrokedParagraph>
          <StyledHeading>{content.heading}</StyledHeading>
          <StyledParagraphNoPadding small='true'>
            size: {content.size} sq.m
          </StyledParagraphNoPadding>
          <StyledParagraphNoPadding small='true'>
            location: {content.location}
          </StyledParagraphNoPadding>
          <StyledDescriptionBox>
            <StyledParagraph small='true'>
              {content.description}
            </StyledParagraph>
          </StyledDescriptionBox>
          <StyledImage fluid={image.image1.childImageSharp.fluid} />
        </StyledInnerWrapper>
      </StyledWrapper>
    </Layout>
  );
};

export default ProductTemplate;
