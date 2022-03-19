import styled from 'styled-components';

export const List = styled.ul<{ columns?: number; maxWidth?: string }>`
  margin: 0;
  padding: 0;
  display: grid;
  gap: 0.75rem;
  grid-template-columns: repeat(
    ${(props) => props.columns ?? 1},
    ${(props) => (props.maxWidth ? `minmax(8rem, ${props.maxWidth})` : '1fr')}
  );
  color: ${(props) => props.theme.textSecondary};
  margin-top: 1rem;
`;

export const ListItem = styled.ul`
  padding: 0;
  display: flex;
  gap: 0.25rem;
  &::before {
    padding: 0.175rem;
    content: '•';
    line-height: 12px;
  }
`;
