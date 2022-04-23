import { FC, useState } from 'react';

import Animation from '../elements/Animation';
import NavLink from '../elements/NavLink';
import {
  HamburgerBackground,
  HamburgerContainer,
  HamburgerIcon,
  HamburgerNav,
  HamburgerNavItem,
} from './styles';

const HamburgerMenu: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      <HamburgerContainer isOpen={isOpen}>
        {isOpen && (
          <HamburgerNav>
            <Animation>
              <NavLink href="/#about" onClick={handleClick}>
                <HamburgerNavItem>about</HamburgerNavItem>
              </NavLink>
            </Animation>
            <Animation delay={100}>
              <NavLink href="/#experience" onClick={handleClick}>
                <HamburgerNavItem>experience</HamburgerNavItem>
              </NavLink>
            </Animation>
            <Animation delay={200}>
              <NavLink href="/#projects" onClick={handleClick}>
                <HamburgerNavItem>projects</HamburgerNavItem>
              </NavLink>
            </Animation>
          </HamburgerNav>
        )}

        <HamburgerBackground />
      </HamburgerContainer>

      <HamburgerIcon onClick={() => setIsOpen((old) => !old)} isOpen={isOpen}>
        <span></span>
        <span></span>
        <span></span>
      </HamburgerIcon>
    </>
  );
};

export default HamburgerMenu;
