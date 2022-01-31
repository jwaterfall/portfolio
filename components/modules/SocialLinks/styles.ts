import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  position: fixed;
  top: 0;
  right: 2rem;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const SocialLink = styled.a`
  transition: ${(props) => props.theme.transition};
  cursor: pointer;
  color: ${(props) => props.theme.text};
  & > svg {
    width: 3rem;
    height: 3rem;
  }
  &:hover {
    color: ${(props) => props.theme.primary};
    transform: translateY(-0.25rem);
  }
`;
