import { Translations } from './lib/interfaces';
import {
  generateReverseTranslations,
  generateEncoder,
  generateDecoder,
} from './lib/generators';

// Edit enum name and contents
export enum MessageType {
  MoveIn = 'MoveIn', // 住宅宿泊事業法
  MoveOut = 'MoveOut', // 旅館業法
}

// Edit contexts
const translations: Translations = {
  ja: {
    [MessageType.MoveIn]: '入居後メッセージ',
    [MessageType.MoveOut]: '退去後メッセージ',
  },
  en: {
    [MessageType.MoveIn]: 'move in message',
    [MessageType.MoveOut]: 'move out message',
  },
};

// DO NOT EDIT
const reverseTranslations = generateReverseTranslations(translations);

// Edit constants name
export const messageTypeEncoder = generateEncoder<MessageType>(translations);
export const messageTypeDecoder = generateDecoder<MessageType>(
  reverseTranslations,
);
