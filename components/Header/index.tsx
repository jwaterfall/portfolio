import { FC } from 'react';

import useIsScrolledToTop from '../../hooks/useIsScrolledToTop';
import Animation from '../elements/Animation';
import Logo from '../elements/Logo';
import NavLink from '../elements/NavLink';
import HamburgerMenu from './HamburgerMenu';
import { Container, Nav, NavItem } from './styles';

const Header: FC = () => {
  const isScrolledToTop = useIsScrolledToTop();

  return (
    <Container>
      <NavLink href="/#home">
        <Logo size="medium" />
      </NavLink>
      <Nav isScrolledToTop={isScrolledToTop}>
        <Animation>
          <NavLink href="/#about">
            <NavItem>about</NavItem>
          </NavLink>
        </Animation>
        <Animation delay={100}>
          <NavLink href="/#experience">
            <NavItem>experience</NavItem>
          </NavLink>
        </Animation>
        <Animation delay={200}>
          <NavLink href="/#projects">
            <NavItem>projects</NavItem>
          </NavLink>
        </Animation>
      </Nav>
      <HamburgerMenu />
    </Container>
  );
};

export default Header;
