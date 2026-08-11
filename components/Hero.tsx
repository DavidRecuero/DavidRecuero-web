import { heroData } from '@/data/cv';

export default function Hero() {
  return (
    <section className="mb-20 pt-8">
      {/* Badge Companies */}
      <div className="inline-block px-4 py-2 mb-6 text-sm text-secondary">
        {heroData.companies}
      </div>

      {/* Hero Title */}
      <h1 className="text-2xl sm:text-4xl md:text-5xl tracking-tight text-primary leading-tight mb-8">
        {heroData.title}
      </h1>

      {/* CV downloader*/}
      <div className="flex flex-wrap items-center gap-6 text-sm">
        <a
          href={heroData.cvDownloadLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-button-background text-quaternary font-sans rounded-lg hover:bg-button-background-hovered transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          {heroData.cvDownloadText}
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
          <source src={heroData.showreelVideoSrc} type={heroData.videoType} />
        </video>
      </div>
    </section>
  );
}