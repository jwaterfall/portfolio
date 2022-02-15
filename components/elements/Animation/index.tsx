import { FC, useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

import { StyledAnimation } from './styles';

export type AnimationVariant = 'top' | 'bottom' | 'left' | 'right' | 'fade';

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
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) setTimeout(() => setShow(true), delay);
  }, [inView, delay]);

  return (
    <div ref={ref}>
      <StyledAnimation variant={variant} show={show} duration={duration}>
        {children}
      </StyledAnimation>
    </div>
  );
};

export default Animation;
