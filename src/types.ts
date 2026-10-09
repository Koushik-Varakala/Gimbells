export interface VideoScene {
  time: string;
  label: string;
  subtitle: string;
}

export interface ReelItem {
  id: string;
  client: string;
  category: 'marble' | 'stone' | 'healthcare' | 'realestate' | 'service';
  title: string;
  hook: string;
  views: string;
  inquiries: string;
  thumbnail: string;
  videoSrc?: string;
  aspectRatio: string;
  duration: string;
  adPlatform: string;
  campaignOutcome: string;
  language?: string;
  audioTrack?: 'upbeat' | 'traditional' | 'ambient';
  scenes?: VideoScene[];
  scriptSummary?: string;
}

export interface CaseStudy {
  id: string;
  clientName: string;
  location: string;
  industry: string;
  services: string[];
  headline: string;
  challenge: string;
  solution: string;
  metrics: { label: string; value: string }[];
  quote: string;
  spokesperson: string;
  image?: string;
}

export interface TeamMember {
  name: string;
  role: string;
  description: string;
}

export interface AgencyService {
  id: string;
  title: string;
  description: string;
  deliverables: string[];
  badge?: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export type AmbientSoundType = 'none' | 'rain' | 'hearth' | 'chime';
