import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import type * as React from 'react';

import { cn } from '@/utils/cnUtils';

const buttonVariants = cva(
  "focus-ring inline-flex shrink-0 cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium text-sm outline-none transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary: 'focus-ring-primary bg-blue font-semibold text-black hover:opacity-80',
        secondary: 'border border-white/10 bg-white/5 text-gray hover:bg-white/10 hover:text-white',
        shine:
          'border border-blue/50 bg-blue/20 text-blue shadow-blue/25 shadow-lg hover:bg-blue/30',
      },
      size: {
        sm: 'rounded-md px-3 py-1.5 text-sm',
        md: 'rounded-md px-4 py-2 text-base',
        lg: 'rounded-xl px-5 py-2.5 text-lg',
      },
    },
    defaultVariants: {
      variant: 'secondary',
      size: 'md',
    },
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      data-slot='button'
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
