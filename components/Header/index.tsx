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
        <a
          href="/CV-Jack-Waterfall-East-Midlands.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button size="sm">Resume</Button>
        </a>
      </Nav>
    </Container>
  );
};

export default Header;
