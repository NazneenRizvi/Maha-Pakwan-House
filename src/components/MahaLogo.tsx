import React from 'react';
import { ASSETS } from '../data/deals';

interface MahaLogoProps {
  className?: string;
  variant?: 'horizontal' | 'compact' | 'badge';
}

export const MahaLogo: React.FC<MahaLogoProps> = ({
  className = 'h-12',
  variant = 'horizontal',
}) => {
  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      {/* Official Logo Image Asset */}
      <img
        src={variant === 'badge' ? ASSETS.squareLogo : ASSETS.logo}
        alt="Maha Pakwan House Official Logo"
        className="h-full w-auto max-h-16 object-contain drop-shadow-md rounded"
        referrerPolicy="no-referrer"
        onError={(e) => {
          // If image fails, fallback to inline vector representation
          (e.target as HTMLElement).style.display = 'none';
        }}
      />
    </div>
  );
};
