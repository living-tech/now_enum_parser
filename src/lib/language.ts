export enum Language {
  Ja = 'ja',
  En = 'en',
}

export const languageEncoder = (lang: Language): string => {
  switch (lang) {
    case Language.Ja:
      return '日本語';
    case Language.En:
      return 'English';
    default:
      throw new Error('Invalid language');
  }
};

export const languageDecoder = (lang: string): Language => {
  switch (lang) {
    case '日本語':
      return Language.Ja;
    case 'English':
      return Language.En;
    default:
      throw new Error('Invalid language');
  }
};
