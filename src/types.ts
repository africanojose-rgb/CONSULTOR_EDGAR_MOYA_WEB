export interface LegalService {
  id: string;
  title: string;
  iconName: string;
  description: string;
  longDescription?: string;
  featured?: boolean;
}

export interface PilarCard {
  id: string;
  title: string;
  description: string;
  iconName: string;
  variant: 'light' | 'primary' | 'secondary';
}

export interface ProcessStep {
  number: number;
  title: string;
  description: string;
}

