import React from 'react';
import { ASSETS } from '../data/deals';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1F060A] text-[#FAF6EF]/80 border-t border-[#D4AF37]/20 py-8 px-4 text-center">
      <div className="max-w-4xl mx-auto space-y-2.5">
        {/* Line 1: Centered copyright */}
        <p className="text-xs sm:text-sm tracking-wide text-[#FAF6EF]/85">
          &copy; 2026 Maha Pakwan House. All rights reserved.
        </p>

        {/* Line 2: Developer credit with clickable NR logo */}
        <p className="text-xs sm:text-sm tracking-wide text-[#FAF6EF]/75 inline-flex items-center justify-center gap-2">
          <span>Website designed &amp; developed by</span>
          <a
            href="https://portfolio-site-v2-dusky.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Nazneen Rizvi’s portfolio"
            className="inline-flex items-center transition-transform hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] rounded"
            title="Visit Nazneen Rizvi’s portfolio"
          >
            <img
              src={ASSETS.nrLogo}
              alt="Nazneen Rizvi's logo"
              className="h-5 w-auto object-contain rounded-sm"
              loading="lazy"
            />
          </a>
        </p>
      </div>
    </footer>
  );
};
