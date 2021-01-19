import { Translations } from './lib/interfaces';
import {
  generateReverseTranslations,
  generateEncoder,
  generateDecoder,
} from './lib/generators';

// Edit enum name and contents
export enum MessageThreadType {
  Offer   = 'Offer', // 価格交渉
  Preview = 'Preview', // 内見
  Contact = 'Contact', // お問い合わせ
  Reserve = 'Reserve', // 予約
}

// Edit contexts
const translations: Translations = {
  ja: {
    [MessageThreadType.Offer]: '価格交渉',
    [MessageThreadType.Preview]: '内見',
    [MessageThreadType.Contact]: 'お問い合わせ',
    [MessageThreadType.Reserve]: '予約',
  },
  en: {
    [MessageThreadType.Offer]: 'offer',
    [MessageThreadType.Preview]: 'room preview',
    [MessageThreadType.Contact]: 'room contact',
    [MessageThreadType.Reserve]: 'reserve',
  },
};

// DO NOT EDIT
const reverseTranslations = generateReverseTranslations(translations);

// Edit constants name
export const messageThreadTypeEncoder = generateEncoder<MessageThreadType>(translations);
export const messageThreadTypeDecoder = generateDecoder<MessageThreadType>(
  reverseTranslations,
);
