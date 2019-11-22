import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { graphql, Link } from 'gatsby';
import MainSlider from '../components/MainSlider/MainSlider';
import Layout from '../components/Layout';
import Image from '../components/image';
import SEO from '../components/SEO';
import CurrentSlideContextProvider from '../providers/CurrentSlideContext';

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <CurrentSlideContextProvider>
        <SEO title='Home' />
        <MainSlider images={data} />
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
  }
`;

export default IndexPage;
