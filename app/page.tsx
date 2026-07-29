import { experienceData, educationData, skillsData } from '@/data/data';
import SectionTitle from '@/components/SectionTitle';

export default function Home() {
  return (
    <main className="min-h-screen bg-background font-mono text-primary px-6 sm:px-12 md:px-24 py-8 max-w-4xl mx-auto">
      
      <section className="mb-20 pt-8">
        
        {/* Badge Companies */}
        <div className="inline-block px-4 py-2 mb-6 text-sm  text-secondary">
          Ex Scopely &middot; Voodoo Games &middot; UPlay
        </div>

        {/* Hero Title */}
        <h1 className="text-2xl sm:text-4xl md:text-5xl tracking-tight text-primary leading-tight mb-8">
          Video Game Development &bull; Full-Stack Web Development &bull; Quality Assurance  
        </h1>

        {/* CV downloader*/}
        <div className="flex flex-wrap items-center gap-6 text-sm">
          <a
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-button-background text-quaternary font-sans rounded-lg hover:bg-button-background-hovered transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download CV (PDF)
          </a>
        </div>

        {/* Showreel*/}
        <div className="mt-12 w-full aspect-video rounded-2xl overflow-hidden shadow-lg">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover pointer-events-none opacity-90"
          >
            <source src="/placeholderVideo.mp4" type="video/mp4" />
          </video>
        </div>

      </section>

      {/* Experience & Education*/}
      <section className="mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          
          {/* Experience */}
          <div>
            <SectionTitle>Work Experience</SectionTitle>

            <div className="space-y-10">
              {experienceData.map((item, index) => (
                <div key={index}>
                  <span className="block text-xs text-slate-600 mb-1">{item.period}</span>
                  <h3 className="text-base text-primary font-semibold">{item.title}</h3>
                  <p className="text-sm text-secondary mb-2">{item.role}</p>
                  <p className="text-xs text-secondary leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <SectionTitle>Education</SectionTitle>
            
            <div className="space-y-10">
              {educationData.map((item, index) => (
                <div key={index}>
                  <span className="block text-xs text-slate-600 mb-1">{item.period}</span>
                  <h3 className="text-base text-primary font-semibold">{item.title}</h3>
                  <p className="text-sm text-secondary mb-2">{item.institution}</p>
                  <p className="text-xs text-secondary leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Skills and Technologies */}
      <section className="mb-20">
        <SectionTitle>Skills & Technologies</SectionTitle>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {skillsData.map((group, index) => (
            <div key={index}>
              <h3 className="text-xs text-primary uppercase mb-3 font-semibold">{group.category}</h3>
              <ul className="space-y-2 text-sm text-secondary">
                {group.items.map((skill, skillIndex) => (
                  <li key={skillIndex}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}