import React from 'react';
import { CONTACT_INFO } from '../data/deals';
import { MenuDeal } from '../types';
import { Phone } from 'lucide-react';

interface ContactSectionProps {
  selectedDeal: MenuDeal | null;
  onSelectDeal?: (deal: MenuDeal | null) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ selectedDeal }) => {
  // Generate WhatsApp message based on chosen deal or default
  const generateWhatsAppUrl = () => {
    let messageText = 'Hello Maha Pakwan House, I would like to place an order.';
    if (selectedDeal) {
      messageText = `Hello Maha Pakwan House, I would like to place an order for ${selectedDeal.title} (${selectedDeal.items.join(', ')}).`;
    }
    const encoded = encodeURIComponent(messageText);
    return `${CONTACT_INFO.whatsappBaseUrl}?text=${encoded}`;
  };

  return (
    <section id="contact" className="py-14 sm:py-16 bg-[#30080E] text-[#FAF6EF]">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
        
        {/* Section Heading */}
        <h2 className="font-serif-brand text-2xl sm:text-3xl font-bold tracking-tight text-[#FAF6EF]">
          Contact &amp; Orders
        </h2>

        {/* Short delivery sentence */}
        <p className="mt-2 text-sm sm:text-base text-[#FAF6EF]/85">
          Doorstep delivery is available in Karachi.
        </p>

        {/* Working Click-to-call Phone Numbers */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-base sm:text-lg font-sans">
          <a
            href={`tel:${CONTACT_INFO.primaryPhoneTel}`}
            className="inline-flex items-center gap-2 font-medium text-[#FAF6EF] hover:text-[#F3D98A] transition-colors focus:outline-none focus-visible:underline"
            title="Call 0317-8835538"
          >
            <Phone className="w-4 h-4 text-[#D4AF37]" />
            <span>0317-8835538</span>
          </a>

          <a
            href={`tel:${CONTACT_INFO.secondaryPhoneTel}`}
            className="inline-flex items-center gap-2 font-medium text-[#FAF6EF] hover:text-[#F3D98A] transition-colors focus:outline-none focus-visible:underline"
            title="Call 0333-2227563"
          >
            <Phone className="w-4 h-4 text-[#D4AF37]" />
            <span>0333-2227563</span>
          </a>
        </div>

        {/* Required Instruction & Single WhatsApp Button */}
        <div className="mt-8 space-y-4">
          <p className="text-sm sm:text-base text-[#FAF6EF]/90">
            To place an order, click the WhatsApp button below.
          </p>

          <div>
            <a
              href={generateWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-full bg-[#25D366] hover:bg-[#20ba59] active:bg-[#1da850] text-[#0A2612] font-semibold text-sm sm:text-base transition-colors shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366]"
              aria-label="Order on WhatsApp for 0317-8835538"
            >
              {/* Recognisable WhatsApp icon */}
              <svg
                className="w-5 h-5 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
              </svg>
              <span>Order on WhatsApp</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
