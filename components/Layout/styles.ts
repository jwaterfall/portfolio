import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
`;

export const Page = styled.div`
  overflow-x: hidden;
  overflow-y: auto;
`;

export const Content = styled.main`
  width: 100%;
  min-height: 100vh;
  padding: 0 7.5rem;
  @media (max-width: 768px) {
    padding: 0 2rem;
  }
`;
