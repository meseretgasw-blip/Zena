export type PageView = 'home' | 'terms' | 'privacy';

export interface ServiceCategory {
  id: string;
  title: string;
  description: string;
  keyElements: string[];
}

export interface PricingTier {
  name: string;
  price: string;
  description: string;
  scope: string[];
}
