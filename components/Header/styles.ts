import styled from 'styled-components';

export const Container = styled.div<{ isScrolledToTop: boolean }>`
  width: 100%;
  height: ${(props) => (props.isScrolledToTop ? '6.25rem' : '5rem')};
  padding: 0 3.25rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  z-index: 11;
  background: ${(props) => props.theme.background};
  transition: ${(props) => props.theme.transition};
  ${(props) =>
    !props.isScrolledToTop &&
    'box-shadow: 0 0.5rem 1.75rem -0.75rem #00000080;'}
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 2rem;
  position: relative;
  z-index: 12;
  color: ${(props) => props.theme.textSecondary};
`;

export const NavItem = styled.div`
  font-family: ${(props) => props.theme.fontFamilySecondary};
  font-size: ${(props) => props.theme.fontSizeSm};
  font-weight: ${(props) => props.theme.fontWeightMedium};
  transition: ${(props) => props.theme.transition};
  color: ${(props) => props.theme.textSecondary};
  cursor: pointer;
  text-transform: capitalize;
  &:hover {
    color: ${(props) => props.theme.primary};
    transform: translateY(-0.1rem);
  }
  &::before {
    content: '//';
    margin-right: 0.25rem;
    color: ${(props) => props.theme.primary};
  }
  &.active {
    color: ${(props) => props.theme.text};
  }
`;
