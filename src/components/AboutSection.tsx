import React from 'react';
import { ASSETS } from '../data/deals';
import { Heart, Sparkles, Award } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-[#F3ECE1] text-[#24130E] relative border-t border-b border-[#E6D7C2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Brand Emblem & Visual (5 cols) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative max-w-sm w-full">
              <div className="absolute -inset-2 rounded-2xl bg-gradient-to-tr from-[#6D1624]/20 via-[#D4AF37]/25 to-[#440C15]/20 blur-md pointer-events-none" />
              
              <div className="relative bg-[#30080E] p-8 rounded-2xl border-2 border-[#D4AF37]/40 shadow-xl text-center flex flex-col items-center">
                <div className="w-full max-w-[280px] h-32 rounded-xl overflow-hidden border border-[#E5C465]/60 shadow-lg mb-6 bg-[#22050A] flex items-center justify-center p-3">
                  <img
                    src={ASSETS.logo}
                    alt="Maha Pakwan House authentic Karachi culinary emblem and brand mark"
                    className="w-full h-full object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <h3 className="font-display-brand text-2xl font-bold text-[#F3D98A] tracking-wider uppercase">
                  Maha Pakwan House
                </h3>
                <span className="text-xs uppercase tracking-widest text-[#E5C465]/80 mt-1">
                  Karachi Heritage &amp; Quality
                </span>

                <div className="w-16 h-[1.5px] bg-[#D4AF37]/50 my-5" />

                {/* Supporting Brand Mottos directly from flyer */}
                <div className="w-full space-y-3">
                  <div className="font-serif-brand italic text-lg sm:text-xl font-bold text-[#F3D98A] tracking-wide">
                    “Best Taste… Best Quality”
                  </div>
                  <div className="text-xs uppercase tracking-widest text-[#FAF6EF]/90 font-medium py-1 px-3 rounded bg-[#440C15]/80 border border-[#D4AF37]/30">
                    Hygienic • Delicious • Reliable
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Exact About Text (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-[#6D1624] text-xs font-bold uppercase tracking-widest">
              <span className="w-8 h-[1.5px] bg-[#6D1624]" />
              <span>About Our Kitchen</span>
            </div>

            <h2 className="font-serif-brand text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#440C15] leading-tight text-balance">
              Wholesome Frozen Delights from Karachi
            </h2>

            {/* Exact required text block */}
            <div className="space-y-4 text-base sm:text-lg text-[#381E16] leading-relaxed pt-2">
              <p className="border-l-2 border-[#D4AF37] pl-4 py-1 italic font-serif-brand text-[#440C15] text-lg sm:text-xl">
                “Maha Pakwan House is a Karachi-based food business offering a wide variety of delicious frozen and ready-to-cook items for families, gatherings, school breakfasts, and everyday meals.”
              </p>

              <p className="text-[#381E16] leading-relaxed">
                “Our menu includes samosas, rolls, wontons, shami kababs, koftay, nuggets, cheese items, and other tasty frozen foods, prepared with care and attention to quality.”
              </p>
            </div>

            <div className="pt-6 border-t border-[#E6D7C2] flex flex-wrap items-center gap-6 text-sm text-[#523126]">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#6D1624]" />
                <span className="font-semibold text-[#24130E]">Karachi Delivery</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#6D1624]" />
                <span className="font-semibold text-[#24130E]">Ready to Fry in Minutes</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#6D1624]" />
                <span className="font-semibold text-[#24130E]">No Artificial Preservatives</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
