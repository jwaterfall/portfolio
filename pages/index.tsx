import { FC } from 'react';

import withLayout from '../components/HOC/withLayout';
import About from '../components/modules/About';
import Banner from '../components/modules/Banner';

const IndexPage: FC = () => (
  <>
    <Banner />
    <About />
  </>
);

export default withLayout(IndexPage);
