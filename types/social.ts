import { ReactNode } from 'react';

export interface SocialLinkData {
  id: string;
  name: string;
  url: string;
  icon: ReactNode;
  iconColorClass: string;
  hoverTextClass: string;
}