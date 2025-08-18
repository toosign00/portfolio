import type { ReactNode } from 'react';

export type SkillType = 'frontend' | 'backend' | 'devops' | 'design';

export interface SkillItem {
  name: string;
  type: SkillType;
  iconName: string;
  color?: string;
  isImage?: boolean;
}

export interface FilterOption {
  label: string;
  value: SkillType | 'all';
}

export interface SkillHeaderProps {
  title?: string;
  description?: string;
}

export interface SkillFilterProps {
  filters: Array<{ value: string; label: string }>;
  currentFilter: string;
  onFilterChange: (filter: string) => void;
}

export interface SkillCounterProps {
  count: number;
}

export interface SkillGridProps {
  skills: Array<{
    name: string;
    iconName: string;
    color: string;
  }>;
  filter: string;
}

export interface SkillCardProps {
  skill: {
    name: string;
    iconName: string;
    color: string;
  };
  filter: string;
}

export interface SkillIconProps {
  skill: {
    name: string;
    iconName: string;
    color: string;
  };
}

export interface TooltipProps {
  children: ReactNode;
  content: string;
}

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'outline' | 'solid';
  className?: string;
  children: React.ReactNode;
}
