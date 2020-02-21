import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Paragraph from '../../atoms/Paragraph/Paragraph';

const StyledFooter = styled.footer`
  width: 100%;
  background: transparent;
  position: absolute;
  bottom: 3rem;
  left: 1rem;
`;

const StyledParagraph = styled(Paragraph)`
  color: ${({ colorTheme }) => (colorTheme === 'dark' ? '#fff' : '#000')};
`;

const Footer = ({ colorTheme }) => {
  return (
    <StyledFooter>
      <StyledParagraph small='true' colorTheme={colorTheme}>
        michalboruch
      </StyledParagraph>
    </StyledFooter>
  );
};

Footer.propTypes = {
  colorTheme: PropTypes.oneOf(['light', 'dark'])
};

export default Footer;
