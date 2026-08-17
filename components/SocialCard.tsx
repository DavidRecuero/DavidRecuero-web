import { SocialLinkData } from '@/types';

interface SocialCardProps {
  social: SocialLinkData;
}

export default function SocialCard({ name, url, user, icon}: SocialLinkData) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-between p-4 rounded-xl bg-button-background hover:bg-button-background-hovered transition-all group"
    >
      <div className="flex items-center gap-3">
        <div>
          {icon}
        </div>
        <div>
          <p className={`text-sm text-quaternary group-hover:text-accent transition-colors`}>
            {name}
          </p>
        </div>
      </div>
      <span className={`text-xs text-muted group-hover:text-accent transition-colors`}>
        {user}
      </span>
    </a>
  );
}