import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { graphql, Link } from 'gatsby';
import MainSlider from '../components/MainSlider/MainSlider';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import CurrentSlideContextProvider from '../providers/CurrentSlideContext';
import Loader from '../components/Loader/Loader';
import { useLoadingEffect } from '../utils/customHooks';

const StyledBox = styled.div`
  width: 100%;
  height: 50vh;
  background-color: ${({ theme }) => theme.color.backgroundLight};
`;

const IndexPage = ({ data }) => {
  const isLoading = useLoadingEffect();

  const { image1, image2, image3, image4 } = data;
  const {
    content: { contents }
  } = data;

  return (
    <Layout colorTheme='dark'>
      <CurrentSlideContextProvider>
        <SEO title='Home' />
        <Loader isLoading={isLoading} />
        <MainSlider
          images={[image1, image2, image3, image4]}
          content={contents}
        />
        <StyledBox />
      </CurrentSlideContextProvider>
    </Layout>
  );
};

export const sliderImage = graphql`
  fragment sliderImage on File {
    childImageSharp {
      fluid(maxWidth: 2000, quality: 100) {
        ...GatsbyImageSharpFluid_noBase64
      }
    }
  }
`;

export const query = graphql`
  query {
    image1: file(name: { regex: "/slider1/" }) {
      ...sliderImage
    }
    image2: file(name: { regex: "/slider2/" }) {
      ...sliderImage
    }
    image3: file(name: { regex: "/slider3/" }) {
      ...sliderImage
    }
    image4: file(name: { regex: "/slider4/" }) {
      ...sliderImage
    }
    content: architecture {
      contents {
        heading
        subheading
      }
    }
  }
`;

export default IndexPage;
