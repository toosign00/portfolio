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
  filters: FilterOption[];
  currentFilter: SkillType | 'all';
  onFilterChange: (filter: SkillType | 'all') => void;
}

export interface SkillCounterProps {
  count: number;
}

export interface SkillGridProps {
  skills: SkillItem[];
  filter: SkillType | 'all';
}

export interface SkillCardProps {
  skill: SkillItem;
  filter: SkillType | 'all';
}

export interface SkillIconProps {
  skill: SkillItem;
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