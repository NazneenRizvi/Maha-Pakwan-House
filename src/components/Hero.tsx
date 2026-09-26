import React from 'react';
import { ASSETS } from '../data/deals';
import { ArrowDownRight, Sparkles, ShieldCheck, Flame } from 'lucide-react';

export const Hero: React.FC = () => {
  const scrollToMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    const menuElement = document.querySelector('#menu');
    if (menuElement) {
      menuElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative bg-gradient-to-b from-[#3E0A13] via-[#4A0E17] to-[#2B070D] text-[#FAF6EF] overflow-hidden pt-10 pb-16 md:pt-14 md:pb-24 border-b border-[#D4AF37]/20"
    >
      {/* Subtle background ambient glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#891E30]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          
          {/* Left Column: Compact Headline, Short Intro & CTA (4 cols) */}
          <div className="lg:col-span-4 flex flex-col justify-center space-y-4 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 text-[#E5C465] text-xs font-semibold uppercase tracking-widest justify-center lg:justify-start">
              <span className="w-6 h-[1.5px] bg-[#E5C465]" />
              Authentic Karachi Taste
            </div>

            <h1 className="font-serif-brand text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#FAF6EF] leading-snug">
              Maha Pakwan House’s Frozen &amp; Ready-to-Cook Food
            </h1>

            <p className="text-sm sm:text-base text-[#FAF6EF]/85 font-normal leading-relaxed max-w-md mx-auto lg:mx-0">
              Handcrafted delicacies prepared with care and quality ingredients—ready to fry and serve golden, crispy, and delicious in minutes.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                onClick={scrollToMenu}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-[#F3D98A] via-[#D4AF37] to-[#B88E1F] text-[#30080E] font-semibold text-xs sm:text-sm tracking-wider uppercase rounded-md shadow-md hover:brightness-105 active:scale-[0.99] transition-all cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
              >
                <span>Explore Menu</span>
                <ArrowDownRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Center Column: Food Visual with Comfortable Space (5 cols) */}
          <div className="lg:col-span-5 flex justify-center items-center py-2 sm:py-4">
            <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-none group">
              {/* Subtle gold frame border glow */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-[#D4AF37]/40 via-[#E5C465]/25 to-[#B88E1F]/40 opacity-70 blur-sm transition-opacity group-hover:opacity-100" />
              
              <div className="relative rounded-xl overflow-hidden border border-[#D4AF37]/35 shadow-xl bg-[#22050A] aspect-[4/3]">
                <img
                  src={ASSETS.hero}
                  alt="Pakistani frozen food spread by Maha Pakwan House including samosas, rolls, wontons, and shami kababs"
                  className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#22050A]/75 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-2.5 left-3.5 right-3.5 flex items-center justify-between text-xs text-[#FAF6EF]/90">
                  <span className="font-serif-brand italic text-[#F3D98A] text-xs">Freshly hand-rolled daily</span>
                  <span className="text-[11px] tracking-wide text-[#FAF6EF]/75">Karachi, Pakistan</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Three Balanced Highlights (3 cols) */}
          <div className="lg:col-span-3 flex flex-col justify-center gap-3.5 sm:gap-4 pt-2 lg:pt-0">
            {/* Highlight 1: Frozen Fresh */}
            <div className="bg-[#56111C]/40 border border-[#D4AF37]/20 rounded-lg p-3.5 sm:p-4 backdrop-blur-sm transition-all hover:border-[#D4AF37]/50 hover:bg-[#56111C]/55">
              <div className="flex items-start gap-3">
                <div className="p-1.5 rounded bg-[#D4AF37]/15 text-[#F3D98A] shrink-0 mt-0.5">
                  <Sparkles className="w-4 h-4 text-[#E5C465]" />
                </div>
                <div>
                  <h3 className="font-serif-brand text-base font-bold text-[#F3D98A] tracking-wide">
                    Frozen Fresh
                  </h3>
                  <p className="text-xs text-[#FAF6EF]/80 mt-0.5 leading-relaxed">
                    Flash-frozen to lock in crispness, flavor, and authentic home-style aroma.
                  </p>
                </div>
              </div>
            </div>

            {/* Highlight 2: Quality Prepared */}
            <div className="bg-[#56111C]/40 border border-[#D4AF37]/20 rounded-lg p-3.5 sm:p-4 backdrop-blur-sm transition-all hover:border-[#D4AF37]/50 hover:bg-[#56111C]/55">
              <div className="flex items-start gap-3">
                <div className="p-1.5 rounded bg-[#D4AF37]/15 text-[#F3D98A] shrink-0 mt-0.5">
                  <ShieldCheck className="w-4 h-4 text-[#E5C465]" />
                </div>
                <div>
                  <h3 className="font-serif-brand text-base font-bold text-[#F3D98A] tracking-wide">
                    Quality Prepared
                  </h3>
                  <p className="text-xs text-[#FAF6EF]/80 mt-0.5 leading-relaxed">
                    Clean, wholesome ingredients and time-honored recipes for families and events.
                  </p>
                </div>
              </div>
            </div>

            {/* Highlight 3: Ready to Cook */}
            <div className="bg-[#56111C]/40 border border-[#D4AF37]/20 rounded-lg p-3.5 sm:p-4 backdrop-blur-sm transition-all hover:border-[#D4AF37]/50 hover:bg-[#56111C]/55">
              <div className="flex items-start gap-3">
                <div className="p-1.5 rounded bg-[#D4AF37]/15 text-[#F3D98A] shrink-0 mt-0.5">
                  <Flame className="w-4 h-4 text-[#E5C465]" />
                </div>
                <div>
                  <h3 className="font-serif-brand text-base font-bold text-[#F3D98A] tracking-wide">
                    Ready to Cook
                  </h3>
                  <p className="text-xs text-[#FAF6EF]/80 mt-0.5 leading-relaxed">
                    Cook straight from the freezer in hot oil or air fryer with zero hassle.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
