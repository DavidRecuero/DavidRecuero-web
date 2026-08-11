import { GithubIcon, AndroidIcon, AppleIcon, ItchioIcon, OtherIcon, SteamIcon } from '@/components/IconsSVG';
import { PlatformType } from '@/types/project';

export function getPlatformInfo(platform?: PlatformType) {
  switch (platform) {
    case 'github':
      return { icon: <GithubIcon />, label: 'GitHub' };
    case 'steam':
      return { icon: <SteamIcon />, label: 'Store' };
    case 'android':
      return { icon: <AndroidIcon />, label: 'Android' };
    case 'ios':
      return { icon: <AppleIcon />, label: 'iOS' };
    case 'itch':
      return { icon: <ItchioIcon />, label: 'Itch.io' };
    case 'other':
      return { icon: <OtherIcon />, label: 'Project' };
    default:
      return { icon: null, label: 'See Project' };
  }
}
