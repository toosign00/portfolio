import { type Color, colors } from '@/constants/projectColors.constants';

export const getColorForIndex = (index: number, seed: number): Color => {
  return colors[(seed + index) % colors.length];
};
