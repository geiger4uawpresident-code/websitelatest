import React from 'react';
import { cn } from '@/lib/utils';
interface VideoPlayerProps {
  url: string;
  className?: string;
  title?: string;
}
export function VideoPlayer({ url, className, title = "Campaign Video" }: VideoPlayerProps) {
  return (
    <div className={cn("relative w-full aspect-video rounded-xl overflow-hidden shadow-2xl border-4 border-campaign-gold/20 bg-black", className)}>
      <iframe
        src={url}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="absolute top-0 left-0 w-full h-full border-0"
      />
    </div>
  );
}