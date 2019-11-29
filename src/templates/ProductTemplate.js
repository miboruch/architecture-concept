import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';

const StyledWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background: #1c1c1c;
`;

const ProductTemplate = ({ image, content }) => {
  return (
    <StyledWrapper>
      <Img fluid={image.image1.childImageSharp.fluid} />
      <h1>{content.heading}</h1>
    </StyledWrapper>
  );
};

export default ProductTemplate;
