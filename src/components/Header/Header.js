import { Link } from 'gatsby';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import React from 'react';

const StyledHeader = styled.header`
  width: 100%;
  background: transparent;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1000;
`;

const StyledRowBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

const StyledLink = styled.a`
  text-decoration: none;
  color: #fff;
  letter-spacing: 2px;
  margin: 0;
  padding: 2rem;
  font-size: ${({ theme }) => theme.font.size.s};
`;

const Header = () => {
  return (
    <StyledHeader>
      <StyledRowBox>
        <StyledLink
          href='https://github.com/miboruch'
          target='_blank'
          rel='noopener noreferrer'
        >
          .Github
        </StyledLink>
        <StyledLink
          href='https://www.linkedin.com/in/michal-boruch/'
          target='_blank'
          rel='noopener noreferrer'
        >
          .Linkedin
        </StyledLink>
      </StyledRowBox>
    </StyledHeader>
  );
};

export default Header;
