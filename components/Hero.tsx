'use client';

import { useState, useEffect } from 'react';
import { heroData } from '@/data/cv';
import { TbFileCv } from "react-icons/tb";

export default function Hero() {

  //Choose the video to play on Home
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [mounted, setMounted] = useState(false);

  //Choose a random video to play on mount
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * heroData.showreelVideos.length);
    setCurrentVideoIndex(randomIndex);
    setMounted(true);
  }, []);

  const handleVideoEnd = () => {
    setCurrentVideoIndex((prevIndex) => {
      if (prevIndex === heroData.showreelVideos.length - 1) {
        return 0;
      }
      return prevIndex + 1;
    });
  };

  const currentVideo = heroData.showreelVideos[currentVideoIndex];

  return (
    <section className="mb-24 flex flex-col xl:flex-row xl:items-stretch gap-12">

      {/* Text Content */}
      <div className="flex-1 flex flex-col justify-center pb-4 items-center sm:items-start text-center sm:text-left">
        {/* Badge Companies */}
        <div className="w-fit mx-auto pb-6 text-sm text-secondary">
          {heroData.companies}
        </div>

        {/* Hero Title */}
        <h1 className="text-balance text-3xl sm:text-4xl md:text-5xl tracking-tight text-primary leading-none mb-8">
          {heroData.title.map((line, index) => (
            <span key={index} className="block">
              {line}
            </span>
          ))}
        </h1>

        {/* CV downloader */}
        <div className="flex flex-wrap items-center gap-6 text-sm">
          <a
            href={heroData.cvDownloadLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-button-background text-quaternary font-sans rounded-lg hover:bg-button-background-hovered transition-colors"
          >
            <TbFileCv className="w-5 h-5" />
            {heroData.cvDownloadText}
          </a>
        </div>
      </div>

      {/* Showreel*/}
      <div className="w-full xl:w-1/2 aspect-video xl:aspect-auto relative rounded-2xl overflow-hidden shadow-lg bg-black/5">
        {mounted && (
          <video
            key={currentVideoIndex}
            autoPlay
            muted
            playsInline
            onEnded={handleVideoEnd}
            className="absolute inset-0 w-full h-full object-cover pointer-events-none opacity-90"
          >
            {/* First tries with webm */}
            <source src={currentVideo.webm} type="video/webm" />

            {/* Then mp4 */}
            <source src={currentVideo.mp4} type="video/mp4" />

            {/* Fallback message */}
            Your browser does not support the video tag.
          </video>
        )}
      </div>
    </section>
  );
}