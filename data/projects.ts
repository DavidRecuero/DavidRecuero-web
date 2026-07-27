import { Project } from '@/types/project';

export const PROJECTS: Project[] = [
  // "MY CODE"
  {
    id: 'portfolio-web',
    title: 'Portafolio Web Full-Stack',
    role: 'Desarrollador Full-Stack',
    description: 'I worked on the development of a full-stack web portfolio, implementing modern technologies and best practices.',
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    imageSrc: '/projects/portfolio-thumb.jpg',
    videoSrc: '/placeholderVideo.mp4',
    category: 'my-code',
    githubUrl: 'https://github.com',
  },
  // "COMMERCIAL PRODUCTS"
  {
    id: 'game-title-x',
    title: 'Super Game Studio Title',
    company: 'Awesome Game Studio',
    role: 'QA Engineer / Gameplay Programmer',
    description: 'I worked on the game mechanics, bug fixing, and optimization of the gameplay experience for this commercial game.',
    technologies: ['C#', 'Unity', 'Git'],
    imageSrc: '/projects/game-thumb.jpg',
    videoSrc: '/placeholderVideo.mp4',
    category: 'commercial',
    storeUrl: 'https://store.steampowered.com',
  },
];