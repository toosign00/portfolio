import type { SkillFilterProps } from '@/types/skills.type';
import { Button } from '@/components/Button';

export const SkillFilter = ({ filters, currentFilter, onFilterChange }: SkillFilterProps) => {
  return (
    <div className="mb-8 flex flex-wrap justify-center gap-1">
      {filters.map((f) => (
        <Button
          key={f.value}
          size="sm"
          variant={currentFilter === f.value ? 'primary' : 'secondary'}
          onClick={(e) => {
            e.preventDefault();
            onFilterChange(f.value);
          }}
          isActive={currentFilter === f.value}
        >
          {f.label}
        </Button>
      ))}
    </div>
  );
};
