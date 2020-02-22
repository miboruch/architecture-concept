import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Paragraph from '../../atoms/Paragraph/Paragraph';
import { graphql, Link, useStaticQuery } from 'gatsby';

const StyledFooter = styled.footer`
  width: 100%;
  height: 350px;
  background: #2d2d2d;
  position: relative;
  padding: 2rem;
  color: #e2e2e2;
`;

const StyledParagraph = styled(Paragraph)`
  color: inherit;
`;

const StyledTitle = styled(Paragraph)`
  font-family: ${({ theme }) => theme.font.family.avanti};
  font-size: 28px;
  font-weight: bold;
  color: inherit;
  margin-bottom: 2rem;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 50% 50%;
  margin-top: 3rem;
`;

const GridItems = styled(Link)`
  font-size: 16px;
  color: inherit;
  display: flex;
  justify-content: center;
  letter-spacing: 2px;
  padding: 2rem;
`;

const BottomFooterWrapper = styled.div`
  position: absolute;
  width: 100%;
  bottom: 0;
  left: 0;
  padding: 2rem;
  background: transparent;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledSpan = styled.span`
  color: #a1a1a1;
  margin-right: 1rem;
`;

const Footer = () => {
  const {
    architecture: { contents }
  } = useStaticQuery(graphql`
    query {
      architecture {
        contents {
          heading
          url
        }
      }
    }
  `);

  return (
    <StyledFooter>
      <StyledTitle>Contact with us</StyledTitle>
      <StyledParagraph>
        <strong>Phone:</strong> +1 281 288 9018
      </StyledParagraph>
      <StyledParagraph>
        <strong>Email:</strong> lorem@gmail.com
      </StyledParagraph>
      <GridContainer>
        {contents.map(item => (
          <GridItems to={item.url} key={item.heading}>
            {item.heading}
          </GridItems>
        ))}
      </GridContainer>
      <BottomFooterWrapper>
        <StyledParagraph small='true'>2020</StyledParagraph>
        <StyledParagraph small='true'>
          <StyledSpan>MICHAL</StyledSpan>BORUCH
        </StyledParagraph>
      </BottomFooterWrapper>
    </StyledFooter>
  );
};

Footer.propTypes = {
  colorTheme: PropTypes.oneOf(['light', 'dark'])
};

export default Footer;
