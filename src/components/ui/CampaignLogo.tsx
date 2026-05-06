import React from 'react';
import { cn } from '@/lib/utils';
interface CampaignLogoProps {
  className?: string;
  variant?: 'gold-on-black' | 'black-on-gold';
  size?: 'sm' | 'md' | 'lg' | 'xl';
}
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
      "relative rounded-full flex items-center justify-center shadow-xl transition-transform hover:rotate-6 duration-300 select-none shrink-0",
      sizeMap[size],
      bgClass,
      className
    )}>
      <svg
        viewBox="0 0 100 100"
        className={cn("w-[70%] h-[70%]", iconClass)}
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Simplified Fist */}
        <path d="M35 55v15a5 5 0 0 0 5 5h20a5 5 0 0 0 5-5v-5h2a5 5 0 0 0 5-5v-2a5 5 0 0 0 5-5v-2a5 5 0 0 0-5-5h-8v-3a5 5 0 0 0-5-5h-2a5 5 0 0 0-5 5v2H35z" />
        {/* TG Initials - Removed fill="currentColor" to inherit from parent iconClass */}
        <text
          x="50%"
          y="48%"
          textAnchor="middle"
          dominantBaseline="middle"
          className="font-display font-black text-[18px]"
        >
          TG
        </text>
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