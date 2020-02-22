import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { graphql, Link } from 'gatsby';
import MainSlider from '../components/templates/MainSlider/MainSlider';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import CurrentSlideContextProvider from '../providers/CurrentSlideContext';
import Loader from '../components/molecules/Loader/Loader';
import { useLoadingEffect } from '../utils/customHooks';
import MainPageContent from '../components/molecules/MainPageContent/MainPageContent';
import PhotoSlider from '../components/molecules/PhotoSlider/PhotoSlider';
import ContentInfoBox from '../components/molecules/ContentInfoBox/ContentInfoBox';

const StyledWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
`;

const BoxesWrapper = styled.section`
  padding: 1rem;
  margin-bottom: 1rem;
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
        <StyledWrapper>
          <MainSlider
            images={[image1, image2, image3, image4]}
            content={contents}
          />
          <MainPageContent />
          <PhotoSlider
            images={[image1, image2, image3, image4]}
            content={contents}
          />
        </StyledWrapper>
        <BoxesWrapper>
          <ContentInfoBox colorTheme='dark' content={contents[0]} />
          <ContentInfoBox colorTheme='light' content={contents[1]} />
        </BoxesWrapper>
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
        url
        location
        size
      }
    }
  }
`;

export default IndexPage;
