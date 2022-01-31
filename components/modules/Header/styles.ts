import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 6.25rem;
  padding: 0 3.25rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  z-index: 11;
  background: ${(props) => props.theme.background};
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
  transition: ${(props) => props.theme.transition};
  color: ${(props) => props.theme.textSecondary};
  cursor: pointer;
  text-transform: capitalize;
  &:hover {
    color: ${(props) => props.theme.primary};
    transform: translateY(-0.1rem);
  }
  &::before {
    content: '<';
    margin-right: 0.2rem;
    color: ${(props) => props.theme.primary};
  }
  &::after {
    content: '/>';
    margin-left: 0.2rem;
    color: ${(props) => props.theme.primary};
  }
`;
