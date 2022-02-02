import { FC, useEffect, useState } from 'react';

import { useInView } from 'react-intersection-observer';
import { StyledAnimation } from './styles';

export type AnimationVariant = 'top' | 'bottom' | 'left' | 'right';

export interface AnimationProps {
  variant?: AnimationVariant;
  delay?: number;
  duration?: number;
}

const Animation: FC<AnimationProps> = ({
  children,
  variant = 'top',
  delay = 0,
  duration = 250,
}) => {
  const [show, setShow] = useState(false);
  const { ref, inView } = useInView({ threshold: 0.5 });

  useEffect(() => {
    if (inView) setTimeout(() => setShow(true), delay);
  }, [inView, delay]);

  return (
    <StyledAnimation
      ref={ref}
      variant={variant}
      show={show}
      duration={duration}
    >
      {children}
    </StyledAnimation>
  );
};

export default Animation;
