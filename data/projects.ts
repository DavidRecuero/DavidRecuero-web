import { Project, SectionId } from '@/types/project';

export const portfolioSections: { id: SectionId; label: string }[] = [
  { id: 'my-code', label: 'My Code' },
  { id: 'commercial', label: 'Commercial Products' },
];

export const projects: Project[] = [
  // "MY CODE"
  {
    id: 'portfolio-web',
    title: 'Portafolio Web Full-Stack',
    role: 'Full-Stack Developer',
    description: 'I worked on the development of a full-stack web portfolio, implementing modern technologies and best practices.',
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    imageSrc: '/pngPlaceholder.png',
    videoSrc: '/placeholderVideo.mp4',
    category: 'my-code',
    url: 'https://github.com',
    platform: 'github',
  },
  // "COMMERCIAL PRODUCTS"
  {
    id: 'game-title-x',
    title: 'Super Game Studio Title',
    company: 'Awesome Game Studio',
    role: 'QA Engineer / Gameplay Programmer',
    description: 'I worked on the game mechanics, bug fixing, and optimization of the gameplay experience for this commercial game.',
    technologies: ['C#', 'Unity', 'Git'],
    imageSrc: '/pngPlaceholder.png',
    videoSrc: '/placeholderVideo.mp4',
    category: 'commercial',
    url: 'https://store.steampowered.com',
    platform: 'steam',
  },
];