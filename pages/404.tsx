import { FC } from 'react';

import Layout from '../components/Layout';
import { Flexbox } from '../components/elements/Box';
import Button from '../components/elements/Button';
import ButtonContainer from '../components/elements/ButtonContainer';
import NavLink from '../components/elements/NavLink';
import Section from '../components/elements/Section';
import Typography from '../components/elements/Typography';

const NotFoundPage: FC = () => (
  <Layout>
    <Section hash="404">
      <Flexbox direction="column" alignItems="center" width="100%">
        <Typography variant="h1">404</Typography>
        <Typography>Page not found...</Typography>
        <ButtonContainer>
          <NavLink href="/">
            <Button isFullWidth>Return to homepage</Button>
          </NavLink>
        </ButtonContainer>
      </Flexbox>
    </Section>
  </Layout>
);

export default NotFoundPage;
