import styled from 'styled-components';

export const Container = styled.div`
  border-radius: 0.25rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
`;

export const Image = styled.img`
  width: 100%;
  aspect-ratio: 5 / 3;
  object-fit: cover;
  box-shadow: 0 0.5rem 1.75rem -0.75rem #00000080;
`;

export const RightSection = styled.div`
  padding: 2rem;
`;
