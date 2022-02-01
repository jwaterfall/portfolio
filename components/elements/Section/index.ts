import styled from 'styled-components';

export type SectionVariant = 'primary' | 'secondary';

const Section = styled.div<{ variant?: SectionVariant }>`
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
`;

export default Section;
