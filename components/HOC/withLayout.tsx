import { FC } from 'react';

import Layout from '../templates/Layout';

const withLayout = (Component: FC) => {
  const ComponentWithLayout: FC = (props) => (
    <Layout>
      <Component {...props} />
    </Layout>
  );

  return ComponentWithLayout;
};

export default withLayout;
