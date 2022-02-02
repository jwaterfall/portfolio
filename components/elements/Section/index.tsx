import { FC } from 'react';
import { Container } from './styles';

export type SectionVariant = 'primary' | 'secondary';

export interface SectionProps {
  hash: string;
  variant?: SectionVariant;
}

const Section: FC<SectionProps> = ({ hash, variant = 'primary', children }) => (
  <Container id={hash} variant={variant}>
    {children}
  </Container>
);

export default Section;
