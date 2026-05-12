import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { translations } from '../translations';

const deepClone = <T>(obj: T): T => JSON.parse(JSON.stringify(obj));

export const SUPPORTED_I18N_LANGS = ['es', 'en', 'ca'] as const;
export type SupportedI18nLang = (typeof SUPPORTED_I18N_LANGS)[number];

/** Código de UI / localStorage heredado (ES | EN | CA). */
export function i18nLngToLegacy(lng: string): 'ES' | 'EN' | 'CA' {
  if (lng === 'en') return 'EN';
  if (lng === 'ca') return 'CA';
  return 'ES';
}

export function legacyToI18nLng(code: string): SupportedI18nLang {
  const u = (code || 'ES').toUpperCase();
  if (u === 'EN') return 'en';
  if (u === 'CA') return 'ca';
  return 'es';
}

function normalizeStoredLang(raw: string | null): SupportedI18nLang {
  const u = (raw || 'ES').toUpperCase();
  if (u === 'EN') return 'en';
  if (u === 'CA') return 'ca';
  if (u === 'FR' || u === 'DE' || u === 'PT' || u === 'ZH') return 'es';
  return 'es';
}

void i18n.use(initReactI18next).init({
  resources: {
    es: { translation: deepClone(translations.ES) },
    en: { translation: deepClone(translations.EN) },
    ca: { translation: deepClone(translations.CA) },
  },
  lng:
    typeof localStorage !== 'undefined'
      ? normalizeStoredLang(localStorage.getItem('lang'))
      : 'es',
  fallbackLng: 'es',
  supportedLngs: [...SUPPORTED_I18N_LANGS],
  interpolation: { escapeValue: false },
});

export default i18n;
