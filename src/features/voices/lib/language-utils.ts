const regionNames = new Intl.DisplayNames(["en"], { type: "region" });
const languageNames = new Intl.DisplayNames(["en"], { type: "language" });

export type ParsedLanguage = {
  flag: string;
  language: string;
  region: string;
  label: string;
};

const languageCache = new Map<string, ParsedLanguage>();

function getFlag(country: string) {
  return [...country]
    .map((c) => String.fromCodePoint(0x1f1e6 + c.charCodeAt(0) - 65))
    .join("");
}

export function parseLanguage(locale: string): ParsedLanguage {
  if (languageCache.has(locale)) {
    return languageCache.get(locale)!;
  }

  let result: ParsedLanguage;

  try {
    const parts = locale.split("-");
    const lang = parts[0];
    const country = parts[1];

    const language = languageNames.of(lang) ?? lang;

    if (!country || country.length !== 2) {
      result = {
        flag: "",
        language,
        region: "",
        label: `${language} (${locale})`,
      };
    } else {
      const upper = country.toUpperCase();

      const flag = getFlag(upper);

      const region = regionNames.of(upper) ?? upper;

      result = {
        flag,
        language,
        region,
        label: `${language} (${region})`,
      };
    }
  } catch {
    result = {
      flag: "",
      language: locale,
      region: "",
      label: locale,
    };
  }

  languageCache.set(locale, result);
  return result;
}
