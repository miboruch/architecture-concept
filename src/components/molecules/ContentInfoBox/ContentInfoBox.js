import React from 'react';
import styled from 'styled-components';
import Paragraph from '../../atoms/Paragraph/Paragraph';
import { Link } from 'gatsby';

const StyledWrapper = styled.div`
  width: 100%;
  height: 180px;
  background-color: ${({ colorTheme }) =>
    colorTheme === 'dark' ? '#2d2d2d' : '#e2e2e2'};
  padding: 2rem;
  position: relative;
  color: ${({ colorTheme }) => (colorTheme === 'dark' ? '#fff' : '#2d2d2d')};
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
`;

const StyledTitle = styled(Paragraph)`
  font-family: ${({ theme }) => theme.font.family.avanti};
  font-weight: bold;
  font-size: 20px;
  color: inherit;
  margin-bottom: 1rem;
`;

const StyledParagraph = styled(Paragraph)`
  color: inherit;
`;

const StyledLink = styled(Link)`
  font-size: 15px;
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  color: inherit;
  letter-spacing: 2px;
`;

const ContentInfoBox = ({ colorTheme, content }) => {
  return (
    <StyledWrapper colorTheme={colorTheme}>
      <StyledTitle>{content.heading}</StyledTitle>
      <StyledParagraph>
        {content.size} sq.m {content.location}
      </StyledParagraph>
      <StyledLink to={content.url}>Open case &#10148;</StyledLink>
    </StyledWrapper>
  );
};

export default ContentInfoBox;
