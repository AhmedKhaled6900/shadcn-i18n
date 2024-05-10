export const fallbackLng = 'en'
export const languages = [fallbackLng, 'ar']

export const defaultNS = 'translation'
export const cookieName = 'i18next'

export function getOptions (lng = fallbackLng, ns = defaultNS) {
  return {
    // debug: true,
    supportedLngs: languages,
    fallbackLng,
    lng,
    fallbackNS: defaultNS,
    defaultNS,
    ns
  }
}
// settings.ts

export type SupportedLangsType = 'en' | 'fr' | 'es' | 'de'; // Or any other languages you support

export interface GetOptionsType {
  lng: SupportedLangsType;
  ns: string;
  // Add other options specific to your i18next configuration here
  // (e.g., interpolation options, fallback language, etc.)
}

// You can add other settings relevant to your application here
// (e.g., API endpoints, theme options, etc.)
