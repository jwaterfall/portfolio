import { FC } from 'react';
import Layout from '../components/Layout';

import About from '../components/sections/About';
import Banner from '../components/sections/Banner';
import Experience from '../components/sections/Experience';

const IndexPage: FC = () => (
  <Layout>
    <Banner />
    <About />
    <Experience />
  </Layout>
);

export default IndexPage;
