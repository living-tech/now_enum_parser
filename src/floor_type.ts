import { Translations } from './lib/interfaces';
import {
  generateReverseTranslations,
  generateEncoder,
  generateDecoder,
} from './lib/generators';

export enum FloorType {
  R = 'R', // 10:R 20:K 25:SK 30:DK 35:SDK 40:LK 45:SLK 50:LDK 55:SLDK
  K = 'K', //
  SK = 'SK', //
  DK = 'DK', //
  SDK = 'SDK', //
  LK = 'LK', //
  SLK = 'SLK', //
  LDK = 'LDK', //
  SLDK = 'SLDK', //
}

// Edit contexts
const translations: Translations = {
  ja: {
    [FloorType.R]: 'R',
    [FloorType.K]: 'K',
    [FloorType.SK]: 'SK',
    [FloorType.DK]: 'DK',
    [FloorType.SDK]: 'SDK',
    [FloorType.LK]: 'LK',
    [FloorType.SLK]: 'SLK',
    [FloorType.LDK]: 'LDK',
    [FloorType.SLDK]: 'SLDK',
  },
  en: {
    [FloorType.R]: 'R',
    [FloorType.K]: 'K',
    [FloorType.SK]: 'SK',
    [FloorType.DK]: 'DK',
    [FloorType.SDK]: 'SDK',
    [FloorType.LK]: 'LK',
    [FloorType.SLK]: 'SLK',
    [FloorType.LDK]: 'LDK',
    [FloorType.SLDK]: 'SLDK',
  },
};

// DO NOT EDIT
const reverseTranslations = generateReverseTranslations(translations);

// Edit constants name
export const floorTypeEncoder = generateEncoder<FloorType>(translations);
export const floorTypeDecoder = generateDecoder<FloorType>(reverseTranslations);
