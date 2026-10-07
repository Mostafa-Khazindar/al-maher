export type Locale = "ar" | "en";

export interface ServiceItem {
  id: string;
  titleAr: string;
  titleEn: string;
  descAr: string;
  descEn: string;
  iconName: string;
  badgeAr?: string;
  badgeEn?: string;
}

export interface MaterialItem {
  id: string;
  brand: string;
  nameAr: string;
  nameEn: string;
  categoryAr: string;
  categoryEn: string;
  purposeAr: string;
  purposeEn: string;
  importanceAr: string;
  importanceEn: string;
  logoUrl?: string;
}

export interface PortfolioCar {
  id: string;
  titleAr: string;
  titleEn: string;
  year?: string;
  model: string;
  serviceAr: string[];
  serviceEn: string[];
  beforeImage: string;
  duringImage?: string;
  afterImage: string;
  descriptionAr: string;
  descriptionEn: string;
  tags: string[];
}

export interface ProcessStep {
  step: string;
  titleAr: string;
  titleEn: string;
  descAr: string;
  descEn: string;
  keyPointsAr: string[];
  keyPointsEn: string[];
}

export interface FAQItem {
  qAr: string;
  qEn: string;
  aAr: string;
  aEn: string;
  category: "services" | "materials" | "location" | "appointment" | "process";
}
