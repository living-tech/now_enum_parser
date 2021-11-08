import { Translations } from './lib/interfaces';
import {
  generateReverseTranslations,
  generateEncoder,
  generateDecoder,
} from './lib/generators';

// Edit enum name and contents
export enum ViaPointType {
  Station = 'Station',
  BusStop = 'BusStop',
}

// Edit contexts
const translations: Translations = {
  ja: {
    [ViaPointType.Station]: '駅',
    [ViaPointType.BusStop]: 'バス停',
  },
  en: {
    [ViaPointType.Station]: 'Station',
    [ViaPointType.BusStop]: 'Bus stop',
  },
};

// DO NOT EDIT
const reverseTranslations = generateReverseTranslations(translations);

// Edit constants name
export const viaPointTypeEncoder = generateEncoder<Translations>(translations);
export const viaPointTypeDecoder = generateDecoder<Translations>(
  reverseTranslations,
);
