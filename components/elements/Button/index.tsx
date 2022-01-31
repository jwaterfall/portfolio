import { ButtonHTMLAttributes, FC } from 'react';

import { PrimaryButton, SecondaryButton } from './styles';

export type ButtonVariant = 'primary' | 'secondary';
export type ButtonSize = 'sm' | 'md';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  m?: string;
}

const Button: FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  ...props
}) => {
  switch (variant) {
    case 'primary':
      return <PrimaryButton size={size} {...props} />;
    case 'secondary':
      return <SecondaryButton size={size} {...props} />;
  }
};

export default Button;
