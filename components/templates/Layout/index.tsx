import { FC } from 'react';

import Header from '../../modules/Header';
import SocialLinks from '../../modules/SocialLinks';
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
