import styled from 'styled-components';

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 2rem;
  position: relative;
  z-index: 12;
  color: ${(props) => props.theme.textSecondary};
  @media (max-width: 768px) {
    box-shadow: 0 1rem 1.75rem -0.75rem #00000080;
    width: 100%;
    position: absolute;
    top: 99%;
    left: 0;
    flex-direction: column;
    align-items: stretch;
    padding: 1rem 2rem;
    background: ${(props) => props.theme.foreground};
  }
  @media (max-width: 576px) {
    padding: 1rem;
  }
`;

export const Container = styled.div<{
  isScrolledToTop: boolean;
  hamburgerVisibility: boolean;
}>`
  width: 100%;
  height: ${(props) => (props.isScrolledToTop ? '6.25rem' : '5rem')};
  padding: 0 3.25rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  z-index: 11;
  transition: height 150ms;
  ${(props) =>
    !props.isScrolledToTop &&
    `box-shadow: 0 0.5rem 1.75rem -0.75rem #00000080;
  background: ${props.theme.foreground};
  `}
  &>svg {
    width: 2rem;
    height: 2rem;
    display: none;
    color: ${(props) => props.theme.textSecondary};
    &:hover {
      color: ${(props) => props.theme.text};
    }
    cursor: pointer;
    @media (max-width: 768px) {
      display: block;
    }
  }
  @media (max-width: 768px) {
    padding: 0 2rem;
    ${(props) =>
      props.hamburgerVisibility && `background: ${props.theme.foreground};`}
  }
  @media (max-width: 576px) {
    padding: 0 1rem;
  }
  & > ${Nav} {
    @media (max-width: 768px) {
      opacity: ${(props) => (props.hamburgerVisibility ? '1' : '0')};
    }
  }
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
