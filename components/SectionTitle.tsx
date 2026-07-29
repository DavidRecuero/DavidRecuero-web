export default function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-xs uppercase tracking-widest text-secondary mb-8 pb-3 border-b border-tertiary">
      {children}
    </h2>
  );
}