import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';

const StyledHeading = styled.h1`
  color: black;
`;

const IndexPage = () => (
  <Layout>
    <SEO title='Home' />
    <StyledHeading>hello</StyledHeading>
  </Layout>
);

export default IndexPage;
