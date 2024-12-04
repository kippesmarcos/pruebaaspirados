export const tokens = [
  {
    id: 'base-token',
    name: 'Base Token',
    description: 'Token básico para el servidor',
    prices: [
      { amount: 1000, price: 4.99, originalPrice: 9.99 },
      { amount: 2500, price: 9.99, originalPrice: 19.99 },
      { amount: 5000, price: 19.99, originalPrice: 39.99 }
    ],
    icon: '/images/tokens/base.svg',
    color: '#ff9d00'
  },
  {
    id: 'falltrap-token',
    name: 'Falltrap Token',
    description: 'Token especial para trampas de caída',
    prices: [
      { amount: 500, price: 3.99, originalPrice: 7.99 },
      { amount: 1000, price: 7.99, originalPrice: 15.99 },
      { amount: 2500, price: 16.99, originalPrice: 33.99 }
    ],
    icon: '/images/tokens/falltrap.svg',
    color: '#00ff9d'
  }
];