import { FC } from 'react';

import Color from '../Color';
import Typography from '../Typography';

export type LogoVariant = 'small' | 'medium' | 'large';

export interface LogoProps {
  variant?: LogoVariant;
}

const Logo: FC<LogoProps> = ({ variant = 'medium' }) => {
  const getTypographyVariant = () => {
    switch (variant) {
      case 'small':
        return 'h4';
      case 'medium':
        return 'h3';
      case 'large':
        return 'h2';
    }
  };

  return (
    <Typography
      variant={getTypographyVariant()}
      align="center"
      font="secondary"
    >
      <Color variant="secondary">&#60;</Color>
      Jack-Waterfall
      <Color variant="secondary">/&#62;</Color>
    </Typography>
  );
};

export default Logo;
