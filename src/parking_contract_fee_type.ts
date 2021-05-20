import { Translations } from './lib/interfaces';
import {
  generateReverseTranslations,
  generateEncoder,
  generateDecoder,
} from './lib/generators';

// Edit enum name and contents
export enum ParkingContractFeeType { // 1:傾斜型 2:フラット型
  ContractRequiredFeeIncluded = 'ContractRequiredFeeIncluded',
  ContractRequiredFeeNotIncluded = 'ContractRequiredFeeNotIncluded',
}

// Edit contexts
const translations: Translations = {
  ja: {
    [ParkingContractFeeType.ContractRequiredFeeIncluded]: '契約必須(賃料に含む)', // 1:契約必須(賃料に含む) 2:契約必須（駐車場料金別)
    [ParkingContractFeeType.ContractRequiredFeeNotIncluded]: '契約必須（駐車場料金別)',
  },
  en: {
    [ParkingContractFeeType.ContractRequiredFeeIncluded]: 'Contract required (included in rent)', // 1: Contract required (included in rent) 2: Contract required (parking fee not included)
    [ParkingContractFeeType.ContractRequiredFeeNotIncluded]: 'Contract required (parking fee not included)',
  },
};

// DO NOT EDIT
const reverseTranslations = generateReverseTranslations(translations);

// Edit constants name
export const parkingContractFeeTypeEncoder = generateEncoder<ParkingContractFeeType>(translations);
export const parkingContractFeeTypeDecoder = generateDecoder<ParkingContractFeeType>(
  reverseTranslations,
);
