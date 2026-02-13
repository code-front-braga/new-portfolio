import type { LucideIcon } from 'lucide-react';

export type BlockSlug = 'professional' | 'personal';

export type AboutBlockItemData = {
  label: string;
  block: BlockSlug;
  icon: LucideIcon;
};

export type AboutSectionItemData = {
  label: string;
  href: string;
  icon: LucideIcon;
  color?: string;
  isProgramming: boolean;
};
