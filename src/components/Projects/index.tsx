import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { IoReload } from 'react-icons/io5';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/Button';
import { getProjectPath } from '@/constants/routes.constants';
import { useProjectsWithUI } from '@/hooks/useProjectsQuery';
import { SectionHeader } from '@/layout/SectionHeader';
import { SectionLayout } from '@/layout/SectionLayout';
import type { ProjectCardData } from '@/types/projectCard.types';
import { getColorForIndex } from '@/utils/colorUtils';
import { ProjectCard } from './components/ProjectCard';

export const Projects = () => {
  const { displayedProjects, setShowAll, hasMoreProjects, loading, error } = useProjectsWithUI();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  const handleProjectClick = useCallback(
    async (project: ProjectCardData) => {
      await navigate(getProjectPath(project.id.ko), { state: { background: location } });
    },
    [navigate, location]
  );

  return (
    <SectionLayout id='projects'>
      <SectionHeader title={t('projects.title')} description={t('projects.description')} />
      <div className='container mx-auto'>
        {loading ? (
          <div className='flex flex-col items-center justify-center py-12'>
            <IoReload className='mb-4 animate-spin text-4xl text-gray-400' />
            <p className='text-gray-400'>{t('projects.loadingMessage')}</p>
          </div>
        ) : error ? (
          <div className='flex flex-col items-center justify-center py-12'>
            <p className='mb-4 text-red-500'>{t('projects.errorMessage')}</p>
            <p className='text-gray-400 text-sm'>{error}</p>
          </div>
        ) : (
          <>
            <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
              {displayedProjects.map((project, index) => (
                <ProjectCard
                  key={project.id.ko}
                  project={{
                    ...project,
                    color: project.color || getColorForIndex(index, 0),
                  }}
                  onClick={() => handleProjectClick(project)}
                />
              ))}
            </div>
            {hasMoreProjects && (
              <div className='mt-12 text-center'>
                <Button
                  variant='secondary'
                  size='md'
                  onClick={() => setShowAll(true)}
                  className='mx-auto'
                >
                  {t('projects.moreProjects')}
                </Button>
              </div>
            )}
          </>
        )}
      </div>
    </SectionLayout>
  );
};
