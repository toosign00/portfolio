import { useMemo, useState } from 'react';
import { filters, skills } from '@/data/skills.data';
import { SectionHeader } from '@/layout/SectionHeader';
import { SectionLayout } from '@/layout/SectionLayout';
import type { SkillType } from '@/types/skills.type';
import { SkillCounter } from './components/SkillCounter';
import { SkillFilter } from './components/SkillFilter';
import { SkillGrid } from './components/SkillGrid';

export const Skills = () => {
  const [filter, setFilter] = useState<SkillType | 'all'>('all');

  const filteredSkills = useMemo(() => {
    const filtered = filter === 'all' ? skills : skills.filter((skill) => skill.type === filter);
    return filtered.map((skill) => ({
      name: skill.name,
      iconName: skill.iconName,
      color: skill.color || '#000000',
    }));
  }, [filter]);

  return (
    <SectionLayout id='skills'>
      <div className='mx-auto max-w-6xl'>
        <SectionHeader
          title='기술 스택 및 도구'
          description='현재 사용할 수 있는 기술들과 학습 중인 기술들입니다.'
        />
        <SkillFilter
          filters={filters}
          currentFilter={filter}
          onFilterChange={(f) => setFilter(f as SkillType | 'all')}
        />
        <SkillCounter count={filteredSkills.length} />
        <SkillGrid skills={filteredSkills} filter={filter} />
      </div>
    </SectionLayout>
  );
};
