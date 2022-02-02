import { FC } from 'react';

import Header from '../Header';
import SocialLinks from '../SocialLinks';
import { Container, Content, Page } from './styles';

const Layout: FC = ({ children }) => (
  <Container>
    <Header />
    <SocialLinks />
    <Page>
      <Content>{children}</Content>
    </Page>
  </Container>
);

export default Layout;
