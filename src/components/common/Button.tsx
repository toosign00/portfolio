import { motion } from 'framer-motion';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  size?: 'sm' | 'md' | 'lg' | { base: 'sm' | 'md' | 'lg'; md: 'sm' | 'md' | 'lg' };
  variant?: 'primary' | 'secondary';
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => void;
  isActive?: boolean;
  type?: 'button' | 'submit' | 'reset';
  border?: boolean;
  download?: string | boolean;
}

export const Button = ({
  children,
  href,
  size = 'md',
  variant = 'primary',
  className = '',
  onClick,
  isActive = false,
  type = 'button',
  border = true,
  download,
}: ButtonProps) => {
  const baseStyles =
    'flex item-center justify-center text-center relative cursor-pointer overflow-hidden rounded-lg backdrop-blur-md transition-all duration-300';

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
  };

  if (href) {
    // download가 있으면 새 탭에서 열지 않음
    const isDownload = !!download;

    return (
      <a
        href={href}
        {...(!isDownload && { target: '_blank', rel: 'noopener noreferrer' })}
        {...(download && { download: typeof download === 'string' ? download : '' })}
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
      </a>
    );
  }

  return (
    <button type={type} {...commonProps}>
      <span className="relative z-10">{children}</span>
      {variant === 'primary' && (
        <motion.div
          layoutId={isActive ? 'activeFilter' : undefined}
          className="from-blue/10 to-pink/10 absolute inset-0 bg-gradient-to-r"
          transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
        />
      )}
    </button>
  );
};
