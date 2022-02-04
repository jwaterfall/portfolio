import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 4fr 2fr;
  gap: 3rem;
  @media (max-width: 1080px) {
    grid-template-columns: 1fr;
  }
`;

export const Image = styled.img`
  object-fit: cover;
  width: 100%;
  max-width: 25rem;
  margin: 0 auto;
  border-radius: 50%;
  @media (max-width: 1080px) {
    display: none;
  }
`;
