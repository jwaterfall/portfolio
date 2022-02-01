import { FC } from 'react';

import withLayout from '../components/HOC/withLayout';
import About from '../components/modules/About';
import Banner from '../components/modules/Banner';
import Experience from '../components/modules/Experience';

const IndexPage: FC = () => (
  <>
    <Banner />
    <About />
    <Experience />
  </>
);

export default withLayout(IndexPage);
