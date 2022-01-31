import Link from 'next/link';
import { FC } from 'react';

import withLayout from '../components/HOC/withLayout';

const NotFoundPage: FC = () => (
  <div>
    <h2>404</h2>
    <h4>Page not found...</h4>
    <Link href="/">Homepage</Link>
  </div>
);

export default withLayout(NotFoundPage);
