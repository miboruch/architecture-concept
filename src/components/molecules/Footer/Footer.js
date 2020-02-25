import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { graphql, Link, useStaticQuery } from 'gatsby';
import Paragraph from '../../atoms/Paragraph/Paragraph';

const StyledFooter = styled.footer`
  width: 100%;
  height: 400px;
  background: #2d2d2d;
  position: relative;
  padding: 3rem 2rem;
  color: #e2e2e2;

  ${({ theme }) => theme.mq.standard} {
    height: 250px;
  }
`;

const StyledParagraph = styled(Paragraph)`
  color: inherit;
`;

const StyledTitle = styled(Paragraph)`
  font-family: ${({ theme }) => theme.font.family.avanti};
  font-size: 42px;
  font-weight: bold;
  width: 330px;
  color: inherit;
  margin-bottom: 2rem;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    right: -0.5rem;
    width: 25px;
    height: 50px;
    background-color: rgba(255, 255, 255, 0.2);
    transform: translateY(-50%);
    transition: all 0.45s ease;
  }

  &:hover::after {
    width: 100%;
  }
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 50% 50%;
  margin-top: 3rem;

  ${({ theme }) => theme.mq.standard} {
    margin: 0;
  }
`;

const GridItems = styled(Link)`
  font-size: 16px;
  color: inherit;
  display: flex;
  justify-content: center;
  letter-spacing: 2px;
  padding: 1rem;
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

const FlexWrapper = styled.div`
  ${({ theme }) => theme.mq.standard} {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: row;
  }
`;

const FlexItem = styled.div`
  ${({ theme }) => theme.mq.standard} {
    margin-right: 200px;
  }
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
      <FlexWrapper>
        <FlexItem>
          <StyledParagraph>
            <strong>Phone:</strong> +1 281 288 9018
          </StyledParagraph>
          <StyledParagraph>
            <strong>Email:</strong> lorem@gmail.com
          </StyledParagraph>
          <StyledParagraph>
            <strong>Address:</strong> 1373 Westfall Avenue Albuquerque
          </StyledParagraph>
        </FlexItem>
        <GridContainer>
          {contents.map(item => (
            <GridItems to={item.url} key={item.heading}>
              {item.heading}
            </GridItems>
          ))}
        </GridContainer>
      </FlexWrapper>
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
