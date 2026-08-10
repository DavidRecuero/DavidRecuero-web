interface TimelineItemProps {
  period: string;
  title: string;
  subtitle: string;
  description: string;
}

export default function TimelineItem({ period, title, subtitle, description }: TimelineItemProps) {
  return (
    <div>
      <span className="block text-xs text-slate-600 mb-1">{period}</span>
      <h3 className="text-base text-primary font-semibold">{title}</h3>
      <p className="text-sm text-secondary mb-2">{subtitle}</p>
      <p className="text-xs text-secondary leading-relaxed">
        {description}
      </p>
    </div>
  );
}