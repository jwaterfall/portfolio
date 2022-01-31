import { FC } from 'react';
import Logo from '../../elements/Logo';
import NavLink from '../../elements/NavLink';

import { Container, Nav, NavItem } from './styles';

const Header: FC = () => (
  <Container>
    <Logo variant="small" />
    <Nav>
      <NavLink href="/#about">
        <NavItem>about</NavItem>
      </NavLink>
      <NavLink href="/#experience">
        <NavItem>experience</NavItem>
      </NavLink>
      <NavLink href="/#projects">
        <NavItem>projects</NavItem>
      </NavLink>
      <NavLink href="/#contact">
        <NavItem>contact</NavItem>
      </NavLink>
      <NavLink href="/blog">
        <NavItem>blog</NavItem>
      </NavLink>
    </Nav>
  </Container>
);

export default Header;
