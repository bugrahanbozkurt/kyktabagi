export const darkTokens = {
  bg: '#14181A',
  surface: '#1B2023',
  surfaceAlt: '#20262A',
  border: '#2A3236',
  borderSoft: '#232A2D',
  textPrimary: '#ECEFEF',
  textSecondary: '#9AA6AA',
  textFaint: '#6C7679',
  accent: '#6FBF8B',
  accentSoft: 'rgba(111,191,139,0.14)',
  accentText: '#0F1411',
  calorie: '#E0A458',
  sidebarBg: '#101314',
} as const

export const lightTokens = {
  bg: '#FAF9F6',
  surface: '#FFFFFF',
  surfaceAlt: '#F3F1EC',
  border: '#E3E0D8',
  borderSoft: '#ECE9E1',
  textPrimary: '#20251F',
  textSecondary: '#6E7568',
  textFaint: '#9CA196',
  accent: '#3F7C57',
  accentSoft: 'rgba(63,124,87,0.10)',
  accentText: '#FFFFFF',
  calorie: '#B4762E',
  sidebarBg: '#F3F1EC',
} as const

export type ThemeTokens = typeof darkTokens
