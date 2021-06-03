import { Translations } from './lib/interfaces';
import {
  generateReverseTranslations,
  generateEncoder,
  generateDecoder,
} from './lib/generators';

export enum FloorPlan {
  JapaneseStyle = 'Japanese Style', // 【改REINS】1:和室 2:洋室 3:DK 4:LDK 5:L 6:D 7:K 9:その他 21:LK 22:LD 23:S
  WesternStyle = 'Western Style',
  DK = 'DK',
  LDK = 'LDK',
  L = 'L',
  D = 'D',
  K = 'K',
  Other = 'Other',
  LK = 'LK',
  LD = 'LD',
  S = 'S',
}

// Edit contexts
const translations: Translations = {
  // 【改REINS】1:和室 2:洋室 3:DK 4:LDK 5:L 6:D 7:K 9:その他 21:LK 22:LD 23:S
  ja: {
    [FloorPlan.JapaneseStyle]: '和室',
    [FloorPlan.WesternStyle]: '洋室',
    [FloorPlan.DK]: 'DK',
    [FloorPlan.LDK]: 'LDK',
    [FloorPlan.L]: 'L',
    [FloorPlan.D]: 'D',
    [FloorPlan.K]: 'K',
    [FloorPlan.Other]: 'その他',
    [FloorPlan.LK]: 'LK',
    [FloorPlan.LD]: 'LD',
    [FloorPlan.S]: 'S',
  },
  en: {
    [FloorPlan.JapaneseStyle]: 'Japanese-style',
    [FloorPlan.WesternStyle]: 'Western-style',
    [FloorPlan.DK]: 'DK',
    [FloorPlan.LDK]: 'LDK',
    [FloorPlan.L]: 'L',
    [FloorPlan.D]: 'D',
    [FloorPlan.K]: 'K',
    [FloorPlan.Other]: 'Other',
    [FloorPlan.LK]: 'LK',
    [FloorPlan.LD]: 'LD',
    [FloorPlan.S]: 'S',
  },
};

// DO NOT EDIT
const reverseTranslations = generateReverseTranslations(translations);

// Edit constants name
export const floorPlanEncoder = generateEncoder<FloorPlan>(translations);
export const floorPlanDecoder = generateDecoder<FloorPlan>(reverseTranslations);
