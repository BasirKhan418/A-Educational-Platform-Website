import { cn } from '@/lib/utils';
import { cva } from 'class-variance-authority'
import React from 'react'

const circleVariants = cva(
    "rounded-full min-h-[18px] min-w-[18px]", {
        variants: {
            variant: {
                primary: "bg-primary",
                white: "bg-white",
            }, 
            size: {
                sm: 'w-2 h-2',
                md: 'w-4 h-4',
                lg: 'w-6 h-6',
                xl: 'w-8 h-8',
            }
        },
        defaultVariants: {
            variant: "primary",
            size: "md",
        }
    }
)

interface CircleProps {
  className?: string
  variant?: 'primary' | 'white'
  size?: 'sm' | 'md' | 'lg' | 'xl'
}

const Circle = ({
  className,
  variant,
  size
}: CircleProps) => {
  return (
    <div className={cn(circleVariants({ variant, size, className }))}></div>
  );
};

Circle.displayName = 'Circle'

export { Circle, circleVariants }
