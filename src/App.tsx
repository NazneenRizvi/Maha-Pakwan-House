import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { MenuSection } from './components/MenuSection';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { MenuDeal } from './types';

export default function App() {
  const [selectedDeal, setSelectedDeal] = useState<MenuDeal | null>(null);

  const handleSelectDeal = (deal: MenuDeal | null) => {
    setSelectedDeal(deal);
    if (deal) {
      const contactElement = document.querySelector('#contact');
      if (contactElement) {
        contactElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF6EF] text-[#24130E] selection:bg-[#440C15] selection:text-[#FAF6EF]">
      {/* 1. Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-1">
        {/* 1. Home / Hero Section */}
        <Hero />

        {/* 2. About Section */}
        <AboutSection />

        {/* 3. Frozen Items Lunch Menu Section */}
        <MenuSection
          selectedDealId={selectedDeal?.id || null}
          onSelectDeal={handleSelectDeal}
        />

        {/* 4. Contact Section */}
        <ContactSection
          selectedDeal={selectedDeal}
          onSelectDeal={setSelectedDeal}
        />
      </main>

      {/* 6. Footer */}
      <Footer />
    </div>
  );
}
