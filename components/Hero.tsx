'use client';

import { useState, useSyncExternalStore } from 'react';
import { heroData } from '@/data/cv';
import { TbFileCv } from "react-icons/tb";

const videoCount = heroData.showreelVideos.length;

// Random first video, picked once per page load and only in the browser:
// if the server picked it, it would differ from the client's pick and break hydration
let clientStartIndex: number | null = null;
const getStartIndex = () => {
  if (clientStartIndex === null) {
    clientStartIndex = Math.floor(Math.random() * videoCount);
  }
  return clientStartIndex;
};
const getServerStartIndex = () => null;
const subscribe = () => () => {};

export default function Hero() {
  // null on the server and during hydration; the random index once running in the browser
  const startIndex = useSyncExternalStore(subscribe, getStartIndex, getServerStartIndex);

  // Number of videos that have finished: each one moves the showreel to the next video
  const [playedCount, setPlayedCount] = useState(0);

  const handleVideoEnd = () => {
    setPlayedCount((count) => count + 1);
  };

  const currentVideo =
    startIndex === null ? null : heroData.showreelVideos[(startIndex + playedCount) % videoCount];

  return (
    <section data-testid="hero-section" className="mb-24 flex flex-col xl:flex-row xl:items-stretch gap-12">

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
            data-testid="cv-download-button"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-button-background text-quaternary font-sans rounded-lg hover:bg-button-background-hovered transition-colors"
          >
            <TbFileCv className="w-5 h-5" />
            {heroData.cvDownloadText}
          </a>
        </div>
      </div>

      {/* Showreel*/}
      <div className="w-full xl:w-1/2 aspect-video xl:aspect-auto relative rounded-2xl overflow-hidden shadow-lg bg-black/5">
        {currentVideo && (
          <video
            key={playedCount}
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