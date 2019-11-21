import React from 'react';
import styled from 'styled-components';
import BackgroundImage from 'gatsby-background-image';

const StyledBackground = styled(BackgroundImage)`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SliderContent = ({image}) => {
  return (
    <StyledBackground fluid={image.childImageSharp.fluid}>
      <p>hello</p>
    </StyledBackground>
  );
};

export default SliderContent;
