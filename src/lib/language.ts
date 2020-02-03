export enum Language {
  JAPANESE = 'ja',
  ENGLISH = 'en',
}

export const languageEncoder = (lang: Language): string => {
  switch (lang) {
    case Language.JAPANESE:
      return '日本語';
    case Language.ENGLISH:
      return 'English';
    default:
      throw new Error('Invalid language');
  }
};

export const languageDecoder = (lang: string): Language => {
  switch (lang) {
    case '日本語':
      return Language.JAPANESE;
    case 'English':
      return Language.ENGLISH;
    default:
      throw new Error('Invalid language');
  }
};
