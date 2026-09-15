/** Single source of truth for the dark app shell. */
export const colors = {
  bg: '#0B1220',
  bgElevated: '#101A2C',
  surface: '#172033',
  surfaceAlt: '#1F2937',
  border: '#25324B',
  borderStrong: '#33425F',

  textPrimary: '#F8FAFC',
  textSecondary: '#CBD5E1',
  textMuted: '#8496B3',

  purchase: '#22C55E',
  purchaseSoft: 'rgba(34, 197, 94, 0.14)',
  sale: '#F97316',
  saleSoft: 'rgba(249, 115, 22, 0.14)',

  accent: '#60A5FA',
  accentSoft: 'rgba(96, 165, 250, 0.16)',
  accentAlt: '#A78BFA',
  accentAltSoft: 'rgba(167, 139, 250, 0.16)',

  high: '#A78BFA',
  medium: '#60A5FA',
  low: '#8496B3',
} as const;

/** 8-point rhythm used across every screen. */
export const spacing = {
  xs: 8,
  sm: 12,
  md: 16,
  lg: 20,
  xl: 24,
} as const;

export const radius = {
  sm: 10,
  md: 14,
  lg: 18,
  pill: 999,
} as const;
