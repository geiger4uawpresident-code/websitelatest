import React from 'react';
import { cn } from '@/lib/utils';
interface CampaignLogoProps {
  className?: string;
  variant?: 'gold-on-black' | 'black-on-gold';
  size?: 'sm' | 'md' | 'lg' | 'xl';
}
/**
 * CampaignLogo: Custom SVG implementation of the campaign's fist motif.
 * Resolves TS2305: Module '"lucide-react"' has no exported member 'Fist'.
 */
export function CampaignLogo({
  className,
  variant = 'gold-on-black',
  size = 'md'
}: CampaignLogoProps) {
  const sizeMap = {
    sm: 'h-8 w-8',
    md: 'h-10 w-10',
    lg: 'h-16 w-16',
    xl: 'h-24 w-24 md:h-32 md:w-32'
  };
  const bgClass = variant === 'gold-on-black' ? 'bg-campaign-black' : 'bg-campaign-gold';
  const iconClass = variant === 'gold-on-black' ? 'fill-campaign-gold' : 'fill-campaign-black';
  const textClass = variant === 'gold-on-black' ? 'fill-campaign-gold' : 'fill-campaign-black';
  return (
    <div className={cn(
      "relative rounded-full flex items-center justify-center shadow-xl transition-transform hover:rotate-6 duration-300 select-none",
      sizeMap[size],
      bgClass,
      className
    )}>
      {/* Custom Fist Motif SVG */}
      <svg 
        viewBox="0 0 24 24" 
        className={cn("w-1/2 h-1/2", iconClass)}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M19 13.5c0-.828-.672-1.5-1.5-1.5s-1.5.672-1.5 1.5c0 .17.028.332.079.484C15.424 13.125 14.5 12.164 14.5 11c0-1.381 1.119-2.5 2.5-2.5.212 0 .416.027.61.077C16.945 7.426 15.602 6.5 14 6.5c-1.933 0-3.5 1.567-3.5 3.5 0 .285.035.561.101.825C9.897 10.323 9 9.261 9 8c0-2.209 1.791-4 4-4 1.488 0 2.788.813 3.483 2.016C17.433 5.4 18.667 5 20 5c2.209 0 4 1.791 4 4 0 1.258-.58 2.378-1.484 3.111C22.865 12.637 23 13.298 23 14c0 1.933-1.567 3.5-3.5 3.5-.285 0-.561-.035-.825-.101C18.323 18.103 17.261 19 16 19c-2.209 0-4-1.791-4-4 0-.17.011-.337.032-.501-.582.321-1.256.501-1.972.501-2.209 0-4-1.791-4-4 0-.464.08-.908.225-1.322C5.467 9.873 4.8 10.859 4.8 12c0 1.933 1.567 3.5 3.5 3.5.17 0 .337-.011.501-.032C8.48 16.05 8 16.973 8 18c0 2.209 1.791 4 4 4 .464 0 .908-.08 1.322-.225C13.873 22.533 14.859 23 16 23c2.209 0 4-1.791 4-4 0-.464-.08-.908-.225-1.322C20.533 17.127 21.2 16.141 21.2 15c0-1.933-1.567-3.5-3.5-3.5-.17 0-.332.028-.484.079.359-.655.584-1.405.584-2.204 0-.17-.008-.338-.024-.504.606-.548 1.407-.871 2.29-.871 1.933 0 3.5 1.567 3.5 3.5 0 .285-.035.561-.101.825C23.103 12.677 24 13.739 24 15c0 2.209-1.791 4-4 4-.17 0-.337-.011-.501-.032-.321.582-.501 1.256-.501 1.972 0 2.209 1.791 4 4 4 .464 0 .908-.08 1.322-.225C13.127 24.533 12.141 25.2 11 25.2" transform="scale(0.8) translate(3, 3)" />
        <path d="M7 11c0-1.657 1.343-3 3-3 .552 0 1 .448 1 1s-.448 1-1 1c-.552 0-1 .448-1 1s-.448 1-1 1-1-.448-1-1zm1 3c0-.552.448-1 1-1s1 .448 1 1-.448 1-1 1-1-.448-1-1zm3-3c0-1.105.895-2 2-2 .552 0 1 .448 1 1s-.448 1-1 1-1 .448-1 1zm0 3c0-1.105.895-2 2-2 .552 0 1 .448 1 1s-.448 1-1 1-1 .448-1 1zm3-3c0-1.105.895-2 2-2 .552 0 1 .448 1 1s-.448 1-1 1-1 .448-1 1z" />
        {/* Solid simplified fist for scalability */}
        <path d="M4 10v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-2h1a2 2 0 0 0 2-2v-1a2 2 0 0 0 2-2v-1a2 2 0 0 0-2-2h-3V9a2 2 0 0 0-2-2h-1a2 2 0 0 0-2 2v1H4z" />
      </svg>
      {/* 2026 Circular Text */}
      <svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none" viewBox="0 0 100 100">
        <path
          id="curve"
          fill="transparent"
          d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
        />
        <text className={cn("text-[11px] font-black tracking-[0.2em] uppercase", textClass)}>
          <textPath href="#curve" startOffset="25%" textAnchor="middle">
            2026
          </textPath>
        </text>
      </svg>
    </div>
  );
}