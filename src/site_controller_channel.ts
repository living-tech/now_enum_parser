import { Translations } from './lib/interfaces';
import {
  generateReverseTranslations,
  generateEncoder,
  generateDecoder,
} from './lib/generators';

export enum SiteControllerChannel {
  None = 'None', // 0.利用しない, 1.手間いらず, 2.TLリンカーン
  Temairazu = 'Temairazu',
  Tllincoln = 'Tllincoln',
}

// Edit contexts
const translations: Translations = {
  ja: {
    [SiteControllerChannel.None]: '利用しない',
    [SiteControllerChannel.Temairazu]: '手間いらず',
    [SiteControllerChannel.Tllincoln]: 'TLリンカーン',
  },
  en: {
    [SiteControllerChannel.None]: 'None',
    [SiteControllerChannel.Temairazu]: 'Temairazu',
    [SiteControllerChannel.Tllincoln]: 'TL-Lincoln',
  },
};

// DO NOT EDIT
const reverseTranslations = generateReverseTranslations(translations);

// Edit constants name
export const siteControllerChannelEncoder = generateEncoder<
  SiteControllerChannel
>(translations);
export const siteControllerChannelDecoder = generateDecoder<
  SiteControllerChannel
>(reverseTranslations);
