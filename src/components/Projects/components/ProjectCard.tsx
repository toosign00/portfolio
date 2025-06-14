import type { Project } from '@/data/projectsData';
import { colorClasses } from '@/components/Projects/constants/colors';

interface ProjectCardProps {
  project: Project;
  onClick: (project: Project) => void;
}

export const ProjectCard = ({ project, onClick }: ProjectCardProps) => {
  const color = project.color ?? 'blue';
  const classes = colorClasses[color];

  return (
    <div
      className={`group bg-ui-background relative overflow-hidden rounded-lg transition-all duration-300 ${classes.bg} cursor-pointer`}
      onClick={() => onClick(project)}
      tabIndex={0}
      role="button"
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') onClick(project);
      }}
      aria-label={`${project.title} 상세 보기`}
    >
      <div className="aspect-[16/9] overflow-hidden">
        <img
          src={project.thumbnail}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-5">
        <h3 className="mb-3 text-lg font-bold text-white transition-colors duration-300 group-hover:text-black">
          {project.title}
        </h3>
        <p className="text-gray mb-4 line-clamp-2 text-sm group-hover:text-black/80">
          {project.summary}
        </p>
        <div className="mb-4 flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 5).map((tech, idx) => (
            <span
              key={idx}
              className="text-gray rounded-md bg-black/50 px-2 py-1 text-xs group-hover:bg-black/20 group-hover:text-black"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 5 && (
            <span className="text-gray rounded-md bg-black/50 px-2 py-1 text-xs group-hover:bg-black/20 group-hover:text-black">
              +{project.technologies.length - 5}
            </span>
          )}
        </div>
      </div>
      <div
        className={`absolute -top-8 -right-8 h-16 w-16 rounded-full opacity-0 blur-xl transition-all duration-300 group-hover:opacity-30`}
      />
    </div>
  );
};
