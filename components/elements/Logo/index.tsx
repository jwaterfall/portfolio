import { FC } from 'react';

import Color from '../Color';
import Typography from '../Typography';

export type LogoSize = 'small' | 'medium' | 'large';

export interface LogoProps {
  size?: LogoSize;
}

const Logo: FC<LogoProps> = ({ size = 'medium' }) => {
  const getTypographyVariant = () => {
    switch (size) {
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
      <Color color="secondary">&#60;</Color>
      Jack-Waterfall
      <Color color="secondary">/&#62;</Color>
    </Typography>
  );
};

export default Logo;
