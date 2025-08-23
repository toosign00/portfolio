import {
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiAdobepremierepro,
  SiCss3,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiReact,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from 'react-icons/si';

import figmaIcon from '@/assets/icon/figma.svg';
import nextJsIcon from '@/assets/icon/nextjs.svg';
import viteIcon from '@/assets/icon/vite.svg';
import type { SkillIconProps } from '@/types/skills.types';

export const SkillIcon = ({ skill }: SkillIconProps) => {
  const iconMap: Record<string, React.ReactNode> = {
    SiHtml5: <SiHtml5 style={{ color: skill.color }} />,
    SiCss3: <SiCss3 style={{ color: skill.color }} />,
    SiJavascript: <SiJavascript style={{ color: skill.color }} />,
    SiTypescript: <SiTypescript style={{ color: skill.color }} />,
    SiReact: <SiReact style={{ color: skill.color }} />,
    nextJsIcon: <img src={nextJsIcon} alt='Next.js' className='h-7.5 w-7.5' />,
    SiTailwindcss: <SiTailwindcss style={{ color: skill.color }} />,
    SiNodedotjs: <SiNodedotjs style={{ color: skill.color }} />,
    SiMongodb: <SiMongodb style={{ color: skill.color }} />,
    SiSupabase: <SiSupabase style={{ color: skill.color }} />,
    SiVercel: <SiVercel style={{ color: skill.color }} />,
    SiGit: <SiGit style={{ color: skill.color }} />,
    SiGithub: <SiGithub style={{ color: skill.color }} />,
    SiAdobephotoshop: <SiAdobephotoshop style={{ color: skill.color }} />,
    SiAdobeillustrator: <SiAdobeillustrator style={{ color: skill.color }} />,
    SiAdobepremierepro: <SiAdobepremierepro style={{ color: skill.color }} />,
    viteIcon: <img src={viteIcon} alt='Vite' className='h-7.5 w-7.5' />,
    figmaIcon: <img src={figmaIcon} alt='Figma' className='h-7.5 w-7.5' />,
  };

  return <>{iconMap[skill.iconName]}</>;
};
