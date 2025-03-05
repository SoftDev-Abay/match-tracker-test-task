import React from "react";
import { cn } from "@/app/utils/helpers";
import { cva, type VariantProps } from "class-variance-authority";

type CardProps = {
  padding?: "padding-small" | "padding-medium" | "padding-large";
} & React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof cardVariants>;

const cardVariants = cva("rounded-xl", {
  variants: {
    padding: {
      "padding-small": "py-3.5 px-6",
      "padding-medium": "py-5 px-8",
      "padding-large": "py-7 px-10",
    },
    background: {
      primary: "bg-card-primary",
      secondary: "bg-card-secondary",
      muted: "bg-card-muted",
      gray: "bg-custom-gray",
      none: "",
    },
    radius: {
      small: "rounded-sm",
    },
  },
  defaultVariants: {
    padding: "padding-medium",
    background: "primary",
    radius: "small",
  },
});

const Card: React.FC<CardProps> = ({
  padding,
  background,
  className,
  ...rest
}) => {
  return (
    <div
      className={cn(
        cardVariants({ padding, background, className }),
        className
      )}
      {...rest}
    >
      {rest.children}
    </div>
  );
};

export default Card;
