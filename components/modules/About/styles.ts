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

export const TechnologiesList = styled.ul`
  margin: 0;
  padding: 0;
  display: grid;
  gap: 0.25rem;
  grid-template-columns: repeat(2, minmax(8rem, 12.5rem));
`;

export const TechnologiesListItem = styled.ul`
  padding: 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-family: ${(props) => props.theme.fontFamilySecondary};
  font-size: ${(props) => props.theme.fontSizeSm};
  color: ${(props) => props.theme.primary};
  &::before {
    content: '•';
    color: ${(props) => props.theme.text};
    line-height: 12px;
  }
`;
