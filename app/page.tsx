import Hero from '@/components/Hero';
import ExperienceEducation from '@/components/ExperienceEducation';
import Skills from '@/components/Skills';

export default function Home() {
  return (
    <main className="min-h-screen bg-background font-mono text-primary px-6 sm:px-12 md:px-24 py-8 max-w-4xl mx-auto">
      <Hero />
      <ExperienceEducation />
      <Skills />
    </main>
  );
}