import { FC } from 'react';

import withLayout from '../components/HOC/withLayout';
import Banner from '../components/modules/Banner';

const IndexPage: FC = () => (
  <>
    <Banner />
  </>
);

export default withLayout(IndexPage);
