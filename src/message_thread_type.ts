import { Translations } from './lib/interfaces';
import {
  generateReverseTranslations,
  generateEncoder,
  generateDecoder,
} from './lib/generators';

// Edit enum name and contents
export enum MessageThreadType {
  Offer = 'Offer', // 価格交渉
  Preview = 'Preview', // 内見
  Contact = 'Contact', // 空き室確認
  Reserve = 'Reserve', // 予約
}

// Edit contexts
const translations: Translations = {
  ja: {
    [MessageThreadType.Offer]: '価格交渉',
    [MessageThreadType.Preview]: '内見',
    [MessageThreadType.Contact]: '空き室確認',
    [MessageThreadType.Reserve]: '予約',
  },
  en: {
    [MessageThreadType.Offer]: 'offer',
    [MessageThreadType.Preview]: 'room preview',
    [MessageThreadType.Contact]: 'Vacancy check',
    [MessageThreadType.Reserve]: 'reserve',
  },
};

// DO NOT EDIT
const reverseTranslations = generateReverseTranslations(translations);

// Edit constants name
export const messageThreadTypeEncoder = generateEncoder<MessageThreadType>(
  translations,
);
export const messageThreadTypeDecoder = generateDecoder<MessageThreadType>(
  reverseTranslations,
);
