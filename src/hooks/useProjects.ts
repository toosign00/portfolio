import { useState } from 'react';
import { projects } from '@/data/projectsData';

export const useProjects = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedProjects = showAll ? projects : projects.slice(0, 3);

  return {
    showAll,
    setShowAll,
    displayedProjects,
    hasMoreProjects: !showAll && projects.length > 3,
  };
};
