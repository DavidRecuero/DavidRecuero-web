import { GithubIcon, SteamIcon } from '@/components/IconsSVG';
import { PlatformType } from '@/types/project';

export function getPlatformInfo(platform?: PlatformType) {
  switch (platform) {
    case 'github':
      return { icon: <GithubIcon />, label: 'GitHub' };
    case 'steam':
      return { icon: <SteamIcon />, label: 'Store' };
    default:
      return { icon: null, label: 'Ver proyecto' };
  }
}
