export enum Language {
  ja = 'ja',
  en = 'en',
}

export const languageEncoder = (lang: Language): string => {
  switch (lang) {
    case Language.ja:
      return '日本語';
    case Language.en:
      return 'English';
    default:
      throw new Error('Invalid language');
  }
};

export const languageDecoder = (lang: string): Language => {
  switch (lang) {
    case '日本語':
      return Language.ja;
    case 'English':
      return Language.en;
    default:
      throw new Error('Invalid language');
  }
};
