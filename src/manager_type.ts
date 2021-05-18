import { Translations } from './lib/interfaces';
import {
  generateReverseTranslations,
  generateEncoder,
  generateDecoder,
} from './lib/generators';

export enum ManagerType {
  Resident = 'Resident', //  1:常駐 2:日勤 3:巡回 4:無 5:非常駐
  DayShift = 'Day Shift', //
  Patrol = 'Patrol', //
  None = 'None', //
  NonResident = 'Non-resident', //
}

// Edit contexts
const translations: Translations = {
  ja: {
    [ManagerType.Resident]: '常駐', // 1:常駐 2:日勤 3:巡回 4:無 5:非常駐
    [ManagerType.DayShift]: '日勤',
    [ManagerType.Patrol]: '巡回',
    [ManagerType.None]: '無',
    [ManagerType.NonResident]: '非常駐',
  },
  en: {
    [ManagerType.Resident]: 'Resident',
    [ManagerType.DayShift]: 'Day Shift',
    [ManagerType.Patrol]: 'Patrol',
    [ManagerType.None]: 'None',
    [ManagerType.NonResident]: 'Non-resident',
  },
};

// DO NOT EDIT
const reverseTranslations = generateReverseTranslations(translations);

// Edit constants name
export const managerTypeEncoder = generateEncoder<ManagerType>(
  translations,
);
export const managerTypeDecoder = generateDecoder<ManagerType>(
  reverseTranslations,
);
