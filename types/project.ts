export type SectionId = 'my-code' | 'commercial';
export type PlatformType = 'github' | 'steam' | 'android' | 'ios' | 'itch' | 'other';

export interface Project {
  id: string;
  title: string;
  company?: string;                     //Optional, only for work on companies
  role: string;
  description: string;
  technologies: string[];
  imageSrc: string;
  videoSrcWebm?: string;
  videoSrcMp4: string;
  category: SectionId;
  url?: string;                         //Optional, only for projects with a specific platform (e.g., GitHub, Steam)
  platform?: PlatformType;               
}