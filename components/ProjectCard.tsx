'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { Project } from '@/types';
import { LinkButton } from '@/components/LinkButton';
import { getPlatformInfo } from '@/utils/platform';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // Manages hover state to play/pause the video when the user hovers over the project card
  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
      });
    }
  };

  // Manages hover state to pause the video and reset it when the user stops hovering over the project card
  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <article className="grid grid-cols-1 md:grid-cols-12 md:items-center xl:flex xl:flex-col gap-6 rounded-xl p-6 transition-all shadow-lg">

      {/* Top Section (image/video) */}
      <div
        className="md:col-span-5 xl:w-full relative aspect-video rounded-lg overflow-hidden group cursor-pointer"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Static Image */}
        <Image
          src={project.imageSrc}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 40vw, 33vw"
          className="w-full h-full object-cover group-hover:opacity-0 transition-opacity duration-300 absolute inset-0 z-10"
        />

        {/* Descriptive Video */}
        <video
          ref={videoRef}
          muted
          loop
          playsInline
          preload="metadata"
          className="w-full h-full object-cover absolute inset-0 z-0"
        >
          {/* If we have a WebM video source */}
          {project.videoSrcWebm && (
            <source src={project.videoSrcWebm} type="video/webm" />
          )}
          {/* If we have only an MP4 video source */}
          <source src={project.videoSrcMp4} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Bottom Section (project information) */}
      <div className="md:col-span-7 xl:w-full flex flex-col justify-between flex-grow">
        <div>
          {/* Project Header / Company*/}
          <div className="flex justify-between items-start mb-3">
            <div>
              <h3 className="text-2xl font-sans text-primary">{project.title}</h3>
              {project.company && (
                <p className="text-sm font-mono text-accent mt-1">
                  {project.company}
                </p>
              )}
            </div>
            {/* Role*/}
            <span className="text-xs font-mono px-2 py-1 text-secondary">
              {project.role}
            </span>
          </div>

          {/* Platform */}
          {project.platforms && project.platforms.length > 0 && (
            <div className="flex flex-wrap items-center gap-3 mb-5 text-xl text-secondary">
              {project.platforms.map((plat) => {
                const { icon } = getPlatformInfo(plat);
                return (
                  <div key={plat}>
                    {icon}
                  </div>
                );
              })}
            </div>
          )}

          {/* Description */}
          <p className="text-secondary text-sm font-sans mb-5 leading-relaxed">
            {project.description}
          </p>

          {/* Technologies / Stack */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="text-xs px-2 py-1 text-muted font-mono rounded border border-text-muted"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Links */}
        <div className="pt-4 border-t border-tertiary/25 flex items-center gap-4 mt-auto">
          {project.url?.map((link, index) => {
            const platform = project.platformUrl?.[index];
            const { icon, label } = getPlatformInfo(platform);

            return (
              <LinkButton key={link} href={link} icon={icon}>
                {label}
              </LinkButton>
            );
          })}
        </div>
      </div>
    </article>
  );
}