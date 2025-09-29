import type { NavItem } from '@/types/navigation.types';

export const navItems: NavItem[] = [
  { id: 'home', label: 'navigation.home', sectionIds: ['intro', 'features'] },
  { id: 'skills', label: 'navigation.skills', sectionIds: ['skills'] },
  { id: 'projects', label: 'navigation.projects', sectionIds: ['projects'] },
  { id: 'education', label: 'navigation.education', sectionIds: ['education'] },
];
