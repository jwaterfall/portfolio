import styled from 'styled-components';

export const List = styled.ul<{ columns?: number; maxWidth?: string }>`
  margin: 0;
  padding: 0;
  display: grid;
  gap: 0.5rem;
  grid-template-columns: repeat(
    ${(props) => props.columns ?? 1},
    ${(props) => (props.maxWidth ? `minmax(8rem, ${props.maxWidth})` : '1fr')}
  );
`;

export const ListItem = styled.ul`
  padding: 0;
  display: flex;
  gap: 0.25rem;
  font-family: ${(props) => props.theme.fontFamilySecondary};
  font-size: ${(props) => props.theme.fontSizeSm};
  color: ${(props) => props.theme.primary};
  &::before {
    padding: 0.175rem;
    content: '•';
    color: ${(props) => props.theme.text};
    line-height: 12px;
  }
`;
