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
  margin: 0 5rem;
  height: min-content;
  transform: rotate(4deg);
  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    border: 0.125rem solid ${(props) => props.theme.primary};
    border-radius: 3rem;
    transform: translateY(1rem) translateX(-1rem);
  }
`;

export const Image = styled.img`
  object-fit: cover;
  width: 100%;
  aspect-ratio: 4/5;
  max-width: 25rem;
  border-radius: 3rem;
  @media (max-width: 1080px) {
    display: none;
  }

  animation: image 6s ease-in-out infinite;
  @keyframes image {
    50% {
      transform: translateY(-1.5rem) translateX(1rem);
    }
  }
`;
