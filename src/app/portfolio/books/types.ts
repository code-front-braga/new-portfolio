import type { LucideIcon } from 'lucide-react';

export type BlockSlug = 'practical' | 'inspirational';

export type BookBlockItemData = {
  label: string;
  block: BlockSlug;
  icon: LucideIcon;
};

export type BookSectionItemData = {
  label: string;
  href: string;
  icon: LucideIcon;
  color?: string;
  isPractical: boolean;
};
