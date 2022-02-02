import { useRouter } from 'next/router';
import { FC, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { Container } from './styles';

export type SectionVariant = 'primary' | 'secondary';

export interface SectionProps {
  hash: string;
  variant?: SectionVariant;
}

const Section: FC<SectionProps> = ({ hash, variant = 'primary', children }) => {
  const { ref, inView } = useInView({ threshold: 0.5 });
  const { push } = useRouter();

  useEffect(() => {
    if (inView) push(`/#${hash}`);
  }, [inView, hash, push]);

  return (
    <Container id={hash} variant={variant} ref={ref}>
      {children}
    </Container>
  );
};

export default Section;
