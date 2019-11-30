import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Paragraph from '../Paragraph/Paragraph';

const StyledFooter = styled.footer`
  width: 100%;
  background: transparent;
  position: absolute;
  bottom: 3rem;
  left: 1rem;
`;

const StyledParagraph = styled(Paragraph)`
  color: ${({ color }) => (color ? '#000' : '#fff')};
`;

const Footer = ({ color }) => {
  return (
    <StyledFooter>
      <StyledParagraph small='true' color={color}>
        michalboruch
      </StyledParagraph>
    </StyledFooter>
  );
};

Footer.propTypes = {
  color: PropTypes.string
};

export default Footer;
