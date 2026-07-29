export default function AvailabilityBadge() {
  return (
    <div className="p-4 rounded-xl shadow-lg">
      <div className="flex items-center gap-3">
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-available-primary opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-available-secondary"></span>
        </span>
        <span className="text-sm text-accent">
          Available for new opportunities
        </span>
      </div>
      <p className="text-xs text-secondary mt-2">
        Barcelona (CET) • Open to remote or presential positions
      </p>
    </div>
  );
}