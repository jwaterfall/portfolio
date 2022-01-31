import { FC } from 'react';

import { Primary, Secondary } from './styles';

export type ColorVariant = 'primary' | 'secondary';

export interface ColorProps {
  variant?: ColorVariant;
}

const Color: FC<ColorProps> = ({ variant = 'primary', ...props }) => {
  switch (variant) {
    case 'primary':
      return <Primary {...props} />;
    case 'secondary':
      return <Secondary {...props} />;
  }
};

export default Color;
