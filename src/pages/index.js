import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import Layout from '../components/Layout';
import Image from '../components/image';
import SEO from '../components/SEO';

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
