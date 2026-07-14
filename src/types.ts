export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  tags: string[];
  category: 'development' | 'security' | 'both';
  imageUrl: string;
  githubUrl?: string;
  liveUrl?: string;
  features: string[];
}

export interface Skill {
  name: string;
  level: number; // percentage 1-100
  category: 'legal' | 'it' | 'iot' | 'creative';
  iconName: string; // lucide icon identifier
}

export interface Certificate {
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  imageUrl?: string;
}

export interface TimelineEvent {
  year: string;
  role: string;
  company: string;
  description: string;
  type: 'work' | 'education' | 'achievement';
}
