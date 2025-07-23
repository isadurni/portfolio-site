import React from "react";
import { cn } from "@/lib/utils";

interface PulsatingButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'blue' | 'green';
  duration?: string;
}

export const PulsatingButton = React.forwardRef<
  HTMLButtonElement,
  PulsatingButtonProps
>(
  (
    {
      className,
      children,
      variant = 'blue',
      duration = "2s",
      ...props
    },
    ref,
  ) => {
    const animationClass = variant === 'green' ? 'animate-pulse-green' : 'animate-pulse-blue';
    
    return (
      <button
        ref={ref}
        className={cn(
          "relative flex cursor-pointer items-center justify-center rounded-lg bg-primary px-4 py-2 text-center text-primary-foreground",
          animationClass,
          className,
        )}
        style={{
          animationDuration: duration,
          animationTimingFunction: 'ease-out',
          animationIterationCount: 'infinite',
        }}
        {...props}
      >
        {children}
      </button>
    );
  },
);

PulsatingButton.displayName = "PulsatingButton"; 