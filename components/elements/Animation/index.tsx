import { FC, useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

import { StyledAnimation } from './styles';

export type AnimationVariant = 'top' | 'bottom' | 'left' | 'right' | 'fade';

export interface AnimationProps {
  variant?: AnimationVariant;
  delay?: number;
  duration?: number;
  width?: string;
}

const Animation: FC<AnimationProps> = ({
  variant = 'top',
  delay = 0,
  duration = 250,
  ...props
}) => {
  const [show, setShow] = useState(false);
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) setTimeout(() => setShow(true), delay);
  }, [inView, delay]);

  return (
    <StyledAnimation
      ref={ref}
      variant={variant}
      show={show}
      duration={duration}
      {...props}
    />
  );
};

export default Animation;
