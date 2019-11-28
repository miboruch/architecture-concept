import React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/SEO';

const SecondPage = ({data}) => {
  console.log(data);
  return (
    <Layout>
      <SEO title='Page two' />
      <h1>Hi from the second page</h1>
      <p>Welcome to page 2</p>
      <Link to='/'>Go back to the homepage</Link>
    </Layout>
  );
};

export const query = graphql`
  query {
    architecture {
      contents {
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
