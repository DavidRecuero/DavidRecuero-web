import { PlatformType } from '@/types/project';
import { FaGlobe, FaWindows, FaXbox } from "react-icons/fa";
import { BsNintendoSwitch } from "react-icons/bs";
import { SiItchdotio, SiGithub, SiSteam, SiAndroid, SiApple, SiPlaystation, SiMacos } from "react-icons/si";

export function getPlatformInfo(platform?: PlatformType) {
  switch (platform) {
    case 'github':
      return { icon: <SiGithub aria-hidden />, label: 'GitHub' };
    case 'steam':
      return { icon: <SiSteam aria-hidden />, label: 'Steam' };
    case 'android':
      return { icon: <SiAndroid aria-hidden />, label: 'Android' };
    case 'ios':
      return { icon: <SiApple aria-hidden />, label: 'iOS' };
    case 'itch':
      return { icon: <SiItchdotio aria-hidden />, label: 'Itch.io' };
    case 'pc':
      return { icon: <FaWindows aria-hidden />, label: 'PC' };
    case 'xbox':
      return { icon: <FaXbox aria-hidden />, label: 'Xbox' };
    case 'ps':
      return { icon: <SiPlaystation aria-hidden />, label: 'PlayStation' };
    case 'mac':
      return { icon: <SiMacos aria-hidden />, label: 'Mac' };
    case 'switch':
      return { icon: <BsNintendoSwitch aria-hidden />, label: 'Switch' };
    case 'other':
      return { icon: <FaGlobe aria-hidden />, label: 'Project' };
    default:
      return { icon: null, label: 'See Project' };
  }
}