import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  children: React.ReactNode;
  href?: string;
  as?: React.ElementType;
  to?: string;
  size?: 'sm' | 'md' | 'lg' | { base: 'sm' | 'md' | 'lg'; md: 'sm' | 'md' | 'lg' };
  variant?: 'primary' | 'secondary';
  className?: string;
  isActive?: boolean;
  border?: boolean;
  download?: string | boolean;
}

export const Button = ({
  children,
  href,
  as,
  size = 'md',
  variant = 'primary',
  className = '',
  onClick,
  isActive = false,
  type = 'button',
  border = true,
  download,
  ...rest
}: ButtonProps) => {
  const baseStyles =
    'focus:ring-blue flex item-center justify-center text-center relative cursor-pointer overflow-hidden rounded-lg backdrop-blur-md transition-all duration-300 focus-visible:ring-2 focus:outline-none';

  const getSizeStyles = (size: ButtonProps['size']) => {
    if (typeof size === 'object') {
      return `px-3 py-1.5 text-sm md:px-4 md:py-2 md:text-base`;
    }
    const sizeStyles = {
      sm: 'px-3 py-1.5 text-sm',
      md: 'px-4 py-2 text-base',
      lg: 'px-5 py-2.5 text-lg',
    };
    return sizeStyles[size as 'sm' | 'md' | 'lg'];
  };

  const variantStyles = {
    primary: `${border ? 'border border-blue/50' : ''} bg-blue/20 text-blue shadow-blue/25 shadow-lg hover:bg-blue/30`,
    secondary: `${border ? 'border border-white/10' : ''} text-gray bg-white/5 hover:bg-white/10 hover:text-white`,
  };

  const commonProps = {
    className: `${baseStyles} ${getSizeStyles(size)} ${variantStyles[variant]} ${className}`,
    onClick,
    ...rest,
  };

  const Component = as || (href ? 'a' : 'button');

  return (
    <Component
      href={href}
      type={Component === 'button' ? type : undefined}
      {...(href && !download && Component === 'a'
        ? { target: '_blank', rel: 'noopener noreferrer' }
        : {})}
      {...(download ? { download: typeof download === 'string' ? download : '' } : {})}
      {...commonProps}
    >
      <span className="relative z-10">{children}</span>
      {variant === 'primary' && (
        <motion.div
          layoutId={isActive ? 'activeFilter' : undefined}
          className="from-blue/10 to-pink/10 absolute inset-0 bg-gradient-to-r"
          transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
        />
      )}
    </Component>
  );
};
