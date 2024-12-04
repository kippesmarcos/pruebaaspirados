import { Rank } from '../types/rank';

export const ranks: Rank[] = [
  {
    id: 'astral',
    name: 'Astral',
    price: { permanent: 24.99, monthly: 7.99 },
    color: '#00B894',
    icon: `data:image/svg+xml,${encodeURIComponent(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
      </svg>
    `)}`,
    features: [
      'Chat color esmeralda',
      'Prefijo [Astral]',
      'Acceso a /kit astral',
      '2 homes adicionales',
      'Acceso a /fly en zonas seguras'
    ]
  },
  {
    id: 'celestial',
    name: 'Celestial',
    price: { permanent: 39.99, monthly: 12.99 },
    color: '#0984E3',
    icon: `data:image/svg+xml,${encodeURIComponent(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/>
        <circle cx="12" cy="12" r="3"/>
      </svg>
    `)}`,
    features: [
      'Todos los beneficios de Astral',
      'Chat color zafiro',
      'Prefijo [Celestial]',
      'Acceso a /kit celestial',
      '4 homes adicionales',
      'Acceso a /feed'
    ]
  },
  {
    id: 'divine',
    name: 'Divine',
    price: { permanent: 59.99, monthly: 19.99 },
    color: '#A55EEA',
    icon: `data:image/svg+xml,${encodeURIComponent(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <path d="M12 2a7 7 0 1 0 0 14 7 7 0 1 0 0-14z"/>
      </svg>
    `)}`,
    features: [
      'Todos los beneficios anteriores',
      'Chat color amatista',
      'Prefijo [Divine]',
      'Acceso a /kit divine',
      '6 homes adicionales',
      'Acceso a /heal'
    ]
  },
  {
    id: 'immortal',
    name: 'Immortal',
    price: { permanent: 89.99, monthly: 29.99 },
    color: '#E84393',
    icon: `data:image/svg+xml,${encodeURIComponent(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>
        <path d="M12 6v12"/>
        <path d="M6 12h12"/>
      </svg>
    `)}`,
    features: [
      'Todos los beneficios anteriores',
      'Chat color rubí',
      'Prefijo [Immortal]',
      'Acceso a /kit immortal',
      '8 homes adicionales',
      'Acceso a /enderchest'
    ]
  },
  {
    id: 'aspirados-plus',
    name: 'Aspirados+',
    price: { permanent: 149.99, monthly: 44.99 },
    color: '#FF9F43',
    icon: `data:image/svg+xml,${encodeURIComponent(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
      </svg>
    `)}`,
    features: [
      'Todos los beneficios anteriores',
      'Chat color ámbar real',
      'Prefijo [Aspirados+]',
      'Acceso a /kit aspirados',
      '12 homes adicionales',
      'Acceso a todos los comandos',
      'Prioridad en cola del servidor',
      'Tag personalizado',
      'Acceso anticipado a eventos'
    ]
  }
];