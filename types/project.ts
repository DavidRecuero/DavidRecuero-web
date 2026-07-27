export interface Project {
  id: string;
  title: string;
  company?: string;                     //Optional, only for work on companies
  role: string;
  description: string;
  technologies: string[];
  imageSrc: string;
  videoSrc: string;
  category: 'my-code' | 'commercial';
  githubUrl?: string;                   //Optional, only if code can be shared
  storeUrl?: string;                    //Optional, only if project is available on a store 
}