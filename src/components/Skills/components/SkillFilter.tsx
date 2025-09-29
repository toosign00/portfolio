import { Button } from '@/components/ui/Button';
import type { SkillFilterProps } from '@/types/skills.types';

export const SkillFilter = ({ filters, currentFilter, onFilterChange }: SkillFilterProps) => {
  return (
    <div className='mb-8 flex flex-wrap justify-center gap-1'>
      {filters.map((f) => (
        <Button
          key={f.value}
          size='sm'
          variant={currentFilter === f.value ? 'shine' : 'secondary'}
          onClick={(e) => {
            e.preventDefault();
            onFilterChange(f.value);
          }}
        >
          {f.label}
        </Button>
      ))}
    </div>
  );
};
