import React from 'react';
import { graphql } from 'gatsby';
import ApartmentTemplate from '../templates/ApartmentTemplate';
import SEO from '../components/SEO';

const FacadePage = ({ data }) => {
  const {
    content: { contents }
  } = data;
  return (
    <>
      <SEO title='Facade design' />
      <ApartmentTemplate content={contents[0]} image={data} />
    </>
  );
};

export const query = graphql`
  query {
    image1: file(name: { regex: "/slider4/" }) {
      ...sliderImage
    }
    content: architecture {
      contents(where: { heading: "Scale" }) {
        id
        location
        projectId
        index
        description
        heading
        size
        subheading
      }
    }
  }
`;

export default FacadePage;
