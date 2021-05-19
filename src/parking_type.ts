import { Translations } from './lib/interfaces';
import {
  generateReverseTranslations,
  generateEncoder,
  generateDecoder,
} from './lib/generators';

// Edit enum name and contents
export enum ParkingType { // 【改REINS】1:空有 2:空無 3:近隣 4:無 
  Available = 'Available',
  Unavailable = 'Unavailable',
  Nearby = 'Nearby',
  None = 'None',
}

// Edit contexts
const translations: Translations = {
  ja: {
    [ParkingType.Available]: '空有',
    [ParkingType.Unavailable]: '空無',
    [ParkingType.Nearby]: '近隣',
    [ParkingType.None]: '無',
  },
  en: {
    [ParkingType.Available]: 'Available',
    [ParkingType.Unavailable]: 'Unavailable',
    [ParkingType.Nearby]: 'Nearby',
    [ParkingType.None]: 'None',
  },
};

// DO NOT EDIT
const reverseTranslations = generateReverseTranslations(translations);

// Edit constants name
export const parkingTypeEncoder = generateEncoder<ParkingType>(translations);
export const parkingTypeDecoder = generateDecoder<ParkingType>(
  reverseTranslations,
);
