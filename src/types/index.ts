import { LucideIcon } from 'lucide-react';

export interface LeadDataItem {
  category: string;
  name: string;
  level: string;
  valMean: number;
  risk: string;
  notes: string;
  type: 'plant' | 'whey' | 'veg';
  icon: LucideIcon;
}

export interface BrandDataItem {
  brand: string;
  type: string;
  risk: string;
  availability: string;
  notes: string;
}

export interface SourceLink {
  title: string;
  links: string[];
}

export interface SourcesData {
  ethiopia: SourceLink[];
  protein: SourceLink[];
}

export interface Theme {
  bgMain: string;
  bgCard: string;
  textMain: string;
  textMuted: string;
  border: string;
  inputBg: string;
  hoverBg: string;
  divider: string;
  btnActive: string;
  btnInactive: string;
}
