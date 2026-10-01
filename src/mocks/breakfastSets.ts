import type { MealSet } from '../types'

// Mock kahvaltı varyasyonları — gerçek KYK verisi değildir
export const BREAKFAST_SETS: MealSet[] = [
  {
    items: [
      { name: 'Beyaz Peynir', amount: '60g' },
      { name: 'Zeytin', amount: '30g' },
      { name: 'Domates', amount: '100g' },
      { name: 'Salatalık', amount: '80g' },
      { name: 'Tereyağı', amount: '10g' },
      { name: 'Reçel', amount: '20g' },
      { name: 'Ekmek', amount: '100g' },
      { name: 'Çay', amount: '200ml' },
    ],
    calories: 520,
  },
  {
    items: [
      { name: 'Kaşar Peyniri', amount: '50g' },
      { name: 'Yumurta (haşlama)', amount: '2 adet' },
      { name: 'Domates', amount: '100g' },
      { name: 'Salatalık', amount: '80g' },
      { name: 'Ekmek', amount: '100g' },
      { name: 'Bal', amount: '20g' },
      { name: 'Çay', amount: '200ml' },
    ],
    calories: 580,
  },
  {
    items: [
      { name: 'Menemen', amount: '200g' },
      { name: 'Beyaz Peynir', amount: '40g' },
      { name: 'Zeytin', amount: '20g' },
      { name: 'Ekmek', amount: '100g' },
      { name: 'Reçel', amount: '20g' },
      { name: 'Tereyağı', amount: '10g' },
      { name: 'Çay', amount: '200ml' },
    ],
    calories: 545,
  },
  {
    items: [
      { name: 'Sahanda Yumurta', amount: '2 adet' },
      { name: 'Sucuk', amount: '30g' },
      { name: 'Domates', amount: '100g' },
      { name: 'Biber', amount: '50g' },
      { name: 'Beyaz Peynir', amount: '40g' },
      { name: 'Ekmek', amount: '100g' },
      { name: 'Çay', amount: '200ml' },
    ],
    calories: 630,
  },
  {
    items: [
      { name: 'Lüks Kahvaltı Tabağı', amount: '1 porsiyon' },
      { name: 'Simit', amount: '1 adet' },
      { name: 'Kaymak', amount: '30g' },
      { name: 'Bal', amount: '30g' },
      { name: 'Beyaz Peynir', amount: '50g' },
      { name: 'Zeytin Çeşitleri', amount: '40g' },
      { name: 'Çay', amount: '200ml' },
    ],
    calories: 690,
  },
  {
    items: [
      { name: 'Patates Kızartması', amount: '100g' },
      { name: 'Sahanda Yumurta', amount: '2 adet' },
      { name: 'Beyaz Peynir', amount: '40g' },
      { name: 'Domates', amount: '80g' },
      { name: 'Ekmek', amount: '100g' },
      { name: 'Çay', amount: '200ml' },
    ],
    calories: 610,
  },
]
