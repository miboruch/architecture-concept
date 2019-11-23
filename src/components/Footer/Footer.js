import React from 'react';
import styled from 'styled-components';
import Paragraph from '../Paragraph/Paragraph';

const StyledFooter = styled.footer`
  width: 100%;
  background: transparent;
  position: absolute;
  bottom: 3rem;
  left: 1rem;
  color: #fff;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <Paragraph>michalboruch</Paragraph>
    </StyledFooter>
  );
};

export default Footer;
