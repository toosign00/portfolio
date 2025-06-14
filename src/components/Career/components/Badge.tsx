import type { BadgeProps } from '@/types/skills.type';

export const Badge = ({ variant = 'outline', className = '', children, ...props }: BadgeProps) => {
  const base =
    'inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold transition border';
  const outline = 'bg-transparent border-gray-700 text-gray-300';
  const solid = 'bg-black border-black text-white';
  return (
    <span
      className={
        base + ' ' + (variant === 'outline' ? outline : solid) + (className ? ' ' + className : '')
      }
      {...props}
    >
      {children}
    </span>
  );
};
