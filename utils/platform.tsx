import { PlatformType } from '@/types/project';
import { FaGlobe, FaWindows, FaXbox } from "react-icons/fa";
import { BsNintendoSwitch } from "react-icons/bs";
import { SiItchdotio, SiGithub, SiSteam, SiAndroid, SiApple, SiPlaystation, SiMacos } from "react-icons/si";

export function getPlatformInfo(platform?: PlatformType) {
  switch (platform) {
    case 'github':
      return { icon: <SiGithub />, label: 'GitHub' };
    case 'steam':
      return { icon: <SiSteam/>, label: 'Steam' };
    case 'android':
      return { icon: <SiAndroid />, label: 'Android' };
    case 'ios':
      return { icon: <SiApple />, label: 'iOS' };
    case 'itch':
      return { icon: <SiItchdotio />, label: 'Itch.io' };
    case 'pc':
      return { icon: <FaWindows />, label: 'PC' };
    case 'xbox':
      return { icon: <FaXbox />, label: 'Xbox' };
    case 'ps':
      return { icon: <SiPlaystation />, label: 'PlayStation' };
    case 'mac':
      return { icon: <SiMacos />, label: 'Mac' };
    case 'switch':
      return { icon: <BsNintendoSwitch />, label: 'Switch' };
    case 'other':
      return { icon: <FaGlobe />, label: 'Project' };
    default:
      return { icon: null, label: 'See Project' };
  }
}
