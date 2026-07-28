export default function AvailabilityBadge() {
  return (
    <div className="p-4 rounded-xl shadow-lg">
      <div className="flex items-center gap-3">
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-800 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
        </span>
        <span className="text-sm text-accent">
          Available for new opportunities
        </span>
      </div>
      <p className="text-xs text-emerald-800 mt-2">
        Barcelona (CET) • Open to remote or presential positions
      </p>
    </div>
  );
}