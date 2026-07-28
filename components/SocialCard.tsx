import { SocialLinkData } from '@/types/social';

interface SocialCardProps {
  social: SocialLinkData;
}

export default function SocialCard({ name, url, icon, iconColorClass, hoverTextClass }: SocialLinkData) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-between p-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500/50 hover:bg-slate-800/80 transition-all group"
    >
      <div className="flex items-center gap-3">
        <div className={iconColorClass}>
          {icon}
        </div>
        <div>
          <p className={`text-sm text-white transition-colors ${hoverTextClass}`}>
            {name}
          </p>
        </div>
      </div>
      <span className={`text-slate-500 transition-colors ${hoverTextClass}`}>
        →
      </span>
    </a>
  );
}