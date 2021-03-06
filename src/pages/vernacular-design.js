import React from 'react';
import { graphql } from 'gatsby';
import ApartmentTemplate from '../templates/ApartmentTemplate';
import SEO from '../components/SEO';

const VernacularPage = ({ data }) => {
  const {
    content: { contents }
  } = data;
  return (
    <>
      <SEO title='Modular design' />
      <ApartmentTemplate content={contents[0]} image={data} />
    </>
  );
};

export const query = graphql`
  query {
    image1: file(name: { regex: "/slider2/" }) {
      ...sliderImage
    }
    content: architecture {
      contents(where: { heading: "Parti" }) {
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

export default VernacularPage;
