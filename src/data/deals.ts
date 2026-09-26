import { MenuDeal } from '../types';
import logoImg from '../assets/images/maha_pakwan_logo_transparent.png';
import squareLogoImg from '../assets/images/maha_pakwan_square_logo_1790367377207.jpg';
import heroImg from '../assets/images/hero_cocktail_delights_1790388550520.jpg';
import nrLogoImg from '../assets/images/nr_logo.png';
import deal1Img from '../assets/images/deal1_cocktail_samosas_1790388485282.jpg';
import deal2Img from '../assets/images/deal2_bbq_samosa_roll_1790388499620.jpg';
import deal3Img from '../assets/images/deal3_cheese_cones_nuggets_1790364823103.jpg';
import deal4Img from '../assets/images/deal4_kofta_tikka_samosa_1790388512753.jpg';
import deal5Img from '../assets/images/deal5_shami_samosa_1790388525985.jpg';
import deal6Img from '../assets/images/deal6_assorted_platter_1790388538105.jpg';

export const ASSETS = {
  logo: logoImg,
  squareLogo: squareLogoImg,
  hero: heroImg,
  nrLogo: nrLogoImg,
};

export const CONTACT_INFO = {
  primaryPhone: '0317-8835538',
  primaryPhoneTel: '03178835538',
  secondaryPhone: '0333-2227563',
  secondaryPhoneTel: '03332227563',
  whatsappRaw: '923178835538',
  whatsappBaseUrl: 'https://wa.me/923178835538',
};

export const MENU_DEALS: MenuDeal[] = [
  {
    id: 'deal-1',
    dealNumber: 1,
    title: 'Deal 1',
    items: ['Aalu Samosa — 24 pcs', 'Wonton — 24 pcs'],
    price: 1000,
    image: deal1Img,
    description: 'Crispy bite-sized cocktail potato samosas paired with crunchy wontons.',
  },
  {
    id: 'deal-2',
    dealNumber: 2,
    title: 'Deal 2',
    items: ['BBQ Samosa — 24 pcs', 'Vegetable Chicken Cheese Roll — 24 pcs'],
    price: 1600,
    image: deal2Img,
    description: 'Smoky BBQ chicken samosas alongside creamy mozzarella & veggie chicken rolls.',
  },
  {
    id: 'deal-3',
    dealNumber: 3,
    title: 'Deal 3',
    items: ['Chicken Cheese Cone — 12 pcs', 'Nuggets — 500 gm / 20 pcs'],
    price: 1150,
    image: deal3Img,
    description: 'Crispy chicken cheese cones with golden, tender crumbed chicken nuggets.',
  },
  {
    id: 'deal-4',
    dealNumber: 4,
    title: 'Deal 4',
    items: ['Chicken Kofta — 12 pcs', 'Tikka Samosa — 24 pcs'],
    price: 1400,
    image: deal4Img,
    description: 'Handcrafted seasoned chicken koftay and spicy roasted chicken tikka samosas.',
  },
  {
    id: 'deal-5',
    dealNumber: 5,
    title: 'Deal 5',
    items: ['Shami Kabab — 24 pcs', 'Vegetable Chicken Samosa — 12 pcs'],
    price: 1640,
    image: deal5Img,
    description: 'Rich traditional Karachi Shami kababs and golden vegetable chicken samosas.',
  },
  {
    id: 'deal-6',
    dealNumber: 6,
    title: 'Deal 6',
    items: [
      'Tikka Samosa — 12 pcs',
      'Spring Roll — 12 pcs',
      'Wonton — 18 pcs',
      'Cheese Cone — 6 pcs',
    ],
    price: 1450,
    image: deal6Img,
    description: 'The ultimate party platter: tikka samosas, spring rolls, crispy wontons & cheese cones.',
  },
];
