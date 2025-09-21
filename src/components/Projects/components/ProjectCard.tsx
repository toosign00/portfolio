import { memo } from 'react';
import { colorClasses } from '@/constants/projectColors.constants';
import type { ProjectCardProps } from '@/types/projectCard.types';
import { getThumbnailSrcSet, getThumbnailUrl } from '@/utils/imageUtils';

export const ProjectCard = memo<ProjectCardProps>(({ project, onClick }: ProjectCardProps) => {
  const color = project.color ?? 'blue';
  const classes = colorClasses[color];

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      onClick(project);
    }
  };

  return (
    <div
      className={`focus-ring group relative overflow-hidden rounded-lg bg-ui-background transition-all duration-300 ${classes.bg} w-full cursor-pointer text-left`}
      onClick={() => onClick(project)}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role='button'
      aria-label={`${project.title} 상세 보기`}
    >
      <div className='aspect-[16/9] overflow-hidden'>
        <img
          src={getThumbnailUrl(project.thumbnail)}
          srcSet={getThumbnailSrcSet(project.thumbnail)}
          sizes='(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw'
          alt={`${project.title}`}
          loading='lazy'
          decoding='async'
          className='z-20 h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105'
        />
      </div>
      <div className='p-5'>
        <div className='mb-3 flex items-center justify-between'>
          <h3 className='font-bold text-lg text-white transition-colors duration-300 group-hover:text-black'>
            {project.title}
          </h3>
          <span className='rounded bg-white/5 px-2 py-0.5 text-gray text-xs group-hover:bg-black/10 group-hover:text-black'>
            {project.type}
          </span>
        </div>
        <p className='mb-4 line-clamp-2 text-gray text-sm group-hover:text-black/80'>
          {project.summary}
        </p>
        <div className='mb-4 flex flex-wrap gap-1.5'>
          {project.technologies.slice(0, 5).map((tech, idx) => (
            <span
              key={`${project.id || project.title}-tech-${tech}-${idx}`}
              className='rounded-md bg-black/50 px-2 py-1 text-gray text-xs group-hover:bg-black/20 group-hover:text-black'
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 5 && (
            <span className='rounded-md bg-black/50 px-2 py-1 text-gray text-xs group-hover:bg-black/20 group-hover:text-black'>
              +{project.technologies.length - 5}
            </span>
          )}
        </div>
      </div>
      <div
        className={`-top-8 -right-8 absolute h-16 w-16 rounded-full opacity-0 blur-xl transition-all duration-300 group-hover:opacity-30`}
      />
    </div>
  );
});
