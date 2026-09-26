import React from 'react';
import { motion } from 'motion/react';
import { MENU_DEALS } from '../data/deals';
import { MenuDeal } from '../types';
import { Check, ArrowRight, Utensils } from 'lucide-react';

interface MenuSectionProps {
  selectedDealId: string | null;
  onSelectDeal: (deal: MenuDeal) => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({
  selectedDealId,
  onSelectDeal,
}) => {
  return (
    <section id="menu" className="py-20 md:py-28 bg-[#FAF6EF] text-[#24130E] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 text-[#6D1624] text-xs font-bold uppercase tracking-widest mb-3">
            <span className="w-8 h-[1.5px] bg-[#6D1624]" />
            <span>Maha Pakwan House Menu</span>
            <span className="w-8 h-[1.5px] bg-[#6D1624]" />
          </div>

          <h2 className="font-serif-brand text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#440C15] text-balance">
            Frozen Items Lunch Menu
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#523126] font-normal leading-relaxed">
            Freshly prepared, freezer-ready lunch and snack packages. Select your favorite deal below to order via WhatsApp.
          </p>
        </motion.div>

        {/* 3-Column Deals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {MENU_DEALS.map((deal, idx) => {
            const isSelected = selectedDealId === deal.id;

            return (
              <motion.div
                key={deal.id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{
                  duration: 0.5,
                  delay: (idx % 3) * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={`flex flex-col bg-[#FDFBF8] rounded-xl overflow-hidden border transition-shadow duration-300 group ${
                  isSelected
                    ? 'border-[#B88E1F] shadow-xl ring-2 ring-[#D4AF37]/50 -translate-y-1'
                    : 'border-[#E6D7C2] hover:border-[#D4AF37]/70 hover:shadow-lg hover:-translate-y-0.5'
                }`}
              >
                {/* Food Image Container */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#24130E]/5">
                  <img
                    src={deal.image}
                    alt={`${deal.title} - ${deal.items.join(', ')} prepared by Maha Pakwan House Karachi`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    onError={(e) => {
                      // Fallback if image fails
                      (e.target as HTMLElement).style.display = 'none';
                    }}
                  />
                  
                  {/* Subtle top-corner Deal Number marker */}
                  <div className="absolute top-3 left-3 bg-[#440C15]/90 backdrop-blur-sm text-[#F3D98A] font-serif-brand font-bold text-xs uppercase tracking-wider px-3 py-1.5 rounded-sm border border-[#D4AF37]/40 shadow-sm">
                    {deal.title}
                  </div>

                  {/* Price Tag Overlay on Image */}
                  <div className="absolute bottom-3 right-3 bg-[#FAF6EF]/95 backdrop-blur-sm text-[#440C15] px-3.5 py-1.5 rounded shadow-md border border-[#D4AF37]/40">
                    <span className="text-xs uppercase font-medium text-[#8F6B12] mr-1">Price</span>
                    <span className="font-serif-brand text-lg font-bold tracking-tight text-[#440C15] tabular-nums">
                      Rs {deal.price}
                    </span>
                  </div>
                </div>

                {/* Card Content Area */}
                <div className="p-6 flex flex-col flex-1 justify-between bg-white">
                  <div>
                    <div className="flex items-center justify-between pb-3 border-b border-[#FAF6EF]">
                      <h3 className="font-serif-brand text-xl font-bold text-[#440C15]">
                        {deal.title}
                      </h3>
                      <span className="text-xs text-[#8F6B12] font-medium tracking-wide">
                        Ready to Fry
                      </span>
                    </div>

                    <p className="text-xs text-[#523126]/80 mt-2 mb-4 italic">
                      {deal.description}
                    </p>

                    {/* Exact Items List */}
                    <div className="space-y-2.5 my-4">
                      {deal.items.map((item, itemIdx) => (
                        <div key={itemIdx} className="flex items-start gap-2.5 text-sm text-[#24130E]">
                          <div className="mt-0.5 p-0.5 rounded-full bg-[#FAF6EF] text-[#B88E1F] shrink-0 border border-[#D4AF37]/40">
                            <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                          </div>
                          <span className="font-sans font-medium text-[#24130E] leading-snug">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card Bottom Area: Pricing & Selection Action */}
                  <div className="pt-5 mt-4 border-t border-[#F2E9DB] flex items-center justify-between gap-3">
                    <div className="flex flex-col">
                      <span className="text-[11px] uppercase tracking-wider text-[#8F6B12] font-semibold">
                        Deal Price
                      </span>
                      <span className="font-sans font-bold text-2xl text-[#440C15] tabular-nums tracking-tight">
                        Rs {deal.price}
                      </span>
                    </div>

                    <button
                      type="button"
                      onClick={() => onSelectDeal(deal)}
                      className={`inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider rounded-md transition-all cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#440C15] ${
                        isSelected
                          ? 'bg-[#440C15] text-[#F3D98A] shadow'
                          : 'bg-[#FAF6EF] text-[#440C15] border border-[#D4AF37]/60 hover:bg-[#440C15] hover:text-[#FAF6EF]'
                      }`}
                    >
                      <span>{isSelected ? 'Deal Selected ✓' : 'Select Deal'}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Ordering Notice Banner */}
        <div className="mt-14 p-6 rounded-xl bg-gradient-to-r from-[#440C15] via-[#56111C] to-[#440C15] text-[#FAF6EF] border border-[#D4AF37]/30 flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="p-3 rounded-full bg-[#D4AF37]/15 text-[#E5C465] shrink-0 hidden sm:block">
              <Utensils className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-serif-brand text-lg font-bold text-[#F3D98A]">
                Fresh Homemade Quality for School Breakfasts, Tea Time &amp; Parties
              </h4>
              <p className="text-xs sm:text-sm text-[#FAF6EF]/80 mt-0.5">
                All items are hygienically packaged and kept frozen to ensure crispiness and authentic taste upon frying.
              </p>
            </div>
          </div>

          <a
            href="#contact"
            className="px-6 py-2.5 bg-[#FAF6EF] text-[#440C15] text-xs font-bold uppercase tracking-wider rounded hover:bg-[#F3D98A] transition-colors whitespace-nowrap"
          >
            How to Order
          </a>
        </div>

      </div>
    </section>
  );
};
