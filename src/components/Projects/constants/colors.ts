export const colors = ['blue', 'pink', 'yellow'] as const;
export type Color = (typeof colors)[number];

export const colorClasses = {
  blue: {
    bg: 'hover:bg-blue',
    text: 'text-blue',
  },
  pink: {
    bg: 'hover:bg-pink',
    text: 'text-pink',
  },
  yellow: {
    bg: 'hover:bg-yellow',
    text: 'text-yellow',
  },
} as const;

export const getColorForIndex = (index: number, seed: number): Color => {
  return colors[(seed + index) % colors.length];
};
