export default function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-xs uppercase tracking-widest text-slate-600 mb-8 pb-3 border-b border-slate-400">
      {children}
    </h2>
  );
}