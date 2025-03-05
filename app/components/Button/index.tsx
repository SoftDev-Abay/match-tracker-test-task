import React from "react";
import { cn } from "../../utils/helpers";
import { cva, type VariantProps } from "class-variance-authority";

type ButtonProps = {
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>;

const buttonVariants = cva(
  "min-w-[204px] p-4 flex justify-center inline-block font-medium text-center transition duration-300 ease-in-out focus:outline-none disabled:cursor-not-allowed",
  {
    variants: {
      size: {
        sm: "px-3 py-2 text-sm rounded",
        md: "px-4 py-2 text-base rounded-md",
        lg: "px-6 py-3 text-lg rounded-lg",
      },
      color: {
        primary: "bg-danger text-white hover:bg-danger-muted",
        accent: "bg-indigo-600 text-white hover:bg-indigo-700",
        highlight: "bg-yellow-400 text-black hover:bg-yellow-500",
        muted: "bg-gray-300 text-black hover:bg-gray-400",
        success: "bg-green-600 text-white hover:bg-green-700",
        danger: "bg-red-600 text-white hover:bg-red-700",
        dark: "bg-gray-800 text-white hover:bg-gray-900",
        empty:
          "bg-transparent text-dark border border-gray-300 hover:bg-gray-50",
      },
    },
    defaultVariants: {
      size: "md",
      color: "primary",
    },
  }
);

const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  className,
  size,
  color,
  ...rest
}) => {
  return (
    <button
      onClick={onClick}
      className={cn(buttonVariants({ size, color }), className)}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
