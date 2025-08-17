import { Product } from '../contexts/CartContext';

export const products: Product[] = [
  {
    id: '1',
    name: 'Andean Storm Shell',
    price: 485,
    image: '/images/Andean Storm Shell - Charcoal.png',
    images: {
      'Deep Purple': '/images/Andean Storm Shell - Deep Purple.png',
      'Charcoal': '/images/Andean Storm Shell - Charcoal.png',
      'Olive': '/images/Andean Storm Shell - Olive.png'
    },
    category: 'Jackets',
    description: 'Premium technical shell jacket combining traditional alpaca fiber with cutting-edge waterproof technology. Inspired by the resilience of Andean peaks.',
    features: ['3-layer waterproof', 'Alpaca fiber blend', 'Reflective accents', 'Ventilation system'],
    materials: ['60% Alpaca fiber', '30% Recycled polyester', '10% Elastane'],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Deep Purple', 'Charcoal', 'Olive'],
    sustainability: 95,
  },
  {
    id: '2',
    name: 'Machu Picchu Mid-Layer',
    price: 225,
    image: '/images/Machu Picchu Mid-Layer - Charcoal.png',
    images: {
      'Cream': '/images/Machu Picchu Mid-Layer - Cream.png',
      'Charcoal': '/images/Machu Picchu Mid-Layer - Charcoal.png',
      'Deep Purple': '/images/Machu Picchu Mid-Layer - Deep Purple.png'
    },
    category: 'Mid-layers',
    description: 'Luxurious alpaca-blend insulation layer that adapts to temperature changes like the ancient terraces of Machu Picchu.',
    features: ['Temperature regulation', 'Moisture-wicking', 'Anti-odor treatment', 'Packable design'],
    materials: ['70% Baby alpaca', '25% Merino wool', '5% Recycled nylon'],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Cream', 'Charcoal', 'Deep Purple'],
    sustainability: 88,
  },
  {
    id: '3',
    name: 'Inca Base Layer',
    price: 125,
    image: '/images/Inca Base Layer - Charcoal.png',
    images: {
      'Cream': '/images/Inca Base Layer - Cream.png',
      'Charcoal': '/images/Inca Base Layer - Charcoal.png'
    },
    category: 'Base layers',
    description: 'Foundation layer crafted from the finest alpaca fiber, providing unmatched comfort and temperature regulation.',
    features: ['Seamless construction', 'Natural antimicrobial', 'UV protection', 'Quick-dry'],
    materials: ['80% Alpaca fiber', '15% Merino wool', '5% Elastane'],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Cream', 'Charcoal'],
    sustainability: 92,
  },
  {
    id: '4',
    name: 'Condor Trek Pants',
    price: 285,
    image: '/images/Condor Trek Pants - Charcoal.png',
    images: {
      'Olive': '/images/Condor Trek Pants - Olive.png',
      'Charcoal': '/images/Condor Trek Pants - Charcoal.png',
      'Deep Purple': '/images/Condor Trek Pants - Deep Purple.png'
    },
    category: 'Pants',
    description: 'Technical trekking pants with the freedom of the Andean condor. Features innovative stretch panels and weather resistance.',
    features: ['4-way stretch', 'Water repellent', 'Reinforced knees', 'Multiple pockets'],
    materials: ['55% Organic cotton', '35% Recycled polyester', '10% Elastane'],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Olive', 'Charcoal', 'Deep Purple'],
    sustainability: 85,
  },
  {
    id: '5',
    name: 'Quechua Safety Module',
    price: 95,
    image: '/images/Quechua Safety Module - Silver.png',
    images: {
      'Silver': '/images/Quechua Safety Module - Silver.png',
      'Orange': '/images/Quechua Safety Module - Orange.png'
    },
    category: 'Accessories',
    description: 'Clip-on safety module with integrated LED and reflective elements. Connects seamlessly to all KALLPA garments.',
    features: ['LED visibility', '360° reflectivity', 'Emergency whistle', 'Weatherproof'],
    materials: ['Recycled aluminum', 'TPU coating', 'LED components'],
    sizes: ['One Size'],
    colors: ['Silver', 'Orange'],
    sustainability: 78,
  },
  {
    id: '6',
    name: 'Alpaca Thermal Gloves',
    price: 85,
    image: '/images/Alpaca Thermal Gloves - Charcoal.png',
    images: {
      'Cream': '/images/Alpaca Thermal Gloves - Cream.png',
      'Charcoal': '/images/Alpaca Thermal Gloves - Charcoal.png'
    },
    category: 'Accessories',
    description: 'Luxurious alpaca fiber gloves with touchscreen compatibility and superior warmth retention.',
    features: ['Touchscreen compatible', 'Windproof', 'Moisture-wicking', 'Non-slip grip'],
    materials: ['65% Alpaca fiber', '30% Merino wool', '5% Conductive thread'],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Cream', 'Charcoal'],
    sustainability: 90,
  }
];

export const categories = [
  { name: 'All Products', slug: 'all' },
  { name: 'Jackets', slug: 'jackets' },
  { name: 'Mid-layers', slug: 'mid-layers' },
  { name: 'Base layers', slug: 'base-layers' },
  { name: 'Pants', slug: 'pants' },
  { name: 'Accessories', slug: 'accessories' },
];

export const featuredProducts = products.slice(0, 4);