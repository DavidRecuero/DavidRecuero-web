import { PlatformType } from '@/types/project';
import { FaGlobe } from "react-icons/fa";
import { SiItchdotio, SiGithub, SiSteam, SiAndroid, SiApple } from "react-icons/si";

export function getPlatformInfo(platform?: PlatformType) {
  switch (platform) {
    case 'github':
      return { icon: <SiGithub />, label: 'GitHub' };
    case 'steam':
      return { icon: <SiSteam/>, label: 'Store' };
    case 'android':
      return { icon: <SiAndroid />, label: 'Android' };
    case 'ios':
      return { icon: <SiApple />, label: 'iOS' };
    case 'itch':
      return { icon: <SiItchdotio />, label: 'Itch.io' };
    case 'other':
      return { icon: <FaGlobe />, label: 'Project' };
    default:
      return { icon: null, label: 'See Project' };
  }
}
