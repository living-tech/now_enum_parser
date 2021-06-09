import { Translations } from './lib/interfaces';
import {
  generateReverseTranslations,
  generateEncoder,
  generateDecoder,
} from './lib/generators';

export enum SiteControllerChannel {
  None = 'None', // 0.利用しない, 1.手間いらず
  Temairazu = 'Temairazu',
}

// Edit contexts
const translations: Translations = {
  ja: {
    [SiteControllerChannel.None]: '利用しない',
    [SiteControllerChannel.Temairazu]: '手間いらず',
  },
  en: {
    [SiteControllerChannel.None]: 'None',
    [SiteControllerChannel.Temairazu]: 'Temairazu',
  },
};

// DO NOT EDIT
const reverseTranslations = generateReverseTranslations(translations);

// Edit constants name
export const siteControllerChannelEncoder = generateEncoder<SiteControllerChannel>(translations);
export const siteControllerChannelDecoder = generateDecoder<SiteControllerChannel>(reverseTranslations);
