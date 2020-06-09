import { Translations } from './lib/interfaces';
import {
  generateReverseTranslations,
  generateEncoder,
  generateDecoder,
} from './lib/generators';

// Edit enum name and contents
// DBにすでに存在する値に合わせる
export enum BusinessTypeAlias {
  ServiceApartment = 'service-apartment',
  Hotel = 'hotel',
  GuestHouse = 'guest-house',
  ShareHouse = 'share-house',
}

// Edit contexts
const translations: Translations = {
  ja: {
    [BusinessTypeAlias.ServiceApartment	]: 'マンスリー賃貸',
    [BusinessTypeAlias.Hotel]: 'ホテル',
    [BusinessTypeAlias.GuestHouse]: 'ゲストハウス',
    [BusinessTypeAlias.ShareHouse]: 'シェアハウス',
  },
  en: {
    [BusinessTypeAlias.ServiceApartment	]: 'MONTHLY LEASE',
    [BusinessTypeAlias.Hotel]: 'HOTEL',
    [BusinessTypeAlias.GuestHouse]: 'GUEST HOUSE',
    [BusinessTypeAlias.ShareHouse]: 'SHARE HOUSE',
  },
};

// DO NOT EDIT
const reverseTranslations = generateReverseTranslations(translations);

// Edit constants name
export const businessTypeAliasEncoder = generateEncoder<BusinessTypeAlias>(translations);
export const businessTypeAliasDecoder = generateDecoder<BusinessTypeAlias>(reverseTranslations);
