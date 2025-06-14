import { useState, useMemo } from 'react';
import { skills, filters } from '@/data/skills';
import { SectionHeader } from '@/layout/SectionHeader';
import { SkillFilter } from './components/SkillFilter';
import { SkillCounter } from './components/SkillCounter';
import { SkillGrid } from './components/SkillGrid';
import { SectionLayout } from '@/layout/SectionLayout';
import type { SkillType } from '@/types/skills.type';

export const Skills = () => {
  const [filter, setFilter] = useState<SkillType | 'all'>('all');

  const filteredSkills = useMemo(() => {
    return filter === 'all' ? skills : skills.filter((skill) => skill.type === filter);
  }, [filter]);

  return (
    <SectionLayout id="skills">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          title="기술 스택 및 도구"
          description="현재 사용할 수 있는 기술들과 학습 중인 기술들입니다."
        />
        <SkillFilter filters={filters} currentFilter={filter} onFilterChange={setFilter} />
        <SkillCounter count={filteredSkills.length} />
        <SkillGrid skills={filteredSkills} filter={filter} />
      </div>
    </SectionLayout>
  );
};
