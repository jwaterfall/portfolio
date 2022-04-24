import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  gap: 3rem;
  @media (max-width: 1080px) {
    grid-template-columns: 1fr;
  }
`;

export const ImageContainer = styled.div`
  width: 80%;
  max-width: 25rem;
  margin: 2rem auto;
  height: min-content;
  transform: rotate(4deg);
  aspect-ratio: 4/5;
  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    border: 0.125rem solid ${(props) => props.theme.primary};
    border-radius: 3rem;
    transform: translateY(0.75rem) translateX(-0.5rem);
  }
`;

export const Image = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  border-radius: 3rem;
  animation: image 6s ease-in-out infinite;
  @keyframes image {
    50% {
      transform: translateY(-0.75rem) translateX(0.5rem);
    }
  }
`;
