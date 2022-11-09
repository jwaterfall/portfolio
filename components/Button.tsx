import { FC, HTMLAttributes } from "react";

type ButtonVariant = "primary" | "secondary";
type ButtonSize = "md" | "lg";

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

const getVariantStyles = (variant: ButtonVariant) => {
  switch (variant) {
    case "primary":
      return "border-primary hover:bg-buttonHoverPrimary";
    case "secondary":
      return "border-secondary hover:bg-buttonHoverSecondary";
  }
};

const getSizeStyles = (size: ButtonSize) => {
  switch (size) {
    case "md":
      return "px-4 py-2";
    case "lg":
      return "px-6 py-3";
  }
};

const Button: FC<ButtonProps> = ({ variant = "primary", size = "md", children, className, ...props }) => (
  <button
    className={`border text-center text-text transition-colors duration-200 rounded font-code text-sm ${getVariantStyles(variant)} ${getSizeStyles(
      size
    )} ${className}`}
    {...props}
  >
    {children}
  </button>
);

export default Button;
