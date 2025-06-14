export interface SectionLayoutProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  useAnimation?: boolean;
}

export interface SectionHeaderProps {
  title: string;
  description?: string;
  useAnimation?: boolean;
  className?: string;
}
