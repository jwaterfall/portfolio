import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  position: fixed;
  top: 0;
  right: 2rem;
  z-index: 14;
  display: flex;
  align-items: center;
  pointer-events: none;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const SocialLink = styled.a`
  transition: ${(props) => props.theme.transition};
  cursor: pointer;
  color: ${(props) => props.theme.text};
  pointer-events: all;
  & > svg {
    width: 3rem;
    height: 3rem;
  }
  &:hover {
    color: ${(props) => props.theme.primary};
    transform: translateY(-0.2rem);
  }
`;
