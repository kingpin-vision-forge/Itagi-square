import { DiningSectionData } from '@/types/culinary';

export const diningData: DiningSectionData = {
  title: 'GOOD FOOD. GOOD MOMENTS.',
  subtitle:
    'Thoughtfully crafted flavours, inviting spaces, and moments made to be savoured.',
  ribbonImage: '/images/dining/ribbon-full.png',
  ctaLabel: 'EXPLORE ITAGI',
  ctaHref: '#contact',
  items: [
    {
      id: 'kebab-platter',
      name: 'Hariyali Tandoor Skewers',
      cuisine: 'Tandoor & Charcoal',
      description:
        'Char-grilled tender cuts infused with fresh mint, coriander, and royal Mughal spices.',
      image: '/images/dining/ribbon-full.png',
      tag: 'Chef Signature',
    },
    {
      id: 'indo-arabic-wok',
      name: 'Cashew Glazed Stir-Fry',
      cuisine: 'Indo-Arabic Fusion',
      description:
        'Crisp wok-tossed peppers and protein enveloped in a rich sweet-savory aromatic glaze.',
      image: '/images/dining/ribbon-full.png',
      tag: 'House Special',
    },
    {
      id: 'biryani-delicacy',
      name: 'Dum Pukht Biryani',
      cuisine: 'Awadhi & Arabic',
      description:
        'Fragrant long-grain basmati rice slow-cooked in sealed clay vessels with saffron and aged ghee.',
      image: '/images/experiences/dine.png',
      tag: 'Bestseller',
    },
  ],
};
