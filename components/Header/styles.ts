import styled from 'styled-components';

export const Nav = styled.nav<{ isScrolledToTop: boolean }>`
  display: flex;
  align-items: center;
  gap: 2rem;
  position: relative;
  color: ${(props) => props.theme.textSecondary};
  transition: opacity 150ms;
  ${({ isScrolledToTop }) => !isScrolledToTop && 'opacity: 0;'}
  @media (max-width: 768px) {
    display: none;
  }
`;

export const HamburgerNav = styled.nav`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
  z-index: 12;
  color: ${(props) => props.theme.textSecondary};
  transition: opacity 150ms;
`;

export const HamburgerBackground = styled.div`
  background: ${(props) => props.theme.foreground};
  width: 100%;
  height: 100%;
  position: absolute;
  transition: all 500ms;
  z-index: -1;
`;

export const Container = styled.div`
  width: 100%;
  height: 5rem;
  padding: 0 3.25rem;
  display: flex;
  align-items: center;
  gap: 2rem;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 11;
  @media (max-width: 768px) {
    padding: 0 2rem;
  }
  @media (max-width: 576px) {
    padding: 0 1rem;
  }
  & > :first-child {
    z-index: 14;
    margin-right: auto;
  }
  & > :last-child {
    z-index: 14;
  }
`;

export const HamburgerContainer = styled.div<{
  isOpen: boolean;
}>`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 13;
  & > svg {
    width: 2rem;
    height: 2rem;
    color: ${(props) => props.theme.textSecondary};
    &:hover {
      color: ${(props) => props.theme.text};
    }
    cursor: pointer;
  }
  @media (max-width: 768px) {
    padding: 0 2rem;
    ${({ isOpen, theme }) => isOpen && `background: ${theme.foreground};`}
  }
  @media (max-width: 576px) {
    padding: 0 1rem;
  }
  & > ${HamburgerBackground} {
    ${({ isOpen }) =>
      !isOpen &&
      `
      border-bottom-left-radius: 100vw;
      transform: translate(100vw, -100vh);
    `}
  }
  ${({ isOpen }) => !isOpen && 'pointer-events: none;'}
`;

export const NavItem = styled.div`
  font-family: ${(props) => props.theme.fontFamilySecondary};
  font-size: ${(props) => props.theme.fontSizeSm};
  font-weight: ${(props) => props.theme.fontWeightRegular};
  transition: ${(props) => props.theme.transition};
  color: ${(props) => props.theme.textSecondary};
  cursor: pointer;
  &:hover {
    color: ${(props) => props.theme.primary};
    transform: translateY(-0.1rem);
  }
  &::before {
    content: '.';
    margin-right: 0.1rem;
    color: ${(props) => props.theme.primary};
  }
  &::after {
    content: '()';
    margin-left: 0.1rem;
    color: ${(props) => props.theme.primary};
  }
  &.active {
    color: ${(props) => props.theme.text};
  }
`;

export const HamburgerNavItem = styled(NavItem)`
  font-size: ${(props) => props.theme.fontSizeLg};
`;

export const HamburgerIcon = styled.button<{
  isOpen: boolean;
}>`
  background: none;
  border: none;
  padding: 0;
  width: 1.75rem;
  height: 1.5rem;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  & > span {
    display: block;
    height: 0.26rem;
    width: 100%;
    background: ${({ theme }) => theme.textSecondary};
    border-radius: 0.125rem;
    transition: all 500ms;
    transform-origin: left center;
  }
  &:hover > span {
    background: ${({ theme }) => theme.text};
  }
  ${({ isOpen }) =>
    isOpen &&
    `
      & > span:nth-child(1) {
        transform: rotate(45deg);
      }
      & > span:nth-child(2) {
        width: 0%;
        opacity: 0;
      }
      & > span:nth-child(3) {
        transform: rotate(-45deg);
      } 
    `}
`;
