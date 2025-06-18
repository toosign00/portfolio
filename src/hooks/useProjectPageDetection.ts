import { useLocation } from 'react-router-dom';
import type { LocationState } from '@/types/routing.type';

export function useProjectPageDetection() {
  const location = useLocation();
  const state = location.state as LocationState | null;
  const currentLocation = state?.background || location;

  return {
    isProjectPage: currentLocation.pathname.startsWith('/projects/'),
    hasBackground: !!state?.background,
    currentLocation,
  };
}
