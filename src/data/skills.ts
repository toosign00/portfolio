import type { SkillItem, FilterOption } from '../types/skills.type';

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
    name: 'Sass',
    type: 'frontend',
    iconName: 'SiSass',
    color: '#cc6699',
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
    type: 'devops',
    iconName: 'SiGit',
    color: '#f34f29',
  },
  {
    name: 'GitHub',
    type: 'devops',
    iconName: 'SiGithub',
    color: 'white',
  },
  {
    name: 'Vite',
    type: 'devops',
    iconName: 'viteLogo',
    isImage: true,
  },
  {
    name: 'Vercel',
    type: 'devops',
    iconName: 'SiVercel',
    color: 'white',
  },
  {
    name: 'Figma',
    type: 'design',
    iconName: 'figmaLogo',
    isImage: true,
  },
  {
    name: 'Photoshop',
    type: 'design',
    iconName: 'SiAdobephotoshop',
    color: '#31a8ff',
  },
  {
    name: 'Illustrator',
    type: 'design',
    iconName: 'SiAdobeillustrator',
    color: '#ff9a00',
  },
  {
    name: 'InDesign',
    type: 'design',
    iconName: 'SiAdobeindesign',
    color: '#e749a0',
  },
  {
    name: 'Premiere Pro',
    type: 'design',
    iconName: 'SiAdobepremierepro',
    color: '#9999ff',
  },
];

export const filters: FilterOption[] = [
  { label: '전체', value: 'all' },
  { label: '프론트엔드', value: 'frontend' },
  { label: '백엔드', value: 'backend' },
  { label: '환경 및 배포', value: 'devops' },
  { label: '디자인', value: 'design' },
];
