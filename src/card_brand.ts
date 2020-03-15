import { Translations } from './lib/interfaces';
import {
  generateReverseTranslations,
  generateEncoder,
  generateDecoder,
} from './lib/generators';

// Edit enum name and contents
export enum CardBrand {
  AmericanExpress = 'AmericanExpress',
  DinersClub = 'DinersClub',
  Discover = 'Discover',
  JCB = 'JCB',
  MasterCard = 'MasterCard',
  UnionPay = 'UnionPay',
  Visa = 'Visa',
  Unknown = 'Unknown',
}

// Edit contexts
const translations: Translations = {
  ja: {
    [CardBrand.AmericanExpress]: 'American Express',
    [CardBrand.DinersClub]: 'Diners Club',
    [CardBrand.Discover]: 'Discover',
    [CardBrand.JCB]: 'JCB',
    [CardBrand.MasterCard]: 'MasterCard',
    [CardBrand.UnionPay]: 'UnionPay',
    [CardBrand.Visa]: 'Visa',
    [CardBrand.Unknown]: 'Unknown',
  },
  en: {
    [CardBrand.AmericanExpress]: 'American Express',
    [CardBrand.DinersClub]: 'Diners Club',
    [CardBrand.Discover]: 'Discover',
    [CardBrand.JCB]: 'JCB',
    [CardBrand.MasterCard]: 'MasterCard',
    [CardBrand.UnionPay]: 'UnionPay',
    [CardBrand.Visa]: 'Visa',
    [CardBrand.Unknown]: 'Unknown',
  },
};

// DO NOT EDIT
const reverseTranslations = generateReverseTranslations(translations);

// Edit constants name
export const cardBrandEncoder = generateEncoder<CardBrand>(translations);
export const cardBrandDecoder = generateDecoder<CardBrand>(reverseTranslations);
