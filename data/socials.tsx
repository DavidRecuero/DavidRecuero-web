import { SocialLinkData } from '@/types/social';
import { SiGithub, SiGitlab, SiItchdotio } from "react-icons/si";
import { FaLinkedin} from "react-icons/fa";

export const socialLinks: SocialLinkData[] = [
  {
    id: 'linkedin',
    name: 'LinkedIn',
    user: '@davidrecuero',
    url: 'https://linkedin.com/in/drecuero',
    icon: <FaLinkedin aria-hidden color="#0a66c2" className="w-5 h-5" />
  },
  {
    id: 'github',
    name: 'GitHub',
    user: '@davidrecuero',
    url: 'https://github.com/DavidRecuero',
    icon: <SiGithub aria-hidden color="#e2e8f0" className="w-5 h-5" />
  },
  {
    id: 'gitlab',
    name: 'GitLab',
    user: '@davidrecuero',
    url: 'https://gitlab.com/DavidRecuero',
    icon: <SiGitlab aria-hidden color="#fc6d26" className="w-5 h-5" />
  },
  {
    id: 'itch.io',
    name: 'itch.io',
    user: '@davidrecuero',
    url: 'https://davidrecuero.itch.io/',
    icon: <SiItchdotio aria-hidden color="#fa5c5c" className="w-5 h-5" />
  }
];