import styled from 'styled-components';

import { SectionVariant } from '.';

export const Container = styled.div<{ variant: SectionVariant }>`
  min-height: 100vh;
  max-width: ${(props) =>
    props.variant === 'secondary' ? '62.5rem' : '78.125rem'};
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  min-height: 100vh;
  padding: 6.25rem 0;
  margin: 0 auto;
  @media (max-width: 768px) {
    padding: 4rem 0;
  }
  @media (max-width: 576px) {
    padding: 2.5rem 0;
  }
  &:first-child {
    padding-top: 6.25rem;
  }
`;
