import type { FilterOption, SkillItem } from '../types/skills.types';

export const skills: SkillItem[] = [
  {
    name: 'HTML5',
    type: 'frontend',
    iconName: 'SiHtml5',
    color: '#e34c26',
  },
  {
    name: 'CSS3',
    type: 'frontend',
    iconName: 'SiCss3',
    color: '#264de4',
  },
  {
    name: 'Tailwind CSS',
    type: 'frontend',
    iconName: 'SiTailwindcss',
    color: '#38bdf8',
  },
  {
    name: 'JavaScript',
    type: 'frontend',
    iconName: 'SiJavascript',
    color: '#f0db4f',
  },
  {
    name: 'TypeScript',
    type: 'frontend',
    iconName: 'SiTypescript',
    color: '#007acc',
  },
  {
    name: 'React',
    type: 'frontend',
    iconName: 'SiReact',
    color: '#58c4dc',
  },
  {
    name: 'Next.js',
    type: 'frontend',
    iconName: 'nextJsIcon',
    color: '#000000',
  },
  {
    name: 'Node.js',
    type: 'backend',
    iconName: 'SiNodedotjs',
    color: '#3c873a',
  },
  {
    name: 'MongoDB',
    type: 'backend',
    iconName: 'SiMongodb',
    color: '#0cd45b',
  },
  {
    name: 'Supabase',
    type: 'backend',
    iconName: 'SiSupabase',
    color: '#3ecf8e',
  },
  {
    name: 'Git',
    type: 'environment',
    iconName: 'SiGit',
    color: '#f34f29',
  },
  {
    name: 'GitHub',
    type: 'environment',
    iconName: 'SiGithub',
    color: 'white',
  },
  {
    name: 'Vite',
    type: 'environment',
    iconName: 'viteIcon',
    isImage: true,
  },
  {
    name: 'Vercel',
    type: 'environment',
    iconName: 'SiVercel',
    color: 'white',
  },
  {
    name: 'Figma',
    type: 'etc',
    iconName: 'figmaIcon',
    isImage: true,
  },
  {
    name: 'Photoshop',
    type: 'etc',
    iconName: 'SiAdobephotoshop',
    color: '#31a8ff',
  },
  {
    name: 'Illustrator',
    type: 'etc',
    iconName: 'SiAdobeillustrator',
    color: '#ff9a00',
  },
  {
    name: 'Premiere Pro',
    type: 'etc',
    iconName: 'SiAdobepremierepro',
    color: '#9999ff',
  },
];

export const getFilters = (t: (key: string) => string): FilterOption[] => [
  { label: t('skills.filters.all'), value: 'all' },
  { label: t('skills.filters.frontend'), value: 'frontend' },
  { label: t('skills.filters.backend'), value: 'backend' },
  { label: t('skills.filters.environment'), value: 'environment' },
  { label: t('skills.filters.etc'), value: 'etc' },
];
