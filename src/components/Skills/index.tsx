import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { getFilters, skills } from '@/data/skills.data';
import { SectionHeader } from '@/layout/SectionHeader';
import { SectionLayout } from '@/layout/SectionLayout';
import type { SkillType } from '@/types/skills.types';
import { SkillCounter } from './components/SkillCounter';
import { SkillFilter } from './components/SkillFilter';
import { SkillGrid } from './components/SkillGrid';

export const Skills = () => {
  const [filter, setFilter] = useState<SkillType | 'all'>('all');
  const { t } = useTranslation();

  const filtered = filter === 'all' ? skills : skills.filter((skill) => skill.type === filter);
  const filteredSkills = filtered.map((skill) => ({
    name: skill.name,
    iconName: skill.iconName,
    color: skill.color || '#000000',
  }));

  return (
    <SectionLayout id='skills'>
      <div className='mx-auto max-w-6xl'>
        <SectionHeader title={t('skills.title')} description={t('skills.description')} />
        <SkillFilter
          filters={getFilters(t)}
          currentFilter={filter}
          onFilterChange={(f) => setFilter(f as SkillType | 'all')}
        />
        <SkillCounter count={filteredSkills.length} />
        <SkillGrid skills={filteredSkills} filter={filter} />
      </div>
    </SectionLayout>
  );
};
