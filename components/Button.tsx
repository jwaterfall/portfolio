import { FC, HTMLAttributes } from "react";

const Button: FC<HTMLAttributes<HTMLButtonElement>> = ({ children, ...props }) => (
  <button
    className="border-secondary border hover:bg-buttonHover text-center text-text text-sm transition-colors duration-200 px-4 py-2 rounded font-code"
    {...props}
  >
    {children}
  </button>
);

export default Button;
