export interface NavItem {
  label: string;
  sectionIds: string[];
}

export const navItems: NavItem[] = [
  { label: '소개', sectionIds: ['intro', 'features'] },
  { label: '기술', sectionIds: ['skills'] },
  { label: '포트폴리오', sectionIds: ['portfolio'] },
  { label: '교육', sectionIds: ['education'] },
];
