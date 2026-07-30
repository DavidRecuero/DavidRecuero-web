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
    <article className="grid grid-cols-1 md:grid-cols-12 gap-6 rounded-xl p-6 transition-all shadow-lg">

      {/* Left Column (image/video) */}
      <div
        className="md:col-span-5 relative aspect-video rounded-lg overflow-hidden group cursor-pointer"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Static Image */}
        <Image
          src={project.imageSrc}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="w-full h-full object-cover group-hover:opacity-0 transition-opacity duration-300 absolute inset-0 z-10"
        />

        {/* Descriptive Video */}
        <video
          ref={videoRef}
          src={project.videoSrc}
          muted
          loop
          playsInline
          preload="metadata"
          className="w-full h-full object-cover absolute inset-0 z-0"
        />
      </div>

      {/* Right Column (project information) */}
      <div className="md:col-span-7 flex flex-col justify-between">
        <div>
          {/* Project Header / Company*/}
          <div className="flex justify-between items-start mb-2">
            <div>
              <h3 className="text-xl font-sans text-primary">{project.title}</h3>
              {project.company && (
                <p className="text-sm font-mono text-accent">
                  {project.company}
                </p>
              )}
            </div>
            {/* Role*/}
            <span className="text-xs font-mono pl-8 pr-1.5 py-1 text-secondary">
              {project.role}
            </span>
          </div>

          {/* Description */}
          <p className="text-secondary text-sm font-sans mb-4 leading-relaxed">
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
        <div className="pt-4 border-t border-tertiary/25 flex items-center gap-4">
          {project.url && (() => {
            const { icon, label } = getPlatformInfo(project.platform);

            return (
              <LinkButton href={project.url} icon={icon}>
                {label}
              </LinkButton>
            );
          })()}
        </div>
      </div>
    </article>
  );
}