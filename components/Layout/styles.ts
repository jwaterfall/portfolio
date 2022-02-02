import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
`;

export const Page = styled.div`
  overflow-x: hidden;
  overflow-y: auto;
`;

export const Content = styled.main`
  padding: 0 9.375rem;
  margin: 0 auto;
  width: 100%;
  max-width: 100rem;
  min-height: 100vh;
  @media (max-width: 1080px) {
    padding: 0px 100px;
  }
  @media (max-width: 768px) {
    padding: 0px 50px;
  }
  @media (max-width: 480px) {
    padding: 0px 25px;
  }
`;
