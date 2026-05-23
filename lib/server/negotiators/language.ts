/**
 *
 * @param header fr-CH, fr;q=0.9, en;q=0.8, de;q=0.7, *;q=0.5
 */
export function negotiateLanguage(
  header: string,
  options?: { default?: string },
): { lang: string; q: number }[] {
  const languages = header
    .split(/\s*,\s*/)
    .map((lang) => lang.split(/\s*;\s*q=\s*/))
    .map(([locale, q]) => {
      let lang = locale.trim();
      if (lang === "*") {
        lang = options?.default || "en";
      }
      return { lang, q: q ? parseFloat(q) : 1 };
    })
    .sort((a, b) => b.q - a.q);
  return languages;
}
