import Hero from '@/components/Hero';
import ExperienceEducation from '@/components/ExperienceEducation';
import Skills from '@/components/Skills';

export default function Home() {
  return (
    <main className="min-h-screen background font-mono text-primary px-6 sm:px-12 md:px-24 py-8 pb-64 max-w-screen-2xl mx-auto">
      <Hero />
      <ExperienceEducation />
      <Skills />
    </main>
  );
}