import { FC } from 'react';

import useIsScrolledToTop from '../../hooks/useIsScrolledToTop';
import Animation from '../elements/Animation';
import Button from '../elements/Button';
import Logo from '../elements/Logo';
import NavLink from '../elements/NavLink';
import { Container, Nav, NavItem } from './styles';

const Header: FC = () => {
  const isScrolledToTop = useIsScrolledToTop();

  return (
    <Container isScrolledToTop={isScrolledToTop}>
      <NavLink href="/#home">
        <Logo size="medium" />
      </NavLink>
      <Nav>
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
        <Animation delay={300}>
          <NavLink href="/#contact">
            <NavItem>contact</NavItem>
          </NavLink>
        </Animation>
        <Animation delay={400}>
          <Button size="sm">Resume</Button>
        </Animation>
      </Nav>
    </Container>
  );
};

export default Header;
