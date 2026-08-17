import { ReactNode } from 'react';

export interface SocialLinkData {
  id: string;
  name: string;
  url: string;
  user: string;
  icon: ReactNode;
}