import React from 'react';
import { Link } from 'gatsby';
import ProductTemplate from '../templates/ProductTemplate';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

const SecondPage = ({ data }) => {
  const {
    content: { contents }
  } = data;
  return (
    <Layout>
      <SEO title='Page two' />
      <ProductTemplate content={contents[0]} image={data} />
    </Layout>
  );
};

export const query = graphql`
  query {
    image1: file(name: { regex: "/slider1/" }) {
      ...sliderImage
    }
    content: architecture {
      contents(where: { heading: "Arcade" }) {
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

export default SecondPage;
