import React from 'react';
import styled from 'styled-components';

const StyledRowBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

const StyledLink = styled.a`
  text-decoration: none;
  color: ${({ colorTheme }) => (colorTheme === 'dark' ? '#fff' : '#000')};
  letter-spacing: 2px;
  margin: 0;
  padding: 2rem;
  font-size: ${({ theme }) => theme.font.size.s};
`;

const SocialMediaLinks = ({ colorTheme }) => {
  return (
    <StyledRowBox>
      <StyledLink
        href='https://github.com/miboruch'
        target='_blank'
        rel='noopener noreferrer'
        colorTheme={colorTheme}
      >
        Github
      </StyledLink>
      <StyledLink
        href='https://www.linkedin.com/in/michal-boruch/'
        target='_blank'
        rel='noopener noreferrer'
        colorTheme={colorTheme}
      >
        Linkedin
      </StyledLink>
    </StyledRowBox>
  );
};

export default SocialMediaLinks;
