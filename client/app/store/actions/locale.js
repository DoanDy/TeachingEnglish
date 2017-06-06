export const CHANGE_LOCALE = 'CHANGE_LOCALE'

export function changeLanguage(locale) {
  return {
    type: CHANGE_LOCALE,
    locale
  }
}
