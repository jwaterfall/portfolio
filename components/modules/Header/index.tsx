import { FC } from 'react';
import Button from '../../elements/Button';
import Logo from '../../elements/Logo';
import NavLink from '../../elements/NavLink';

import { Container, Nav, NavItem } from './styles';

const Header: FC = () => (
  <Container>
    <Logo size="small" />
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
      <Button size="sm">Resume</Button>
    </Nav>
  </Container>
);

export default Header;
